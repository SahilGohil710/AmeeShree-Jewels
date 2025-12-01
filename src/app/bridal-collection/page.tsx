
'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImageZoomModal } from '@/components/image-zoom-modal';
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const placeholderBridalSets = [
  { id: 'bs1', name: 'Divya Lakshmi Heritage', description: 'Opulent gold-diamond bridal set featuring goddess motifs, intricate craftsmanship, and timeless temple artistry.', img: '/Images/Bridal_Collection/Divya_Lakshmi_Heritage.png', dataAiHint: 'divya lakshmi heritage' },
  { id: 'bs2', name: 'Emerald Royal Bridal Grace Set', description: 'Luxurious diamond choker with rich emerald drops, crafted for an elegant and regal bridal look.', img: '/Images/Bridal_Collection/Emerald_Royal_Bridal_Grace_Set.png', dataAiHint: 'emerald bridal grace' },
  { id: 'bs3', name: 'Ruby Pearl Regal Bridal Set', description: 'Grand diamond necklace with rich ruby highlights and pearl drops, perfect for royal bridal elegance.', img: '/Images/Bridal_Collection/Ruby_Pearl_Regal_Bridal_Set.png', dataAiHint: 'ruby pearl bridal' },
  { id: 'bs4', name: 'Sapphire Royal Elegance Bridal Set', description: 'Statement diamond necklace with deep blue sapphire drops, crafted for bold and luxurious bridal charm.', img: '/Images/Bridal_Collection/Sapphire_Royal_Elegance_Bridal_Set.png', dataAiHint: 'sapphire royal elegance' },
  { id: 'bs5', name: 'Emerald Floral Regal Bridal Set', description: 'Magnificent diamond necklace with floral emerald clusters and drops, designed for grand bridal opulence.', img: '/Images/Bridal_Collection/Emerald_Floral_Regal_Bridal_Set.png', dataAiHint: 'emerald floral bridal' },
  { id: 'bs6', name: 'Emerald Grand Cascading Bridal Set', description: 'Lavish gold necklace with cascading emerald motifs and pearls, perfect for extravagant bridal elegance.', img: '/Images/Bridal_Collection/Emerald_Grand_Cascading_Bridal_Set.png', dataAiHint: 'emerald cascading bridal' },
  { id: 'bs7', name: 'Emerald Raani Classic Bridal Set', description: 'Traditional emerald-beaded bridal set with intricate polki detailing and regal handcrafted elegance.', img: '/Images/Bridal_Collection/Emerald_Raani_Classic_Bridal_Set.png', dataAiHint: 'emerald raani bridal' },
  { id: 'bs8', name: 'Emerald Pink Royal Heirloom Bridal Set', description: 'Exquisite gold bridal set with emerald drops, pink highlights, and intricate polki craftsmanship.', img: '/Images/Bridal_Collection/Emerald_Pink_Royal_Heirloom_Bridal_Set.png', dataAiHint: 'emerald pink heirloom' },
  { id: 'bs9', name: 'Peacock Emerald Tradition Bridal Set', description: 'Majestic peacock-themed bridal set with emerald drops, coral accents, and intricate polki detailing.', img: '/Images/Bridal_Collection/Peacock_Emerald_Tradition_Bridal_Set.png', dataAiHint: 'peacock emerald bridal' },
  { id: 'bs10', name: 'Emerald Coral Royal Heritage Bridal Set', description: 'Opulent bridal choker featuring emerald squares, coral detailing, pearls, and intricate traditional craftsmanship.', img: '/Images/Bridal_Collection/Emerald_Coral_Royal_Heritage_Bridal_Set.png', dataAiHint: 'emerald coral heritage' },
  { id: 'bs11', name: 'Emerald Crystal Elegance Bridal Set', description: 'Graceful chandelier-style bridal set with emerald centers, crystal drops, and intricate filigree detailing.', img: '/Images/Bridal_Collection/Emerald_Crystal_Elegance_Bridal_Set.png', dataAiHint: 'emerald crystal elegance' },
  { id: 'bs12', name: 'Emerald Round Floral Designer Bridal Set', description: 'Elegant round-pattern bridal necklace with emerald highlights and intricate floral filigree craftsmanship.', img: '/Images/Bridal_Collection/Emerald_Round_Floral_Designer_Bridal_Set.png', dataAiHint: 'emerald floral designer' },
  { id: 'bs13', name: 'Peacock Heritage Designer Bridal Set', description: 'Artistic bridal set featuring peacock motifs, green accents, and intricate traditional craftsmanship.', img: '/Images/Bridal_Collection/Peacock_Heritage_Designer_Bridal_Set.png', dataAiHint: 'peacock heritage designer' },
  { id: 'bs14', name: 'Butterfly Floral Dream Bridal Set', description: 'Delicate bridal set featuring sparkling butterfly motifs and cascading floral diamond artistry.', img: '/Images/Bridal_Collection/Butterfly_Floral_Dream_Bridal_Set.png', dataAiHint: 'butterfly floral bridal' },
  { id: 'bs15', name: 'Royal Teardrop Grandeur Bridal Set', description: 'Luxurious bridal set featuring bold teardrop motifs, rich green accents, and ornate detailing.', img: '/Images/Bridal_Collection/Royal_Teardrop_Grandeur_Bridal_Set.png', dataAiHint: 'royal teardrop grandeur' },
  { id: 'bs16', name: 'Heritage Kundan Regal Bridal Set', description: 'Grand bridal set featuring kundan stones, pearl accents, and intricate traditional craftsmanship.', img: '/Images/Bridal_Collection/Heritage_Kundan_Regal_Bridal_Set.png', dataAiHint: 'kundan regal bridal' },
  { id: 'bs17', name: 'Golden Rainfall Diamond Bridal Set', description: 'Shimmering bridal set featuring cascading golden teardrops and radiant diamond detailing for luxury.', img: '/Images/Bridal_Collection/Golden_Rainfall_Diamond_Bridal_Set.png', dataAiHint: 'golden rainfall diamond' },
  { id: 'bs18', name: 'Crimson Regalia Diamond Bridal Set', description: 'Bold bridal masterpiece featuring deep crimson stones, shimmering diamonds, and striking cascading design.', img: '/Images/Bridal_Collection/Crimson_Regalia_Diamond_Bridal_Set.png', dataAiHint: 'crimson regalia diamond' },
];


