

'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface AnimatedImageSectionProps {
  title: string;
  description: string;
  image1_src: string;
  image1_alt: string;
  image1_dataAiHint?: string;
  image2_src: string;
  image2_alt: string;
  image2_dataAiHint?: string;
  className?: string;
  showTopSeparator?: boolean;
  showBottomSeparator?: boolean;
  overlayText?: string;
}

const AnimatedImageSection = ({
  title,
  description,
  image1_src, // This prop should be used for the image source
  image1_alt,
  image1_dataAiHint,
  image2_src,
  image2_alt,
  image2_dataAiHint,
  className,
  showTopSeparator = true,
  showBottomSeparator = false,
  overlayText,
}: AnimatedImageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimationStep(1);
      const timer = setTimeout(() => {
        setAnimationStep(2);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={cn("w-full max-w-6xl overflow-hidden", className)}>
      {showTopSeparator && <Separator className="bg-border/50 mb-12" />}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
          {title}
        </h2>
        <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="relative aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/5] w-full">
        <div
          className={cn(
            "absolute top-0 h-full rounded-lg overflow-hidden shadow-xl border border-primary/20",
            "transition-all duration-1000 ease-in-out",
            animationStep === 0 && "left-0 w-full opacity-0 scale-95",
            animationStep === 1 && "left-0 w-full opacity-100 scale-100",
            animationStep === 2 && "left-0 md:w-1/2 w-full opacity-100 scale-100"
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={image1_src} // Use the prop passed to the component
              alt={image1_alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint={image1_dataAiHint}
              onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/1200x800.png`; (e.target as HTMLImageElement).srcset = '' }}
            />
            {animationStep === 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <p className="text-white text-xl md:text-3xl font-semibold text-center drop-shadow-md">
                        {overlayText || `${title} Unveiled`}
                    </p>
                </div>
            )}
          </div>
        </div>

        <div
          className={cn(
            "absolute top-0 h-full rounded-lg overflow-hidden shadow-xl border border-primary/20",
            "transition-all duration-1000 ease-in-out",
            animationStep < 2 && "right-0 md:w-1/2 w-full opacity-0 md:translate-x-full",
            animationStep === 2 && "right-0 md:w-1/2 w-full opacity-100 md:translate-x-0"
          )}
           style={{ transitionDelay: animationStep === 2 ? '200ms' : '0ms' }}
        >
           <div className="relative w-full h-full">
            <Image
              src={image2_src}
              alt={image2_alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint={image2_dataAiHint}
              onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/1200x800.png`; (e.target as HTMLImageElement).srcset = '' }}
            />
          </div>
        </div>
      </div>
      {showBottomSeparator && <Separator className="bg-border/50 mt-12" />}
    </div>
  );
};

export default AnimatedImageSection;
