
'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { ImageZoomModal } from '@/components/image-zoom-modal';

// Placeholder data
const placeholderBangles = [
  { id: 'b1', name: 'Ruby Halo Garland', price: '$550', img: '/Images/Bangles/Ruby_Halo_Garland.png', description: 'Luxurious gold bangle encrusted with dazzling oval rubies and brilliant diamond clusters.' },
  { id: 'b2', name: 'Temple Revival Kada', price: '$1,800', img: '/Images/Bangles/Temple_Revival_Kada_Bangle.png', description: 'Exquisite gold kada bangle, intricately crafted with diamonds, rubies, and detailed deity engravings.' },
  { id: 'b3', name: 'Emerald Vine Radiance', price: '$4,500', img: '/Images/Bangles/Emerald_Vine_Radiance.png', description: 'Stunning gold bangle adorned with vibrant oval emeralds and sparkling diamond clusters.' },
  { id: 'b4', name: 'Celestial Net Weave', price: '$3,200', img: '/Images/Bangles/Celestial_Net_Weave.png', description: 'Elegant gold bangles featuring intricate floral diamond clusters with delicate yellow diamond accents.' },
  { id: 'b5', name: 'Frozen Garden Loop', price: '$950', img: '/Images/Bangles/Frozen_Garden_Loop.png', description: 'Elegant gold bangle with alternating diamond floral clusters and subtle emerald accents.' },
  { id: 'b6', name: 'Symmetric Petalstream', price: '$2,100', img: '/Images/Bangles/Symmetric_Petalstream.png', description: 'Elegant gold bangles intricately adorned with sparkling diamond floral clusters and delicate petal patterns.' },
  { id: 'b7', name: 'Starvine Harmony', price: '$3,800', img: '/Images/Bangles/Starvine_Harmony.png', description: 'Elegant gold bangles featuring intricate vine patterns with sparkling white and yellow diamond flowers.' },
  { id: 'b8', name: 'Infinity Phool', price: '$720', img: '/Images/Bangles/Infinity_Phool.png', description: 'Luxurious gold bangles with intricate floral patterns, adorned with brilliant white and yellow diamonds.' },
  { id: 'b9', name: 'Royal Lotus Halo', price: '$2,950', img: '/Images/Bangles/Royal_Lotus_Halo.png', description: 'Exquisite gold bangles featuring intricate lotus designs adorned with sparkling diamonds and subtle pink gems.' },
  { id: 'b10', name: 'Chakra Gleam', price: '$1,500', img: '/Images/Bangles/Chakra_Gleam.png', description: 'Elegant gold bangles featuring circular diamond clusters with ruby, emerald, and sapphire centers.' },
  { id: 'b11', name: 'Peacock Parade Sapphire Emerald', price: '$1,950', img: '/Images/Bangles/Peacock_Parade_Sapphire_Emerald_Bangle.png', description: 'Luxurious gold bangle adorned with brilliant diamonds, vibrant emeralds, and deep blue sapphires in a peacock-inspired design.' },
  { id: 'b12', name: 'Sunset Spectrum', price: '$350', img: '/Images/Bangles/Sunset_Spectrum.png', description: 'Ornate gold bangles heavily studded with vibrant orange-red and sparkling white gemstones.' },
  { id: 'b13', name: 'Gulab Motif Bangle', price: '$1,200', img: '/Images/Bangles/Gulab_Motif_Bangle.png', description: 'Exquisite gold bangle intricately designed with rose motifs, adorned with pink and white diamonds.' },
  { id: 'b14', name: 'Whispering Leaves Bangle', price: '$3,400', img: '/Images/Bangles/Whispering_Leaves_Bangle.png', description: 'Elegant rose gold bangle featuring delicate leaf motifs encrusted with sparkling pave diamonds.' },
  { id: 'b15', name: 'Chakri Inspired Everyday Diamond', price: '$850', img: '/Images/Bangles/Chakri_Inspired_Everyday_Diamond_Bangle.png', description: 'Elegant gold bangle featuring a diamond-studded band complemented by vibrant enamel and paisley motifs.' },
  { id: 'b16', name: 'Pacheli Heritage Bangle', price: '$5,100', img: '/Images/Bangles/Pacheli_Heritage_Bangle.png', description: 'Exquisite gold bangle featuring intricate floral carvings, delicate filigree, and sparkling diamond clusters.' },
  { id: 'b17', name: 'Eternal Embrace', price: '$2,600', img: '/Images/Bangles/Eternal_Embrace.jpg', description: 'Exquisite gold bangles adorned with sparkling diamonds and intricate filigree work.' },
  { id: 'b18', name: 'Temple Mirror Pair', price: '$480', img: '/Images/Bangles/Temple_Mirror_Pair.png', description: 'Elegant gold bangles with alternating white, yellow, and brown diamond-studded geometric patterns.' },
];

const ITEMS_PER_PAGE = 8;

const BangleCard = ({ bangle, index, onClick }: { bangle: typeof placeholderBangles[0], index: number, onClick: () => void }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationDelay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      className={cn(
        "bg-[#111111] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transition-shadow duration-300 ease-out hover:scale-105 opacity-0",
        isIntersecting && "animate-fade-up"
      )}
      style={{ animationDelay }}
    >
      <div
        className="relative aspect-square w-full cursor-pointer group/image"
        onClick={onClick}
      >
        <Image
          src={bangle.img}
          alt={bangle.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/400x400.png`;
            (e.target as HTMLImageElement).srcset = '';
          }}
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary truncate">{bangle.name}</h3>
        <p className="text-sm text-foreground/80 mt-1 min-h-[3em]">{bangle.description}</p>
      </div>
    </div>
  );
};


export default function BanglesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (img: string, alt: string) => {
    setSelectedImage(img);
    setSelectedImageAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt(null);
  };

  const filteredBangles = placeholderBangles.filter((bangle) =>
    bangle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + ITEMS_PER_PAGE, filteredBangles.length)
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Bangles & Bracelets
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Explore our exquisite collection of bangles and bracelets, perfect for adding a touch of royalty and sophistication to any ensemble.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />
        
        <div className="mb-8 mt-8">
          <Input
            type="text"
            placeholder="Search bangles & bracelets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto border-border/60 focus:ring-primary focus:border-primary shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredBangles.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No bangles or bracelets found matching your search criteria.
            </p>
          )}
          {filteredBangles.slice(0, visibleCount).map((bangle, index) => (
             <BangleCard 
                key={bangle.id} 
                bangle={bangle} 
                index={index}
                onClick={() => openModal(bangle.img, bangle.name)}
              />
          ))}
        </div>

        {visibleCount < filteredBangles.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-full px-8 py-3 text-base shadow-md hover:shadow-lg"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
      {selectedImage && selectedImageAlt && (
        <ImageZoomModal
          imageUrl={selectedImage}
          altText={selectedImageAlt}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

    