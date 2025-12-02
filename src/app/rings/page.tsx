
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
const placeholderRings = [
  { id: 'r1', name: 'Royal Floral Splendor Ring', price: '$4,800', img: '/Images/Rings/Royal_Floral_Splendor_Ring.png', description: 'Statement ring featuring pear-shaped jewels, sparkling diamond petals, and exquisite floral craftsmanship.' },
  { id: 'r2', name: 'Regal Geometry Statement Ring', price: '$3,200', img: '/Images/Rings/Regal_Geometry_Statement_Ring.png', description: 'Bold geometric ring featuring princess-cut greens and mixed-cut diamonds in a modern gold setting.' },
  { id: 'r3', name: 'Royal Ruby Floral Stack', price: '$5,500', img: '/Images/Rings/royal_ruby_floral_stack.png', description: 'Luxurious gold bands showcasing vibrant oval rubies paired with intricate white floral diamond details.' },
  { id: 'r4', name: 'Pink Sapphire Bloom', price: '$2,900', img: '/Images/Rings/pink_sapphire_bloom.png', description: 'Layered rose design shimmering with pink sapphires, emeralds, and sparkling pear-cut center stones.' },
  { id: 'r5', name: 'Tanzanite Peacock Quill', price: '$1,800', img: '/Images/Rings/tanzanite_peacock_quill.png', description: 'Gold feather motif featuring a pear-shaped blue tanzanite and sparkling marquise diamond accents.' },
  { id: 'r6', name: 'Pastel Tourmaline Butterfly', price: '$1,600', img: '/Images/Rings/pastel_tourmaline_butterfly.png', description: 'Whimsical rose gold butterfly set with colorful tourmaline, citrine, and aquamarine sparkling gemstones.' },
  { id: 'r7', name: 'White Zircon Dahlia', price: '$2,100', img: '/Images/Rings/white_zircon_dahlia.png', description: 'Symmetrical floral cluster featuring sparkling white zircons set in a layered platinum design.' },
  { id: 'r8', name: 'Morganite Blossom Duo', price: '$1,500', img: '/Images/Rings/morganite_blossom_duo.png', description: 'Two-tone flower ring accented with blushing morganite and white topaz in a graceful design.' },
  { id: 'r9', name: 'Moissanite Papillon Sparkle', price: '$2,300', img: '/Images/Rings/moissanite_papillon_sparkle.png', description: 'Intricate openwork butterfly silhouette adorned with brilliant round and marquise cut moissanite gems.' },
  { id: 'r10', name: 'Twin Spinel Butterfly Bypass', price: '$1,450', img: '/Images/Rings/twin_spinel_butterfly_bypass.png', description: 'Rose gold open ring featuring two butterflies set with shimmering white spinels.' },
  { id: 'r11', name: 'White Beryl Majesty', price: '$3,800', img: '/Images/Rings/white_beryl_majesty.png', description: 'Large emerald-cut white beryl with marquise halo accents on a wide triple band.' },
  { id: 'r12', name: 'Danburite Mixed Cluster', price: '$2,600', img: '/Images/Rings/danburite_mixed_cluster.png', description: 'Radiant oval danburite surrounded by geometric pear and baguette cut gems in a cluster.' },
  { id: 'r13', name: 'Blushing Kunzite Marquise', price: '$2,950', img: '/Images/Rings/blushing_kunzite_marquise.png', description: 'Elegant marquise kunzite set in rose gold with a halo and floral side accents.' },
  { id: 'r14', name: 'Vivid Pink Topaz Marquise', price: '$2,400', img: '/Images/Rings/vivid_pink_topaz_marquise.png', description: 'Vibrant pink topaz marquise set in rose gold with elaborate diamond halo and shoulders.' },
  { id: 'r15', name: 'White Sapphire Pear Halo', price: '$3,100', img: '/Images/Rings/white_sapphire_pear_halo.png', description: 'Pear-shaped white sapphire center with halo on a wide rose gold baguette band.' },
  { id: 'r16', name: 'Chrysoberyl Crossover Twist', price: '$1,900', img: '/Images/Rings/chrysoberyl_crossover_twist.png', description: 'Intertwined two-tone band featuring sunny yellow chrysoberyls and sparkling clear gemstone accents.' },
  { id: 'r17', name: 'Quartz Chromatic Swirl', price: '$2,200', img: '/Images/Rings/quartz_chromatic_swirl.png', description: 'Sparkling white quartz center surrounded by multicolored apatite and garnet gems on gold.' },
  { id: 'r18', name: 'Antique Scapolite Regalia', price: '$3,500', img: '/Images/Rings/antique_scapolite_regalia.png', description: 'Vintage gold ring set with cushion white scapolite, red andesine, and chrome diopside.' },
];


const ITEMS_PER_PAGE = 8;

const RingCard = ({ ring, index, onClick }: { ring: typeof placeholderRings[0], index: number, onClick: () => void }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationDelay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      className={cn(
        "bg-[#111111] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 opacity-0",
        isIntersecting && "animate-fade-up"
      )}
      style={{ animationDelay }}
    >
      <div
        className="relative aspect-square w-full cursor-pointer group/image"
        onClick={onClick}
      >
        <Image
          src={ring.img}
          alt={ring.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover/image:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
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
        <h3 className="text-lg font-semibold text-primary truncate">{ring.name}</h3>
        <p className="text-sm text-[#f7f3e8] mt-1 min-h-[3em]">{ring.description}</p>
      </div>
    </div>
  );
};

export default function RingsPage() {
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

  const filteredRings = placeholderRings.filter((ring) =>
    ring.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + ITEMS_PER_PAGE, filteredRings.length)
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Rings Collection
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Find the perfect symbol of love, commitment, or a stunning statement piece from our diverse ring collection, crafted for royalty.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />

        <div className="mb-8 mt-8">
          <Input
            type="text"
            placeholder="Search rings by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto border-border/60 focus:ring-primary focus:border-primary shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredRings.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No rings found matching your search criteria.
            </p>
          )}
          {filteredRings.slice(0, visibleCount).map((ring, index) => (
             <RingCard 
                key={ring.id} 
                ring={ring} 
                index={index} 
                onClick={() => openModal(ring.img, ring.name)}
              />
          ))}
        </div>
        
        {visibleCount < filteredRings.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-xl px-8 py-3 text-base shadow-md hover:shadow-lg"
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
