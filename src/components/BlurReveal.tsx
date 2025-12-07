import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { blurRevealVariants } from '../utils/animations';

interface BlurRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const BlurReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: BlurRevealProps) => {
  return (
    <motion.div
      variants={blurRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// For staggered children animations
export const BlurRevealContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// For items inside BlurRevealContainer
export const BlurRevealItem = ({
  children,
  className = '',
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      variants={blurRevealVariants}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
