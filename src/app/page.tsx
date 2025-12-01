
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { Truck, BadgeCheck, PhoneCall, Gem } from 'lucide-react';

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
import AnimatedImageSection from '@/components/home/animated-image-section';
import InspirationalJewelrySection from '@/components/home/inspirational-jewelry-section';
import LifestyleCarousel from '@/components/home/lifestyle-carousel';
import { Button } from '@/components/ui/button';
import AnimatedHeroText from '@/components/home/animated-hero-text';
import FloatingProductCapsules from '@/components/home/floating-product-capsules';


const lifestyleCarouselItems = [
  {
    src: '/Images/Bridal_Set/Maharani_Grandeur_Set.png',
    alt: 'Couple celebrating with AmeeShree diamond rings',
    overlayText: 'Maharani Grandeur Set',
    dataAiHint: 'couple diamond rings celebration toast',
    href: '/bridal-collection', // Link to bridal collection
  },
  {
    src: '/Images/Bridal_Set/Modern_Elegance_Suite.png',
    alt: 'Model wearing AmeeShree diamond necklace at an evening event',
    overlayText: 'Modern Elegance Suite',
    dataAiHint: 'elegant woman diamond necklace gala',
    href: '/bridal-collection', // Link to bridal collection
  },
  {
    src: '/Images/Bridal_Set/Celestial_Dream_Collection.png',
    alt: 'Bride adorned with AmeeShree bridal jewelry set',
    overlayText: 'Celestial Dream Collection',
    dataAiHint: 'bride diamond jewelry wedding',
    href: '/bridal-collection', // Link to bridal collection
  },
];

// Category Carousel Items
const earringItems = [
  { id: 'e1', src: '/Images/Earrings/Evergreen_Embrace_Hoops.png', alt: 'Classic Diamond Studs', dataAiHint: 'diamond stud earrings close up' },
  { id: 'e2', src: '/Images/Earrings/Kamal_Pushpa_Earrings.png', alt: 'Gold Hoop Earrings', dataAiHint: 'gold hoop earrings shiny' },
  { id: 'e3', src: '/Images/Earrings/Shahi_Mahal_Jhumkas.png', alt: 'Pearl Drop Earrings', dataAiHint: 'pearl drop earrings elegant' },
  { id: 'e4', src: '/Images/Earrings/The_Celestial_Wing_Climbers.png', alt: 'Sapphire Halo Earrings', dataAiHint: 'sapphire halo earrings blue diamond' },
  { id: 'e5', src: '/Images/Earrings/The_Grand_Mughal_Garden_Earrings.png', alt: 'Emerald Cut Earrings', dataAiHint: 'emerald cut earrings green gold' },
  { id: 'e6', src: '/Images/Earrings/The_Sakura_Blossom_Earrings.png', alt: 'Ruby Cluster Studs', dataAiHint: 'ruby cluster studs red gold' },
];

const bangleItems = [
    { id: 'b1', name: 'Royal Lotus Halo', price: '$1,800', img: '/Images/Bangles/Royal_Lotus_Halo.png', description: 'A timeless piece in radiant gold.' },
    { id: 'b2', name: 'Emerald Vine Radiance', price: '$4,500', img: '/Images/Bangles/Emerald_Vine_Radiance.png', description: 'Sparkling diamonds set for elegance.' },
    { id: 'b3', name: 'Whispering Leaves Bangle', price: '$550', img: '/Images/Bangles/Whispering_Leaves_Bangle.png', description: 'Intricate engravings on sterling silver.' },
    { id: 'b4', name: 'Sunset Spectrum', price: '$3,200', img: '/Images/Bangles/Sunset_Spectrum.png', description: 'Rich rubies adding a touch of color.' },
    { id: 'b5', name: 'Infinity Phool', price: '$950', img: '/Images/Bangles/Infinity_Phool.png', description: 'Versatile gold bangles for stacking.' },
    { id: 'b6', name: 'Temple Revival Kada Bangle', price: '$2,100', img: '/Images/Bangles/Temple_Revival_Kada_Bangle.png', description: 'Modern elegance in warm rose gold.' },
];

const ringItems = [
    { id: 'r1', name: 'Celeste Echo', price: '$3,500', img: '/Images/Rings/Floral_Halo_Cluster_Ring.png', description: 'A celestial symphony of brilliance, echoing elegance with every sparkling facet.' },
    { id: 'r2', name: 'Elysian Halo', price: '$2,800', img: '/Images/Rings/Sculpted_Wave_Diamond_Ring.png', description: 'Divine radiance encircles this piece, embodying grace and timeless sophistication.' },
    { id: 'r3', name: 'Luna Whisper', price: '$4,200', img: '/Images/Rings/Regal_Halo_Lotus_Ring.png', description: 'Soft lunar glow meets refined craftsmanship in this dreamy, delicate creation.' },
    { id: 'r4', name: 'Nocturne Bloom', price: '$900', img: '/Images/Rings/Victorian_Lace_Filigree_Ring.png', description: 'A midnight garden brought to life, blooming with dazzling nocturnal allure.' },
    { id: 'r5', name: 'Solstice Flame', price: '$1,100', img: '/Images/Rings/Galaxy_Cluster_Statement_Ring.png', description: 'Fiery brilliance that captures the spirit of celebration and radiant transformation.' },
    { id: 'r6', name: 'Twilight Veil', price: '$2,400', img: '/Images/Rings/Ethereal_Feather_Wrap_Ring.png', description: 'Subtle shimmer veiled in mystery, inspired by twilight’s enchanting beauty.' },
];

