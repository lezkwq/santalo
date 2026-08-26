import { Children, ReactNode, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationFrame } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { useMouseVector } from "@/components/hooks/use-mouse-vector";

interface ImageTrailProps {
  children: ReactNode;
  containerRef: RefObject<HTMLElement | null>;
  newOnTop?: boolean;
  rotationRange?: number;
  /** minimum time in ms between two spawned items */
  interval?: number;
  /** minimum distance in px between two spawned items */
  threshold?: number;
  maxItems?: number;
  /** how long each item stays before fading out (ms) */
  lifetime?: number;
}

interface TrailItemData {
  id: string;
  x: number;
  y: number;
  rotation: number;
  child: ReactNode;
}

function useTrailEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

const ImageTrail = ({
  children,
  containerRef,
  newOnTop = true,
  rotationRange = 8,
  interval = 130,
  threshold = 110,
  maxItems = 8,
  lifetime = 1000,
}: ImageTrailProps) => {
  const enabled = useTrailEnabled();
  const [trail, setTrail] = useState<TrailItemData[]>([]);

  const lastAddedTimeRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const currentIndexRef = useRef(0);
  const timersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  const { position: mousePosition, isInside } = useMouseVector(containerRef);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const removeFromTrail = useCallback((id: string) => {
    setTrail((current) => current.filter((item) => item.id !== id));
  }, []);

  const addToTrail = useCallback(
    (mousePos: { x: number; y: number }) => {
      if (!childrenArray.length) return;

      const id = uuidv4();
      const newItem: TrailItemData = {
        id,
        x: mousePos.x,
        y: mousePos.y,
        rotation: (Math.random() - 0.5) * rotationRange * 2,
        child: childrenArray[currentIndexRef.current],
      };

      currentIndexRef.current = (currentIndexRef.current + 1) % childrenArray.length;

      setTrail((current) => {
        const next = newOnTop ? [...current, newItem] : [newItem, ...current];
        if (next.length <= maxItems) return next;
        return newOnTop ? next.slice(next.length - maxItems) : next.slice(0, maxItems);
      });

      const timer = setTimeout(() => {
        removeFromTrail(id);
        timersRef.current.delete(timer);
      }, lifetime);
      timersRef.current.add(timer);
    },
    [childrenArray, lifetime, maxItems, newOnTop, removeFromTrail, rotationRange],
  );

  useAnimationFrame((time) => {
    if (!enabled || !isInside) return;

    const last = lastMousePosRef.current;
    if (last.x === mousePosition.x && last.y === mousePosition.y) return;

    const distance = Math.hypot(mousePosition.x - last.x, mousePosition.y - last.y);
    if (distance < threshold) return;
    if (time - lastAddedTimeRef.current < interval) return;

    lastMousePosRef.current = mousePosition;
    lastAddedTimeRef.current = time;
    addToTrail(mousePosition);
  });

  useEffect(() => {
    const set = timersRef.current;
    return () => {
      set.forEach((t) => clearTimeout(t));
      set.clear();
    };
  }, []);

  useEffect(() => {
    if (!isInside) setTrail([]);
  }, [isInside]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            className="pointer-events-none absolute select-none"
            style={{ left: item.x, top: item.y, translate: "-50% -50%" }}
            initial={{ opacity: 0, scale: 0.94, rotate: item.rotation * 0.4 }}
            animate={{ opacity: 1, scale: 1, rotate: item.rotation }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {item.child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export { ImageTrail };
