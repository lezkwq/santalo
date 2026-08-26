import { RefObject, useEffect, useState } from "react";

export const useMouseVector = (containerRef?: RefObject<HTMLElement | null>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [vector, setVector] = useState({ dx: 0, dy: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const element = containerRef?.current;
    if (!element) return;

    let lastPosition = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition({ x, y });
      setVector({ dx: x - lastPosition.x, dy: y - lastPosition.y });
      lastPosition = { x, y };
    };

    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") setIsInside(true);
    };

    const handlePointerLeave = () => setIsInside(false);

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerenter", handlePointerEnter);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerenter", handlePointerEnter);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef]);

  return { position, vector, isInside };
};
