
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
    imageSrc: '/Images/Scroll_Animation_HomePage/Embrace_Your_Radiance.jpg',
    imageAlt: 'Elegant gold necklace shimmering',
    dataAiHint: 'gold necklace sparkle',
    title: 'Embrace Your Radiance',
    text: 'Gold, a timeless symbol of purity and prosperity, reflects your inner light. Adorn yourself with its warm glow and let your brilliance shine through every facet of life.',
  },
  {
    id: 'insp2',
    imageSrc: '/Images/Scroll_Animation_HomePage/DFY.jpg',
    imageAlt: 'Sparkling diamond ring on a hand',
    dataAiHint: 'diamond ring hand',
    title: 'Diamonds: Forever Yours',
    text: 'Each diamond tells a story of enduring strength and unparalleled beauty. Cherish moments that last a lifetime, captured in the eternal sparkle of a meticulously chosen diamond.',
  },
  {
    id: 'insp3',
    imageSrc: '/Images/Scroll_Animation_HomePage/A_Symphony_of_Colors.jpg',
    imageAlt: 'Luxury gemstone pendant',
    dataAiHint: 'gemstone pendant luxury',
    title: 'A Symphony of Colors',
    text: 'Explore a vibrant world of precious gemstones, each with its unique charm and significance. Find the color that speaks to your soul and wear your story with pride.',
  },
  {
    id: 'insp4',
    imageSrc: '/Images/Scroll_Animation_HomePage/Crafted_with_Legacy.jpg',
    imageAlt: 'Artisan crafting jewelry',
    dataAiHint: 'jewelry artisan craft',
    title: 'Crafted with Legacy',
    text: 'Our master artisans pour generations of skill and passion into every piece. Experience the dedication and artistry that transforms precious materials into wearable masterpieces.',
  },
];

export default function InspirationalJewelrySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [itemScrollHeight, setItemScrollHeight] = useState(0);
  const [scrollTrackHeight, setScrollTrackHeight] = useState('0px');

  useEffect(() => {
    const calculateDimensions = () => {
      if (typeof window !== 'undefined') {
        const viewportHeight = window.innerHeight;
        const currentItemScrollHeight = viewportHeight * 0.8; // Each item "takes up" 80vh of scroll
        setItemScrollHeight(currentItemScrollHeight);
        // Total height needed for the scroll track to allow all items to be "active"
        setScrollTrackHeight(`${inspirationalContent.length * currentItemScrollHeight + viewportHeight * 0.5}px`);
      }
    };

    calculateDimensions(); // Initial calculation

    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!currentSectionRef || typeof window === 'undefined' || itemScrollHeight === 0) return; // Guard clause

    const handleScroll = () => {
      const { top } = currentSectionRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Define when the sticky behavior starts (e.g., when the top of the section reaches 25% of viewport height)
      const stickyTopOffset = viewportHeight * 0.25; // Adjust this value as needed
      const scrollPastStickyPoint = Math.max(0, stickyTopOffset - top);
      const totalAnimationHeight = itemScrollHeight * (inspirationalContent.length -1) ; // -1 because the first item is active initially

      let progress = 0;
      if (totalAnimationHeight > 0) {
        progress = Math.min(1, scrollPastStickyPoint / totalAnimationHeight);
      }

      let newIndex = Math.floor(progress * inspirationalContent.length);
      newIndex = Math.min(newIndex, inspirationalContent.length - 1); // Clamp to max index

      // Ensure the last item is active when scrolled to the end of the animation track
      if (scrollPastStickyPoint >= totalAnimationHeight) {
        newIndex = inspirationalContent.length - 1;
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial active index

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemScrollHeight]); // Re-run effect if itemScrollHeight changes

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

      {/* This div acts as the scroll track for the animation */}
      <div ref={sectionRef} className="relative" style={{ minHeight: scrollTrackHeight }}>
        <div className="sticky top-1/4 md:top-[calc(25vh)] grid md:grid-cols-2 gap-8 md:gap-12 items-center h-[50vh] md:h-[60vh]"> {/* Sticky container */}
          {/* Image container (left) */}
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-primary/30">
            {inspirationalContent.map((item, index) => (
              <Image
                key={item.id}
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-all duration-1000 ease-in-out absolute inset-0 transform",
                  index === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                )}
                data-ai-hint={item.dataAiHint}
                priority={index === 0}
                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x1000.png`; (e.target as HTMLImageElement).srcset = '' }}
              />
            ))}
          </div>

          {/* Text container (right) */}
          <div className="relative h-full flex flex-col justify-center"> {/* Ensure text container has height for positioning */}
            {inspirationalContent.map((item, index) => (
              <div
                key={`${item.id}-text`}
                className={cn(
                  "transition-all duration-700 ease-in-out absolute inset-0 p-4 flex flex-col justify-center", // Removed transform here, apply based on activeIndex
                  index === activeIndex
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-8 z-0 pointer-events-none" // Slide in from right
                )}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-3 drop-shadow-sm">{item.title}</h3>
                <p className="text-md lg:text-lg text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator className="bg-border/50 mt-16" />
    </div>
  );
}
