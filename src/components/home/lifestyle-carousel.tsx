
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface LifestyleCarouselItemProps {
  src: string;
  alt: string;
  overlayText?: string;
  dataAiHint?: string;
  href?: string; // Add href for navigation
}

interface LifestyleCarouselProps {
  items: LifestyleCarouselItemProps[];
  className?: string;
}

export default function LifestyleCarousel({ items, className }: LifestyleCarouselProps) {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-6xl mx-auto relative", className)}>
      <Carousel
        plugins={[autoplayPlugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full group"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={item.href || "/bridal-collection"} legacyBehavior passHref>
                <a className="block aspect-video relative rounded-lg overflow-hidden shadow-xl border border-primary/20 cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    data-ai-hint={item.dataAiHint || item.alt.toLowerCase().replace(/\s+/g, '-')}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/1200x675.png';
                      (e.target as HTMLImageElement).srcset = '';
                    }}
                  />
                  {item.overlayText && (
                    <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 md:p-8">
                      <h3 className="text-xl md:text-3xl font-semibold text-white drop-shadow-md">
                        {item.overlayText}
                      </h3>
                    </div>
                  )}
                </a>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12" />
      </Carousel>
    </div>
  );
}
