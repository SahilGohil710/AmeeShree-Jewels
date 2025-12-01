
'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { ImageZoomModal } from '@/components/image-zoom-modal';

const placeholderNecklaces = [
  { id: 'n1', name: 'Crimson Floral Glory Necklace', price: '$3,500', img: '/Images/Necklaces/Crimson_Floral_Glory_Necklace.png', description: 'Ornate necklace featuring vivid crimson stones, delicate floral patterns, and luxurious diamond detailing.' },
  { id: 'n2', name: 'Sunlit Radiance Diamond Necklace', price: '$2,800', img: '/Images/Necklaces/Sunlit_Radiance_Diamond_Necklace.png', description: 'Stunning necklace with golden brilliance, dazzling marquise diamonds, and a bold radiant design.' },
  { id: 'n3', name: 'Geometric Floral Elegance Necklace', price: '$4,200', img: '/Images/Necklaces/Geometric_Floral_Elegance_Necklace.png', description: 'A striking blend of geometric patterns and floral diamond clusters, crafted for modern luxury.' },
  { id: 'n4', name: 'Pearl Daisy Drop Necklace', price: '$900', img: '/Images/Necklaces/Pearl_Daisy_Drop_Necklace.png', description: 'Delicate floral necklace featuring pearl-centered daisies and shimmering teardrop diamonds for graceful elegance.' },
  { id: 'n5', name: 'Enchanted Vine Luxe Necklace', price: '$1,100', img: '/Images/Necklaces/Enchanted_Vine_Luxe_Necklace.png', description: 'A captivating necklace with cascading vine motifs, vibrant jewel tones, and dazzling diamond artistry.' },
  { id: 'n6', name: 'Floral Regal Harmony Necklace', price: '$2,400', img: '/Images/Necklaces/Floral_Regal_Harmony_Necklace.png', description: 'Elegant necklace featuring intricate floral filigree, rich jewel drops, and timeless traditional detailing.' },
  { id: 'n7', name: 'Blooming Ruby Ornate Necklace', price: '$5,500', img: '/Images/Necklaces/Blooming_Ruby_Ornate_Necklace.png', description: 'Exquisite floral necklace with ruby accents and dazzling diamonds crafted in intricate artistry.' },
  { id: 'n8', name: 'Royal Heart Filagree Necklace', price: '$1,900', img: '/Images/Necklaces/Royal_Heart_Filagree_Necklace.png', description: 'Graceful filigree necklace with rich ruby drops and ornate heart-inspired detailing for elegance.' },
  { id: 'n9', name: 'Rose Garden Heirloom Necklace', price: '$2,200', img: '/Images/Necklaces/Rose_Garden_Heirloom_Necklace.png', description: 'Graceful necklace adorned with layered heart motifs, sparkling clusters, and rich jewel accents.' },
  { id: 'n10', name: 'Rose Emerald Regalia Necklace', price: '$3,100', img: '/Images/Necklaces/Rose_Emerald_Regalia_Necklace.png', description: 'Statement necklace featuring carved rose accents, radiant diamonds, and grand green centerpiece elegance.' },
  { id: 'n11', name: 'Regal Ornate Heritage Necklace', price: '$850', img: '/Images/Necklaces/Regal_Ornate_Heritage_Necklace.png', description: 'Luxurious heritage necklace with intricate gold filigree, vibrant jewel drops, and timeless royal charm.' },
  { id: 'n12', name: 'Majestic DualTone Pearl Necklace', price: '$1,650', img: '/Images/Necklaces/Majestic_DualTone_Pearl_Necklace.png', description: 'Opulent necklace featuring layered dual-tone motifs, graceful drops, and rich traditional detailing.' },
  { id: 'n13', name: 'Crystal Floral Symphony Necklace', price: '$4,500', img: '/Images/Necklaces/Crystal_Floral_Symphony_Necklace.png', description: 'Brilliant floral diamond necklace featuring cascading teardrops and exquisite sparkle for timeless elegance.' },
  { id: 'n14', name: 'Cascading Diamond Orchestra Necklace', price: '$3,800', img: '/Images/Necklaces/Cascading_Diamond_Orchestra_Necklace.png', description: 'Dazzling layered necklace with intricate arches, floral motifs, and graceful diamond drops for luxury.' },
  { id: 'n15', name: 'Royal Leaf Opulence Necklace', price: '$2,900', img: '/Images/Necklaces/Royal_Leaf_Opulence_Necklace.png', description: 'Grand leaf-pattern necklace with radiant centerstones, intricate detailing, and a luxurious regal finish.' },
  { id: 'n16', name: 'Ornate Royal Scrollwork Necklace', price: '$1,950', img: '/Images/Necklaces/Ornate_Royal_Scrollwork_Necklace.png', description: 'Elegant scroll-pattern necklace with rich jewel accents, shimmering diamonds, and timeless regal charm.' },
  { id: 'n17', name: 'Imperial Grandeur Scroll Necklace', price: '$5,200', img: '/Images/Necklaces/Imperial_Grandeur_Scroll_Necklace.png', description: 'Magnificent scrollwork necklace with bold centerstones, sparkling diamond drops, and royal craftsmanship throughout.' },
  { id: 'n18', name: 'Pastel Peacock Dream Necklace', price: '$2,100', img: '/Images/Necklaces/Pastel_Peacock_Dream_Necklace.png', description: 'Artistic pastel-bead necklace with flowing peacock motifs and delicate diamond-studded elegance.' },
];


const ITEMS_PER_PAGE = 8;

const NecklaceCard = ({ necklace, index, onClick }: { necklace: typeof placeholderNecklaces[0], index: number, onClick: () => void }) => {
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
          src={necklace.img}
          alt={necklace.name}
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
        <h3 className="text-lg font-semibold text-primary truncate">{necklace.name}</h3>
        <p className="text-sm text-[#f7f3e8] mt-1 min-h-[3em]">{necklace.description}</p>
      </div>
    </div>
  );
};


export default function NecklacesPage() {
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

  const filteredNecklaces = placeholderNecklaces.filter((necklace) =>
    necklace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + ITEMS_PER_PAGE, filteredNecklaces.length)
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Necklaces Collection
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover our captivating necklaces, from delicate pendants to statement pieces, designed to enhance your natural radiance.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />

        <div className="mb-8 mt-8">
          <Input
            type="text"
            placeholder="Search necklaces by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto border-border/60 focus:ring-primary focus:border-primary shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredNecklaces.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No necklaces found matching your search criteria.
            </p>
          )}
          {filteredNecklaces.slice(0, visibleCount).map((necklace, index) => (
             <NecklaceCard 
                key={necklace.id} 
                necklace={necklace} 
                index={index} 
                onClick={() => openModal(necklace.img, necklace.name)}
              />
          ))}
        </div>

        {visibleCount < filteredNecklaces.length && (
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

    