const necklaceItems = [
  { id: 'n1', src: '/Images/Necklaces/Echo_of_Light.jpg', alt: 'Diamond Solitaire Pendant', dataAiHint: 'Echo of Light' },
  { id: 'n2', src: '/Images/Necklaces/Eternal_Radiance.jpg', alt: 'Gold Chain Necklace', dataAiHint: 'Eternal Radiance' },
  { id: 'n3', src: '/Images/Necklaces/Frozen_Whisper.jpg', alt: 'Emerald and Diamond Necklace', dataAiHint: 'Frozen Whisper' },
  { id: 'n4', src: '/Images/Necklaces/Lunar_Drift.jpg', alt: 'Pearl Strand Necklace', dataAiHint: 'Lunar Drift' },
  { id: 'n5', src: '/Images/Necklaces/Still_Bloom.jpg', alt: 'Ruby Heart Pendant', dataAiHint: 'Still Bloom' },
  { id: 'n6', src: '/Images/Necklaces/Velvet_Horizon.jpg', alt: 'Statement Gemstone Necklace', dataAiHint: 'Velvet Horizon' },
];


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
   const reviewsPlugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));
   const earringsPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }));
   const banglesPlugin = React.useRef(Autoplay({ delay: 2200, stopOnInteraction: false, stopOnMouseEnter: true }));
   const ringsPlugin = React.useRef(Autoplay({ delay: 2400, stopOnInteraction: false, stopOnMouseEnter: true }));
   const necklacesPlugin = React.useRef(Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true }));


  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-16 px-4 md:px-6">
       {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/hero-background.jpg"
            alt="Cinematic jewelry background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full animate-light-sheen bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6 px-4">
          <AnimatedHeroText />
          <div className="animate-focus-in animation-delay-800">
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

      <FloatingProductCapsules />
      <Separator className="bg-border/50 mt-12" />

      {/* Features Section */}
      <div className="w-full max-w-5xl pt-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <Truck className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">COD Available</h3>
              <p className="text-sm text-foreground/70">Secure cash on delivery for your convenience.</p>
            </div>
             <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <BadgeCheck className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">100% Certified</h3>
               <p className="text-sm text-foreground/70">Authentic, certified jewelry you can trust.</p>
            </div>
             <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
               <PhoneCall className="h-10 w-10 text-primary" />
               <h3 className="text-lg font-semibold text-foreground">On Call Orders Only</h3>
               <p className="text-sm text-foreground/70">Personalized phone service for order placement.</p>
            </div>
             <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
               <Gem className="h-10 w-10 text-primary" />
               <h3 className="text-lg font-semibold text-foreground">Custom Jewellery</h3>
               <p className="text-sm text-foreground/70">Design your bespoke piece, tailored to perfection.</p>
            </div>
         </div>
         <Separator className="bg-border/50 mt-10" />
      </div>

      {/* Earrings Section */}
       <div className="w-full max-w-6xl pt-8">
         <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
               Our Earrings
            </h2>
            <Link href="/earrings" className="text-sm text-primary hover:underline">View All Earrings</Link>
          </div>
         <Carousel
           plugins={[earringsPlugin.current]}
           className="w-full relative"
           opts={{ loop: true, align: "start" }}
         >
           <CarouselContent className="-ml-4">
             {earringItems.map((item) => (
               <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group">
                  <Card className="overflow-hidden border-border/60 shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300 h-full flex flex-col rounded-lg">
                   <CardContent className="flex-grow aspect-square items-center justify-center p-0 relative overflow-hidden rounded-t-lg">
                     <Image
                       src={item.src}
                       alt={item.alt}
                       fill
                       sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                       className="object-cover transition-transform duration-500 ease-in-out "
                       data-ai-hint={item.dataAiHint}
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400.png'; (e.target as HTMLImageElement).srcset = '' }}
                        priority={item.id === 'e1'}
                     />
                   </CardContent>
                 </Card>
               </CarouselItem>
             ))}
           </CarouselContent>
           <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
           <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
         </Carousel>
       </div>

       {/* Bangles Section */}
       <div className="w-full max-w-6xl pt-8">
         <div className="text-center mb-6">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
             Our Bangles & Bracelets
           </h2>
           <Link href="/bangles" className="text-sm text-primary hover:underline">View All Bangles & Bracelets</Link>
         </div>
         <Carousel
           plugins={[banglesPlugin.current]}
           className="w-full relative"
           opts={{ loop: true, align: "start" }}
         >
           <CarouselContent className="-ml-4">
             {bangleItems.map((item) => (
               <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group">
                  <Card className="overflow-hidden border-border/60 shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300 h-full flex flex-col rounded-lg">
                   <CardContent className="flex-grow aspect-square items-center justify-center p-0 relative overflow-hidden rounded-t-lg">
                     <Image
                       src={item.img}
                       alt={item.name}
                       fill
                       sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                       className="object-cover transition-transform duration-500 ease-in-out"
                       data-ai-hint={item.name.toLowerCase().replace(/ /g, '-')}
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400.png'; (e.target as HTMLImageElement).srcset = '' }}
                     />
                   </CardContent>
                 </Card>
               </CarouselItem>
             ))}
           </CarouselContent>
            <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
           <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
         </Carousel>
       </div>

       {/* Rings Section */}
        <div className="w-full max-w-6xl pt-8">
         <div className="text-center mb-6">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
             Our Rings
           </h2>
           <Link href="/rings" className="text-sm text-primary hover:underline">View All Rings</Link>
         </div>
         <Carousel
           plugins={[ringsPlugin.current]}
           className="w-full relative"
           opts={{ loop: true, align: "start" }}
         >
           <CarouselContent className="-ml-4">
             {ringItems.map((item) => (
               <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group">
                   <Card className="overflow-hidden border-border/60 shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300 h-full flex flex-col rounded-lg">
                   <CardContent className="flex-grow aspect-square items-center justify-center p-0 relative overflow-hidden rounded-t-lg">
                     <Image
                       src={item.img}
                       alt={item.name}
                       fill
                       sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                       className="object-cover transition-transform duration-500 ease-in-out"
                       data-ai-hint={item.name.toLowerCase().replace(/ /g, '-')}
                       onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400.png'; (e.target as HTMLImageElement).srcset = '' }}
                     />
                   </CardContent>
                 </Card>
               </CarouselItem>
             ))}
           </CarouselContent>
            <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
           <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
         </Carousel>
       </div>

      {/* Necklaces Section */}
      <div className="w-full max-w-6xl pt-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
            Our Necklaces
          </h2>
          <Link href="/necklaces" className="text-sm text-primary hover:underline">View All Necklaces</Link>
        </div>
        <Carousel
          plugins={[necklacesPlugin.current]}
          className="w-full relative"
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="-ml-4">
            {necklaceItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group">
                <Card className="overflow-hidden border-border/60 shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300 h-full flex flex-col rounded-lg">
                  <CardContent className="flex-grow aspect-square items-center justify-center p-0 relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                      className="object-cover transition-transform duration-500 ease-in-out"
                      data-ai-hint={item.dataAiHint}
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400.png'; (e.target as HTMLImageElement).srcset = '' }}
                      priority={item.id === 'n1'}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
          <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-primary hover:text-primary-foreground border border-primary rounded-full shadow-md disabled:opacity-30 transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10" />
        </Carousel>
      </div>

      {/* Animated Image Section */}
      <AnimatedImageSection
        title="Signature Craftsmanship"
        description="Witness the journey of a jewel, from raw beauty to radiant masterpiece."
        image1_src="/Images/Signature_Craftmanship/1.jpg"
        image1_alt="Diamond Polishing Process"
        image1_dataAiHint="diamond polishing"
        image2_src="/Images/Signature_Craftmanship/2.jpg"
        image2_alt="Finished Diamond Necklace"
        image2_dataAiHint="gemstone necklace"
        className="pt-12"
        showTopSeparator={true}
        showBottomSeparator={false}
        overlayText="The Art of Creation"
      />

      {/* Inspirational Jewelry Section */}
      <InspirationalJewelrySection />

      {/* Customer Reviews Section */}
      <div className="w-full max-w-6xl pt-12">
        <Separator className="bg-border/50 mb-12" />
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
            What Our Customers Say
          </h2>
          <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto">
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
          <CarouselContent className="-ml-4">
            {customerReviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <Card className="h-full border-border/60 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg bg-card/80 backdrop-blur-sm">
                   <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                     <Avatar className="w-16 h-16 border-2 border-primary">
                       <AvatarFallback className="bg-primary/20 text-primary font-semibold text-xl">
                         {review.avatar}
                       </AvatarFallback>
                     </Avatar>
                     <div className="flex space-x-1 text-primary">
                       {[...Array(review.rating)].map((_, i) => (
                         <Gem key={i} className="h-5 w-5 fill-current" />
                       ))}
                       {[...Array(5 - review.rating)].map((_, i) => (
                          <Gem key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/50" />
                       ))}
                     </div>
                      <blockquote className="text-base text-foreground/80 italic leading-relaxed">
                        &quot;{review.quote}&quot;
                      </blockquote>
                      <p className="font-semibold text-foreground text-sm pt-2">- {review.name}</p>
                  </CardContent>
                </Card>
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
