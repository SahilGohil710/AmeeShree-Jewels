
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

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


const ITEMS_PER_PAGE = 6;

export default function NecklacesPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNecklaces = placeholderNecklaces.filter((necklace) =>
    necklace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + ITEMS_PER_PAGE, filteredNecklaces.length)
    );
  };

  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 md:px-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNecklaces.length === 0 && searchTerm && (
            <p className="text-center text-foreground/70 col-span-full">
              No necklaces found matching your search criteria.
            </p>
          )}
          {filteredNecklaces.slice(0, visibleCount).map((necklace) => (
             <Card key={necklace.id} className="overflow-hidden shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300 border border-border/60 rounded-lg group flex flex-col">
              <CardContent className="p-0">
                 <div className="aspect-square relative overflow-hidden rounded-t-lg">
                   <Image
                     src={necklace.img}
                     alt={necklace.name}
                     fill
                     sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                     className="object-cover transition-transform duration-500 ease-in-out"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://placehold.co/400x300.png`;
                       (e.target as HTMLImageElement).srcset = ''
                     }}
                     priority={necklace.id === 'n1'}
                   />
                 </div>
               </CardContent>
               <CardHeader className="p-4 flex-grow">
                 <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors duration-200">
                   {necklace.name}
                 </CardTitle>
                 <CardDescription className="text-sm text-foreground/70 pt-1">
                   {necklace.description}
                 </CardDescription>
               </CardHeader>
             </Card>
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
    </div>
  );
}
