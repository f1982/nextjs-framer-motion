import { Variant } from "framer-motion";

export type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  showDelay?: number;
  delay?: number;
  callback?: () => void;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

export const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};
