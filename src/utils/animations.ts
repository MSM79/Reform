import type { Variants } from 'framer-motion';

export const blurRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  },
};
