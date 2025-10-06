"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number; // time per character
  startDelayMs?: number;
  className?: string;
};

export default function Typewriter({
  text,
  speedMs = 45,
  startDelayMs = 200,
  className,
}: TypewriterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(id);
            return c;
          }
          return c + 1;
        });
      }, speedMs);
    }, startDelayMs);
    return () => {
      clearTimeout(start);
    };
  }, [text, speedMs, startDelayMs]);

  const visible = text.slice(0, count);

  return (
    <span className={className} aria-label={text}>
      {visible}
      <span className="inline-block w-[1ch] anim-caret">|</span>
    </span>
  );
}

