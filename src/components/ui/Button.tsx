import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200 shadow-lg',
      secondary: 'bg-amber-400 text-amber-900 hover:bg-amber-500 shadow-amber-200 shadow-lg',
      outline: 'border-2 border-rose-500 text-rose-500 hover:bg-rose-50',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
