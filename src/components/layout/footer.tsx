
'use client';

import Link from 'next/link';
import { Gem, Instagram } from 'lucide-react'; 
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>(''); 

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border/40 mt-auto shadow-inner">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
          {/* Logo & About */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-2">
              <Gem className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-xl font-bold tracking-tight text-primary">
                AmeeShree Jewels
              </span>
            </Link>
            <p className="text-foreground/70 leading-relaxed">
              Crafting timeless elegance with ethically sourced materials. Discover jewelry that tells your story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-primary mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-foreground/80 hover:text-primary transition-colors duration-150">Home</Link></li>
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors duration-150">About Us</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors duration-150">Contact Us</Link></li>
              <li><Link href="/custom-jewelry" className="text-foreground/80 hover:text-primary transition-colors duration-150">Custom Jewelry</Link></li>
            </ul>
          </div>

          {/* Collections */}
           <div className="space-y-3">
            <h4 className="text-base font-semibold text-primary mb-3 uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2">
              <li><Link href="/earrings" className="text-foreground/80 hover:text-primary transition-colors duration-150">Earrings</Link></li>
              <li><Link href="/bangles" className="text-foreground/80 hover:text-primary transition-colors duration-150">Bangles & Bracelets</Link></li>
              <li><Link href="/rings" className="text-foreground/80 hover:text-primary transition-colors duration-150">Rings</Link></li>
              <li><Link href="/necklaces" className="text-foreground/80 hover:text-primary transition-colors duration-150">Necklaces</Link></li> 
              <li><Link href="/bridal-collection" className="text-foreground/80 hover:text-primary transition-colors duration-150">Bridal Collection</Link></li> 
            </ul>
          </div>


          {/* Social & Contact */}
          <div className="space-y-3">
             <h4 className="text-base font-semibold text-primary mb-3 uppercase tracking-wider">Connect</h4>
              <div className="space-y-2 text-foreground/70 mb-4">
                 <p>Mumbai Studio, Charni Road East</p>
                 <p>Surat Studio, Katargam</p>
                 <p>
                    <a href="mailto:support@ameeshreejewels.com" className="hover:text-primary transition-colors duration-150">
                     support@ameeshreejewels.com
                    </a>
                 </p>
                 <p>
                   <a href="tel:+919819264909" className="hover:text-primary transition-colors duration-150"> 
                     +91 98192 64909
                   </a>
                 </p>
              </div>
             <div className="flex space-x-4">
                 <Link href="https://www.instagram.com/ameeshreejewels?igsh=MTE4Z3BxM29zOTRycw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-primary transition-colors duration-150">
                  <Instagram className="h-5 w-5" />
                 </Link>
             </div>
          </div>
        </div>

        <Separator className="bg-border/50 my-6" />

        <div className="text-center text-xs text-foreground/60">
          © 2020-{currentYear} AmeeShree Jewels - By{' '}
          <a
            href="https://www.linkedin.com/in/sahil-gohil-2b3b59228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Sahil Gohil
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
