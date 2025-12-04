import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for typewriter effect
 * @param words - Array of words to cycle through
 * @param typingSpeed - Speed of typing each character (ms)
 * @param deletingSpeed - Speed of deleting each character (ms)
 * @param pauseDuration - Pause duration after completing a word (ms)
 */
export const useTypewriter = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[wordIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        // Word complete, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else {
        // Word deleted, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [
    displayText,
    isDeleting,
    isPaused,
    currentWord,
    words.length,
    pauseDuration,
  ]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
};
