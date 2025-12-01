
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const featuredProducts = [
  {
    id: 'feat-ring',
    name: 'The Solitaire',
    category: 'Rings',
    href: '/rings',
    imgSrc: '/Images/Rings/Royal_Floral_Splendor_Ring.png',
    animationDelay: '0s',
  },
  {
    id: 'feat-earring',
    name: 'Emerald Drops',
    category: 'Earrings',
    href: '/earrings',
    imgSrc: '/Images/Earrings/Kamal_Pushpa_Earrings.png',
    animationDelay: '1.5s',
  },
  {
    id: 'feat-necklace',
    name: 'Ruby Regalia',
    category: 'Necklaces',
    href: '/necklaces',
    imgSrc: '/Images/Necklaces/Crimson_Floral_Glory_Necklace.png',
    animationDelay: '0.7s',
  },
  {
    id: 'feat-bangle',
    name: 'Heritage Bangle',
    category: 'Bangles',
    href: '/bangles',
    imgSrc: '/Images/Bangles/Pacheli_Heritage_Bangle.png',
    animationDelay: '2.2s',
  },
];

export default function FloatingProductCapsules() {
  return (
    <div className="w-full max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={product.href} legacyBehavior>
            <a
              className="group block animate-float"
              style={{ animationDelay: product.animationDelay }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/30 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out hover:-translate-y-2">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="relative aspect-square w-full mb-4">
                    <Image
                      src={product.imgSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 45vw, 20vw"
                      className="object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400.png'; (e.target as HTMLImageElement).srcset = '' }}
                    />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs md:text-sm text-foreground/70">
                    {product.category}
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
