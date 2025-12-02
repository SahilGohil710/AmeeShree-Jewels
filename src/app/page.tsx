
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { Gem } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import InspirationalJewelrySection from '@/components/home/inspirational-jewelry-section';
import { Button } from '@/components/ui/button';
import WhyChooseUsSection from '@/components/home/why-choose-us';
import ComparisonSlider from '@/components/home/comparison-slider';


// Placeholder Customer Reviews
const customerReviews = [
    { id: 'c1', name: 'Priya S.', quote: 'Absolutely stunning piece! The craftsmanship is impeccable. Felt like royalty wearing it.', rating: 5, avatar: 'PS' },
    { id: 'c2', name: 'Rahul K.', quote: 'Excellent service and beautiful designs. The team was very helpful in selecting the perfect gift.', rating: 5, avatar: 'RK' },
    { id: 'c3', name: 'Anjali M.', quote: 'Received my earrings today and they are breathtaking. Even more beautiful in person.', rating: 5, avatar: 'AM' },
    { id: 'c4', name: 'Vikram R.', quote: 'A trustworthy place for certified jewelry. Very happy with my purchase and the quality.', rating: 4, avatar: 'VR' },
    { id: 'c5', name: 'Sneha P.', quote: 'The attention to detail is amazing. These jewels are truly unique and elegant.', rating: 5, avatar: 'SP' },
    { id: 'c6', name: 'Amit G.', quote: 'Ordered over the phone, and the process was smooth. Delivery was prompt and secure.', rating: 5, avatar: 'AG' },
    { id: 'c7', name: 'Deepika V.', quote: 'I love the classic yet modern designs. My new bangle is my favorite accessory!', rating: 5, avatar: 'DV' },
    { id: 'c8', name: 'Manish T.', quote: 'High-quality diamonds and gemstones. You can feel the luxury. Highly recommend.', rating: 4, avatar: 'MT' },
    { id: 'c9', name: 'Sunita B.', quote: 'A wonderful experience from start to finish. The perfect place for special occasions.', rating: 5, avatar: 'SB' },
    { id: 'c10', name: 'Rajesh N.', quote: 'The gold finish is brilliant, and the design feels substantial. Great value.', rating: 5, avatar: 'RN' },
    { id: 'c11', name: 'Kavita D.', quote: 'Felt very special browsing their collection. Found exactly what I was looking for.', rating: 5, avatar: 'KD'},
];


export default function Home() {
   const reviewsPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-16 px-4 md:px-6">
       {/* Hero Section */}
       <div className="relative w-full min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0">
           <Image
             src="/Images/HomePage/2.png"
             alt="AmeeShree Jewels hero"
             fill
             priority
             className="object-cover animate-hero-zoom"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
         </div>

         <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg animate-text-focus-in">
              AmeeShree Jewels: Where Royalty Meets Radiance
            </h1>
           <p className="text-lg md:text-xl font-light tracking-wider text-white/80 mt-4 animate-text-focus-in animation-delay-200">
             Discover exquisite jewelry meticulously crafted with passion and precision. Find the perfect piece to celebrate life's special moments, embodying timeless elegance and enduring charm.
           </p>
           <div className="mt-8 animate-text-focus-in animation-delay-800">
             <Link href="/bridal-collection" passHref>
               <Button
                 size="lg"
                 className="scale-90 animate-scale-in animation-delay-1000 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
               >
                 Explore the Collection
               </Button>
             </Link>
           </div>
         </div>
       </div>

      <Separator className="bg-border/50" />

      {/* Collections Section */}
<div className="w-full max-w-6xl pt-8">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">Our Signature Collections</h2>
    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Discover handcrafted pieces curated to reflect your style, story, and celebrations.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Necklaces Card */}
    <Link href="/necklaces" className="block group">
      <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105">
        <CardContent className="aspect-video items-center justify-center p-0 relative">
          <Image src="/Images/Necklaces/Regal_Ornate_Heritage_Necklace.png" alt="Exquisite necklace" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Necklaces</h3>
            <p className="text-white/80">Statement pieces for every occasion.</p>
          </div>
        </CardContent>
      </Card>
    </Link>

    {/* Earrings Card */}
    <Link href="/earrings" className="block group">
      <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105">
        <CardContent className="aspect-video items-center justify-center p-0 relative">
          <Image src="/Images/Earrings/The_Maharani_Emeralds.png" alt="Elegant earrings" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Earrings</h3>
            <p className="text-white/80">From subtle sparkle to bold elegance.</p>
          </div>
        </CardContent>
      </Card>
    </Link>

    {/* Bracelets & Bangles Card */}
    <Link href="/bangles" className="block group">
      <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105">
        <CardContent className="aspect-video items-center justify-center p-0 relative">
          <Image src="/Images/Bangles/Pacheli_Heritage_Bangle.png" alt="Stunning bracelets and bangles" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Bracelets & Bangles</h3>
            <p className="text-white/80">Layers of light around your wrist.</p>
          </div>
        </CardContent>
      </Card>
    </Link>

    {/* Rings Card */}
    <Link href="/rings" className="block group">
      <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105">
        <CardContent className="aspect-video items-center justify-center p-0 relative">
          <Image src="/Images/Rings/Regal_Geometry_Statement_Ring.png" alt="Beautiful rings" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Rings</h3>
            <p className="text-white/80">Symbols of love, promise, and self-expression.</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  </div>
</div>

      <WhyChooseUsSection />

      <ComparisonSlider />

      {/* Inspirational Jewelry Section */}
      <InspirationalJewelrySection />

      {/* Customer Reviews Section */}
        <div className="w-full max-w-7xl pt-12">
            <Separator className="bg-border/50 mb-16" />
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-3">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Hear from those who have experienced the elegance of AmeeShree Jewels.
                </p>
            </div>

            <Carousel
                plugins={[reviewsPlugin.current]}
                className="w-full relative"
                opts={{
                    loop: true,
                    align: "start",
                }}
            >
                <CarouselContent className="-ml-4 pb-12">
                    {customerReviews.map((review) => (
                        <CarouselItem key={review.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full flex flex-col items-center justify-center pt-8">
                                <Card className="relative w-full max-w-sm border-primary/20 bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-primary/10 transition-all duration-300">
                                    <CardContent className="p-8 text-center flex flex-col items-center">
                                        <Avatar className="w-20 h-20 border-4 border-background absolute -top-10 shadow-xl">
                                            <AvatarFallback className="bg-primary/20 text-primary font-semibold text-2xl">
                                                {review.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="mt-12 flex space-x-1 text-primary">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Gem key={i} className="h-5 w-5 fill-current" />
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <Gem key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/30" />
                                            ))}
                                        </div>
                                        <blockquote className="text-base text-foreground/80 italic leading-relaxed mt-4 min-h-[100px]">
                                            &quot;{review.quote}&quot;
                                        </blockquote>
                                        <p className="font-semibold text-foreground text-md mt-4">- {review.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1rem] md:left-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-lg disabled:opacity-30 transition-all duration-200 w-10 h-10" />
                <CarouselNext className="absolute right-[-1rem] md:right-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-lg disabled:opacity-30 transition-all duration-200 w-10 h-10" />
            </Carousel>
        </div>

    </div>
  );
}

    
