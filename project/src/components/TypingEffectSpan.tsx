import React, { useState, useEffect } from 'react';

interface TypingEffectSpanProps {
  text: string;
  delay: number;
  className?: string;
  loopDelay?: number; // New prop for loop delay
}

const TypingEffectSpan: React.FC<TypingEffectSpanProps> = ({
  text,
  delay,
  className,
  loopDelay, // Destructure new prop
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Ensure the full text is displayed after the effect finishes
      setDisplayedText(text);
      setIsTypingComplete(true);
    }
  }, [text, delay, currentIndex]);

  useEffect(() => {
    if (isTypingComplete && loopDelay) {
      const loopTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsTypingComplete(false);
      }, loopDelay);
      return () => clearTimeout(loopTimeout);
    }
  }, [isTypingComplete, loopDelay]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingEffectSpan;