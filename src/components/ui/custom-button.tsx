
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative group">
        <div
          className={cn(
            'absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-amber-300/50 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500',
            props.disabled && 'hidden'
          )}
        ></div>
        <Button
          ref={ref}
          className={cn(
            'relative bg-background text-primary border border-primary/50 hover:bg-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl',
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);
CustomButton.displayName = 'CustomButton';

export { CustomButton };
