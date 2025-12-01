

'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Gem } from 'lucide-react';

export default function ArtisanSpotlightSection() {
  return (
    <div className="w-full max-w-6xl py-16 px-4 md:px-6">
      <Separator className="bg-border/50 mb-12" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary flex items-center gap-2">
            <Gem className="h-7 w-7 text-primary" />
            Behind the Craft
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
            The Art of AmeeShree
          </h3>
          <p className="text-md md:text-lg text-foreground/80 leading-relaxed">
            Each AmeeShree jewel is a testament to generations of artistry and meticulous attention to detail. Our master craftsmen dedicate their skill and passion to transforming the finest materials into timeless treasures, ensuring every piece tells a story of unparalleled beauty and dedication.
          </p>
          <p className="text-md md:text-lg text-foreground/80 leading-relaxed">
            From the initial sketch to the final polish, every step is imbued with a commitment to excellence. We honor traditional techniques while embracing innovative design, creating jewelry that is both classic and contemporary.
          </p>
        </div>
        <div className="aspect-video md:aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl border border-primary/20 group">
          <Image
            src="/Images/artisan-crafting.jpg"
            alt="Artisan crafting AmeeShree jewelry"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint="artisan jewelry workshop"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600.png'; (e.target as HTMLImageElement).srcset = '' }}
          />
        </div>
      </div>
    </div>
  );
}
