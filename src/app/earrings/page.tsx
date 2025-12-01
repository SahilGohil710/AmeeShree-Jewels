
'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { ImageZoomModal } from '@/components/image-zoom-modal';

// Placeholder data - replace with actual product data later
// Updated image paths to be relative to the public directory
const placeholderEarrings = [
  { id: 'e1', name: 'Kamal Pushpa Earrings', price: '$1,850', img: '/Images/Earrings/Kamal_Pushpa_Earrings.png', description: 'Exquisite diamond lotus blossoms with brilliant drops of verdant emeralds.' },
  { id: 'e2', name: 'Brilliant Filigree Earrings', price: '$450', img: '/Images/Earrings/Brilliant_Filigree_Earrings.png', description: 'A dazzling cascade of diamonds in an intricate teardrop design.' },
  { id: 'e3', name: 'The Maharani Emeralds', price: '$680', img: '/Images/Earrings/The_Maharani_Emeralds.png', description: 'Regal emeralds and diamonds in a magnificent cascading tassel design.' },
  { id: 'e4', name: 'Jashn-e-Zamarud', price: '$2,500', img: '/Images/Earrings/Jashn_e_Zamarud.png', description: 'Intricate gold jaali work adorned with emeralds and brilliant diamonds.' },
  { id: 'e5', name: 'Blushing Cascade Earrings', price: '$1,200', img: '/Images/Earrings/Blushing_Cascade_Earrings.png', description: 'A graceful cascade of blushing gems, diamonds, and lustrous pearls.' },
  { id: 'e6', name: 'The Mayur Padma Earrings', price: '$1,500', img: '/Images/Earrings/The_Mayur_Padma_Earrings.png', description: 'The Mayur Padma Earrings' },
  { id: 'e7', name: 'Celestial Halo Drop', price: '$750', img: '/Images/Earrings/Celestial_Halo_Drop_Earrings.png', description: 'Lunar-inspired diamond drops with radiant halos and comet trails in shimmering white gold.' },
  { id: 'e8', name: 'The Sakura Blossom Earrings', price: '$1,350', img: '/Images/Earrings/The_Sakura_Blossom_Earrings.png', description: 'Blushing pink blossoms and diamonds cascade down a rose gold vine.' },
  { id: 'e9', name: 'Botanical Vine', price: '$320', img: '/Images/Earrings/Botanical_Vine_Earrings.png', description: 'Elegant diamond vines with leaf-shaped emerald drops, handcrafted for nature-inspired sophistication.' },
  { id: 'e10', name: 'Dual Flame', price: '$880', img: '/Images/Earrings/Dual_Flame_Earrings.png', description: 'Twisting flame motifs in rose and white gold, ablaze with fiery diamonds and bold style.' },
  { id: 'e11', name: 'Butterfly Wing Climber', price: '$1,100', img: '/Images/Earrings/Butterfly_Wing_Climber_Earrings.png', description: 'Intricately sculpted butterfly wings with diamond lacework and pink sapphire accents in motion.' },
  { id: 'e12', name: 'Art Deco Fan', price: '$1,950', img: '/Images/Earrings/Art_Deco_Fan_Earrings.png', description: 'Vintage glamour meets modern sparkle with geometric fans and emerald-cut diamond centerpieces.' },
  { id: 'e13', name: 'The Grand Mughal Garden Earrings', price: '$850', img: '/Images/Earrings/The_Grand_Mughal_Garden_Earrings.png', description: 'A waterfall of emeralds, rubies, and diamonds, pure royal splendor.' },
  { id: 'e14', name: 'Manikya Malika Earrings', price: '$2,100', img: '/Images/Earrings/Manikya_Malika_Earrings.png', description: 'Rich rubies surrounded by diamonds, cascading in a regal, timeless design.' },
  { id: 'e15', name: 'Chandelier Cascade', price: '$250', img: '/Images/Earrings/Chandelier_Cascade_Earrings.png', description: 'Multi-tiered diamond cascades that sparkle with every movement—luxury in flowing form.' },
  { id: 'e16', name: 'The Azure Leaf Drops', price: '$1,600', img: '/Images/Earrings/The_Azure_Leaf_Drops.png', description: 'Diamond leaves drift down to a brilliant sky-blue topaz drop.' },
  { id: 'e17', name: 'Evergreen Embrace Hoops', price: '$2,200', img: '/Images/Earrings/Evergreen_Embrace_Hoops.png', description: 'The modern rhythm of brilliant diamonds and lush green emeralds.' },
  { id: 'e18', name: 'The Luminous Leaf Earrings', price: '$980', img: '/Images/Earrings/The_Luminous_Leaf_Earrings.png', description: 'A brilliant diamond leaf suspends a single, perfect, lustrous pearl.' },
  { id: 'e19', name: 'Panna Suryamukhi Earrings', price: '$1,750', img: '/Images/Earrings/Panna_Suryamukhi_Earrings.png', description: 'A spectacular starburst of diamonds radiates from a central emerald.' },
  { id: 'e20', name: 'Shahi Mahal Jhumkas', price: '$3,200', img: '/Images/Earrings/Shahi_Mahal_Jhumkas.png', description: 'Architectural Jharokha jhumkas with brilliant emerald-cut and pear-shaped diamonds.' },
  { id: 'e21', name: 'The Kilimanjaro Cascade', price: '$1,400', img: '/Images/Earrings/The_Kilimanjaro_Cascade.png', description: 'Rare tanzanite crowned by a dazzling cascade of brilliant white diamonds.' },
  { id: 'e22', name: 'The Begum Moon Earrings', price: '$2,800', img: '/Images/Earrings/The_Begum_Moon_Earrings.png', description: 'The iconic chaandbali, reimagined in a dazzling cascade of diamonds.' },
  { id: 'e23', name: 'Almas Pushpanjali Earrings', price: '$600', img: '/Images/Earrings/Almas_Pushpanjali_Earrings.png', description: 'A brilliant diamond flower blooms above a sparkling crescent moon.' },
  { id: 'e24', name: 'The Celestial Wing Climbers', price: '$950', img: '/Images/Earrings/The_Celestial_Wing_Climbers.png', description: 'A brilliant wing of diamonds that gracefully sweeps up the ear.' },
];

