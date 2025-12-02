
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 md:py-24 px-4 md:px-6">
      <div className="space-y-12 md:space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            Where Color-Rich Diamonds Meet Timeless Craftsmanship
          </h1>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Card className="overflow-hidden shadow-lg border-border/60 hover:shadow-primary/20 transition-shadow duration-300 rounded-lg">
            <CardContent className="p-0">
               <div className="aspect-video relative">
                 <Image
                  src="/Images/AboutUs/Heritage.jpg"
                  alt="AmeeShree Jewels Workshop Craftsmanship"
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 rounded-t-lg"
                 />
               </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-2">
              <Gem className="h-6 w-6 text-primary" />
              Our Story
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              AmeeShree Jewels was born from a simple belief: jewelry should feel personal, expressive, and unforgettable. What started as a passion for unique diamond artistry has grown into a design-driven studio focused on creating pieces that stand apart from the ordinary. Every collection is crafted with intention — blending modern aesthetics, rich colors, and the emotional value jewelry carries for the people who wear it.
            </p>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:order-last">
             <h2 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-2">
               <Gem className="h-6 w-6 text-primary" />
               What Makes Us Different
             </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              We specialize in diamond-embedded gold and silver jewelry enhanced with vibrant colored gemstones. Our approach is rooted in detail, precision, and bold artistic expression. From rare-tone diamonds to intricate metal shaping, each creation is built to feel luxurious, meaningful, and visually striking.
            </p>
             <p className="text-base text-foreground/90 leading-relaxed">
              No templates. No mass-produced designs. Only meticulously crafted pieces that make a statement.
            </p>
          </div>
           <Card className="overflow-hidden shadow-lg border-border/60 hover:shadow-primary/20 transition-shadow duration-300 rounded-lg md:order-first">
            <CardContent className="p-0">
               <div className="aspect-video relative">
                <Image
                  src="/Images/AboutUs/Our_Mission.jpg"
                  alt="Close-up of a finely crafted AmeeShree Jewels ring"
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 rounded-t-lg"
                 />
               </div>
            </CardContent>
           </Card>
        </div>

        <Separator className="bg-border/50" />
        
        <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">Our Craft</h2>
            <p className="text-base text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Every AmeeShree design begins with a concept: a mood, a color story, a spark of inspiration. Our process involves hand-sketching, gemstone selection, structural refinement, and final polishing — ensuring the perfect balance of art and engineering. We prioritize quality materials, skilled workmanship, and strict attention to detail at every stage.
            </p>
        </div>

        <Separator className="bg-border/50" />

        <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
                <div className="text-center p-2">
                    <h3 className="text-xl font-semibold text-primary">Authenticity</h3>
                    <p className="text-foreground/80 text-sm">Transparent, honest craftsmanship.</p>
                </div>
                <div className="text-center p-2">
                    <h3 className="text-xl font-semibold text-primary">Design First</h3>
                    <p className="text-foreground/80 text-sm">Bold forms, rich palettes, and expressive silhouettes.</p>
                </div>
                <div className="text-center p-2">
                    <h3 className="text-xl font-semibold text-primary">Quality</h3>
                    <p className="text-foreground/80 text-sm">Stones and metals chosen with careful selection and grading.</p>
                </div>
                <div className="text-center p-2">
                    <h3 className="text-xl font-semibold text-primary">Uniqueness</h3>
                    <p className="text-foreground/80 text-sm">We create pieces meant to feel personal and unforgettable.</p>
                </div>
            </div>
        </div>

        <Separator className="bg-border/50" />
        
        <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">A Modern Luxury Experience</h2>
            <p className="text-base text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                AmeeShree Jewels blends traditional craftsmanship with modern design language to create jewelry that resonates with today’s generation — aesthetic, meaningful, and timeless. Whether worn daily or saved for life’s most important moments, each piece is created to carry emotion, elegance, and individuality.
            </p>
        </div>

        <Separator className="bg-border/50" />

        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">Invitation</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed pt-4">
                Explore our collections and experience the artistry behind every creation. Your next masterpiece is waiting.
            </p>
        </div>

      </div>
    </div>
  );
}
