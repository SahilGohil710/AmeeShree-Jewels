
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true, check on mount
  const { theme } = useTheme();

  useEffect(() => {
    // Check for mobile on the client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [isMobile]); // Re-run effect if isMobile changes

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  const cursorColor = theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))';

  return (
    <>
      {/* Outer Halo */}
      <div
        className={cn(
          'fixed pointer-events-none rounded-full z-[9999] transition-[transform,opacity] duration-500 ease-out',
          hidden && 'opacity-0 scale-50',
          isPointer ? 'opacity-20 scale-150' : 'opacity-30'
        )}
        style={{
          left: 0,
          top: 0,
          width: '50px',
          height: '50px',
          transform: `translate3d(${position.x - 25}px, ${position.y - 25}px, 0)`,
          backgroundColor: cursorColor,
          filter: 'blur(30px)',
        }}
      />
      {/* Inner Dot */}
      <div
        className={cn(
          'fixed pointer-events-none rounded-full z-[9999] transition-transform duration-100 ease-out',
          hidden && 'opacity-0 scale-0',
          isPointer ? 'scale-150' : 'scale-100'
        )}
        style={{
          left: 0,
          top: 0,
          width: isPointer ? '10px' : '6px',
          height: isPointer ? '10px' : '6px',
          transform: `translate3d(${position.x - (isPointer ? 5 : 3)}px, ${position.y - (isPointer ? 5 : 3)}px, 0)`,
          backgroundColor: cursorColor,
          opacity: 0.8,
        }}
      />
    </>
  );
}
