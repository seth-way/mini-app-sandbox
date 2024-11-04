import { useState, useRef, useLayoutEffect } from "react";

interface IDotSize {
  min: number;
  max: number;
}

export const useDotResize = (
  targetRef: React.RefObject<HTMLElement>,
  week: number,
): IDotSize => {
  const [size, setSize] = useState<IDotSize>({ min: 200, max: 400 });
  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || !entries.length) return;

      const { width } = entries[0].contentRect;
      const [min, max] = calculateMinMax(width, week);
      setSize({ min, max });
    });

    if (targetRef.current) {
      const { current } = targetRef;
      observer.observe(current);

      return () => observer.unobserve(current);
    }
  }, [targetRef, week]);

  return size;
};

function calculateMinMax(width: number, week: number): number[] {
  if (width < 325) return [0.8 * width, width];
  const multiplier = week < 3 ? 1.2 : 2;
  const max = width * multiplier + (week * width) / 18;
  const min = week < 3 ? 0.9 * max : width / 3.5;
  return [min, max];
}