const ITEMS_PER_PAGE = 8;

const BridalSetCard = ({ set, index, onClick }: { set: typeof placeholderBridalSets[0], index: number, onClick: () => void }) => {
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
          src={set.img}
          alt={set.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover/image:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          data-ai-hint={set.dataAiHint}
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
        <h3 className="text-lg font-semibold text-primary truncate">{set.name}</h3>
        <p className="text-sm text-[#f7f3e8] mt-1 min-h-[3em]">{set.description}</p>
      </div>
    </div>
  );
};


export default function BridalCollectionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBridalSets = placeholderBridalSets.filter((set) =>
    set.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (img: string, alt: string) => {
    setSelectedImage(img);
    setSelectedImageAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt(null);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + ITEMS_PER_PAGE, filteredBridalSets.length)
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Bridal Collection
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover our breathtaking bridal sets, meticulously designed to make your special day unforgettable. Each piece radiates timeless elegance and royal charm.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />

        <div className="mb-8 mt-8">
          <Input
            type="text"
            placeholder="Search bridal sets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto border-border/60 focus:ring-primary focus:border-primary shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredBridalSets.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No bridal sets found matching your search criteria.
            </p>
          )}
          {filteredBridalSets.slice(0, visibleCount).map((set, index) => (
             <BridalSetCard 
               key={set.id} 
               set={set} 
               index={index} 
               onClick={() => openModal(set.img, set.name)}
             />
          ))}
        </div>
        {visibleCount < filteredBridalSets.length && (
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

    