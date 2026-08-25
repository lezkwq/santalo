import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TrailItem = {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
  ratio: number;
  rotate: number;
};

type ImageTrailProps = {
  images: string[];
  /** minimum distance in px between two spawned images */
  threshold?: number;
  /** how long each image stays before fading out (ms) */
  lifetime?: number;
  className?: string;
};

const WIDTHS = [206, 158, 184, 132, 196, 148];
const RATIOS = [0.72, 1.3, 0.78, 1.22, 0.68, 0.8];
const ROTATIONS = [-8, 6, -6.5, 9, -7.5, 7];

export function ImageTrail({
  images,
  threshold = 130,
  lifetime = 900,
  className,
}: ImageTrailProps) {
  const [items, setItems] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const last = useRef<{ x: number; y: number } | null>(null);
  const counter = useRef(0);
  const timers = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  const spawn = useCallback(
    (x: number, y: number) => {
      const index = counter.current;
      counter.current += 1;
      const src = images[index % images.length];
      if (!src) return;
      const id = index;
      const item: TrailItem = {
        id,
        src,
        x,
        y,
        width: WIDTHS[index % WIDTHS.length] ?? 170,
        ratio: RATIOS[index % RATIOS.length] ?? 0.75,
        rotate: ROTATIONS[index % ROTATIONS.length] ?? 0,
      };
      setItems((prev) => [...prev.slice(-7), item]);
      const timer = setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== id));
        timers.current.delete(timer);
      }, lifetime);
      timers.current.add(timer);
    },
    [images, lifetime],
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const prev = last.current;
      if (prev) {
        const distance = Math.hypot(x - prev.x, y - prev.y);
        if (distance < threshold) return;
      }
      last.current = { x, y };
      spawn(x, y);
    };

    node.addEventListener("pointermove", onMove);
    return () => {
      node.removeEventListener("pointermove", onMove);
    };
  }, [spawn, threshold]);

  useEffect(() => {
    const set = timers.current;
    return () => {
      set.forEach((t) => clearTimeout(t));
      set.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {items.map((item) => (
            <motion.img
              key={item.id}
              src={item.src}
              alt=""
              aria-hidden="true"
              draggable={false}
              initial={{ opacity: 0, scale: 0.94, rotate: item.rotate * 0.4 }}
              animate={{ opacity: 1, scale: 1, rotate: item.rotate }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="pointer-events-none absolute select-none object-cover"
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                aspectRatio: String(item.ratio),
                translate: "-50% -50%",
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
