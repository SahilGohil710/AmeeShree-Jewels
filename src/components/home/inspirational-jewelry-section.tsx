
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface InspirationalItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  title: string;
  text: string;
}

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


const MobileInspirationItem = ({ item }: { item: InspirationalItem }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="space-y-4 text-center">
      <div
        className={cn(
          'relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-primary/30 transition-all duration-1000 ease-out opacity-0 translate-y-5',
          isIntersecting && 'opacity-100 translate-y-0'
        )}
      >
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          data-ai-hint={item.dataAiHint}
          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x600.png`; (e.target as HTMLImageElement).srcset = '' }}
        />
      </div>
      <div
        className={cn(
          'p-2 transition-all duration-1000 ease-out opacity-0 translate-y-5',
          isIntersecting && 'opacity-100 translate-y-0'
        )}
        style={{ transitionDelay: '200ms' }}
      >
        <h3 className="text-2xl font-semibold text-primary mb-2 drop-shadow-sm">{item.title}</h3>
        <p className="text-md text-foreground/80 leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
};


export default function InspirationalJewelrySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const triggerElements = currentRef.querySelectorAll('.scroll-trigger');
      triggerElements.forEach((el) => observer.observe(el));

      return () => {
        triggerElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [isMobile]);

  return (
    <div className="w-full max-w-6xl py-16 md:py-24 px-4 md:px-6">
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

      {isMobile ? (
        <div className="md:hidden space-y-12">
          {inspirationalContent.map((item) => (
            <MobileInspirationItem key={`${item.id}-mobile`} item={item} />
          ))}
        </div>
      ) : (
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-start" ref={sectionRef}>
          <div className="sticky top-1/4 md:top-[calc(25vh)] h-[50vh] md:h-[60vh]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-primary/30">
              {inspirationalContent.map((item, index) => (
                <Image
                  key={item.id}
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="50vw"
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
          <div className="relative flex flex-col space-y-[60vh]">
            {inspirationalContent.map((item, index) => (
              <div
                key={`${item.id}-text`}
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
      )}

      <Separator className="bg-border/50 mt-16" />
    </div>
  );
}
