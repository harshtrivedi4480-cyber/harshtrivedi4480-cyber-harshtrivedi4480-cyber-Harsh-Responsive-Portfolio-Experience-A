import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] align-top">
      <span className="opacity-0">{word}</span>

      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 whitespace-nowrap"
      >
        {word}
      </motion.span>
    </span>
  );
}

export function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={className}
      style={{
        ...style,
        wordBreak: "normal",
        overflowWrap: "normal",
        whiteSpace: "normal",
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

