"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className} aria-label={text}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / totalWords;
        const end = Math.min(start + 0.15, 1);

        return (
          <Word
            key={wordIndex}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
