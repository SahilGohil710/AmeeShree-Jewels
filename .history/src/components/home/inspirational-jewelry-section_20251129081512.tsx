
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '../ui/button';

interface InspirationalItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  title: string;
  text: string;
}

// Updated image paths to point to the /public/Images/Scroll Animation/ directory
const inspirationalContent: InspirationalItem[] = [
  {
    id: 'insp1',
    imageSrc: '/Images/Scroll_Animation/The_Birth_of_Imagination.png',
    imageAlt: 'A hand sketching a jewelry design',
    dataAiHint: 'jewelry design sketch',
    title: 'The Birth of Imagination',
    text: 'Every masterpiece begins with a vision sketched by hand. Designers explore shapes, gemstones, and intricate details, blending art and precision to create the foundation of a jewel. Each stroke captures intention, inspiration, and creativity—setting the stage for a piece crafted to reflect beauty, emotion, and timeless elegance.',
  },
  {
    id: 'insp2',
    imageSrc: '/Images/Scroll_Animation/The_Soul_of_the_Stone.png',
    imageAlt: 'Close-up of a brilliant gemstone',
    dataAiHint: 'gemstone macro shot',
    title: 'The Soul of the Stone',
    text: 'Our gemstones are chosen with uncompromising care. Each emerald, sapphire, ruby, and diamond is inspected for clarity, brilliance, and character. This moment of selection defines the heart of the jewel—ensuring every creation radiates with authenticity, vibrance, and the rare beauty that transforms a concept into something truly extraordinary.',
  },
  {
    id: 'insp3',
    imageSrc: '/Images/Scroll_Animation/The_Final_Radiance.png',
    imageAlt: 'Finished jewelry piece shining',
    dataAiHint: 'luxury jewelry final product',
    title: 'The Final Radiance',
    text: 'Here, craftsmanship reaches its pinnacle. Expert hands polish, set, and perfect every curve and facet, bringing the design to life. The finished jewel reflects precision, skill, and passion—ready to shine with timeless brilliance and become a cherished part of someone’s story.',
  },
];

export default function InspirationalJewelrySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index from the data attribute
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the item is in the vertical center of the viewport
        threshold: 0,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      // Create dummy divs to act as scroll triggers for each item
      const triggerElements = currentRef.querySelectorAll('.scroll-trigger');
      triggerElements.forEach((el) => observer.observe(el));

      return () => {
        triggerElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <div className="w-full max-w-6xl py-16 px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
          The Essence of Elegance
        </h2>
        <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto">
          A glimpse into our world of color-rich diamonds, artistic forms, and meticulous craftsmanship, where every creation is designed to feel timeless.
        </p>
        <Link href="/about" passHref>
          <Button variant="link" className="text-primary hover:text-primary/80 mt-4 text-sm md:text-base">
            Explore the Craftsmanship
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start" ref={sectionRef}>
        {/* Sticky Image container (left) */}
        <div className="sticky top-1/4 md:top-[calc(25vh)] h-[50vh] md:h-[60vh]">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-primary/30">
            {inspirationalContent.map((item, index) => (
              <Image
                key={item.id}
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-opacity duration-1000 ease-in-out absolute inset-0",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
                data-ai-hint={item.dataAiHint}
                priority={index === 0}
                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x1000.png`; (e.target as HTMLImageElement).srcset = '' }}
              />
            ))}
          </div>
        </div>

        {/* Scrolling Text container (right) */}
        <div className="relative flex flex-col space-y-[60vh]">
          {inspirationalContent.map((item, index) => (
            <div
              key={`${item.id}-text`}
              // This div is the trigger for the IntersectionObserver
              className="scroll-trigger h-[80vh] flex items-center"
              data-index={index}
            >
              <div
                className={cn(
                  "transition-all duration-1000 ease-out p-4",
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                )}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-3 drop-shadow-sm">{item.title}</h3>
                <p className="text-md lg:text-lg text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator className="bg-border/50 mt-16" />
    </div>
  );
}
