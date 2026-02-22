import { useEffect, useState } from "react";

interface useScrambleProps {
  text: string;
  started: boolean;
}

export default function useScramble({
  text,
  started = true,
}: useScrambleProps) {
  const [display, setDisplay] = useState(text);
  const chars = "アイウエオ01ABCDEF#@!%";
  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 30;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (frame > (i / text.length) * total + 5) return ch;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      frame++;
      if (frame > total + 10) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [text, started]);
  return display;
}
