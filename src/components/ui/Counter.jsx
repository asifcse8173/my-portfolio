import { useEffect, useState } from "react";

/** Counts from 0 up to `to` with an ease-out curve. */
export default function Counter({ to, decimals = 0, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame, start;
    const step = (time) => {
      start ??= time;
      const progress = Math.min((time - start) / 1400, 1);
      setValue(to * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  return <>{value.toFixed(decimals)}{suffix}</>;
}