const ITEMS_PER_PAGE = 8;

const EarringCard = ({ earring, index, onClick }: { earring: typeof placeholderEarrings[0], index: number, onClick: () => void }) => {
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
        className="relative aspect-[4/5] w-full cursor-pointer group/image"
        onClick={onClick}
      >
        <Image
          src={earring.img}
          alt={earring.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover/image:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/400x500.png`;
            (e.target as HTMLImageElement).srcset = '';
          }}
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary truncate">{earring.name}</h3>
        <p className="text-sm text-gray-200 mt-1 min-h-[3em]">{earring.description}</p>
      </div>
    </div>
  );
};


export default function EarringsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEarrings = placeholderEarrings.filter((earring) =>
    earring.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      Math.min(prevCount + ITEMS_PER_PAGE, filteredEarrings.length)
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Earrings Collection
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Adorn yourself with our stunning selection of handcrafted earrings, designed to illuminate every occasion with regal grace.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />

        <div className="mb-8 mt-8">
          <Input
            type="text"
            placeholder="Search earrings by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto border-border/60 focus:ring-primary focus:border-primary shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredEarrings.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No earrings found matching your search criteria.
            </p>
          )}
          {filteredEarrings.slice(0, visibleCount).map((earring, index) => (
             <EarringCard 
                key={earring.id} 
                earring={earring} 
                index={index} 
                onClick={() => openModal(earring.img, earring.name)} 
            />
          ))}
        </div>

        {visibleCount < filteredEarrings.length && (
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
