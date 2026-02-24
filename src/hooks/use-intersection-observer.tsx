
'use client';

import { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: ObserverOptions = {}) => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, root, rootMargin, triggerOnce]);

  return { ref, isIntersecting };
};

    