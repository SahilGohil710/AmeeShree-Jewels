'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Instagram, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BranchInfo {
  name: string;
  address: string;
  directionsUrl: string;
}

const branches: BranchInfo[] = [
  {
    name: 'Mumbai Studio',
    address: '47/A, SHREEJI ARCADE, GROUND FLOOR, OPP. PRASAD CHEMBERS, TATA ROAD NO. 2, CHARNI ROAD EAST, MUMBAI 400004.',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=47/A,+SHREEJI+ARCADE,+GROUND+FLOOR,+OPP.+PRASAD+CHEMBERS,+TATA+ROAD+NO.+2,+CHARNI+ROAD+EAST,+MUMBAI+400004',
  },
  {
    name: 'Surat Studio',
    address: '501, JIN RATNA, 5th FLOOR, PIPLASHERI, MAHIDHARPURA, SURAT 395003',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=501,+JIN+RATNA,+5th+FLOOR,+PIPLASHERI,+MAHIDHARPURA,+SURAT+395003', 
  },
];


export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4 md:px-6">
      <div className="space-y-12 md:space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            We’re Here to Help
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question about our jewelry, want assistance with an order, or wish to explore a custom design, we’re here to support you every step of the way. Choose the option that’s most convenient for you — our team is always happy to assist.
          </p>
            <div className="mt-8">
            <Link href="/book-appointment">
              <Button size="lg" className="rounded-xl shadow-md hover:shadow-lg transition-all">Book an Appointment</Button>
            </Link>
          </div>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />
        
        <div className="space-y-12"> 
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Direct Contact Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
              <div className="space-y-2">
                <Phone className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">Phone</h3>
                <p className="text-foreground/80 text-sm md:text-base"><a href="tel:+919819264909" className="hover:underline">Mumbai: +91 98192 64909</a></p>
                <p className="text-foreground/80 text-sm md:text-base"><a href="tel:+919819290009" className="hover:underline">Surat: +91 98192 90009</a></p>
              </div>
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">Email</h3>
                <p className="text-foreground/80 text-sm md:text-base"><a href="mailto:support@ameeshreejewels.com" className="hover:underline">support@ameeshreejewels.com</a></p>
              </div>
              <div className="space-y-2">
                <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">WhatsApp</h3>
                <p className="text-foreground/80 text-sm md:text-base"><a href="https://wa.me/919819264909" target="_blank" rel="noopener noreferrer" className="hover:underline">Instant support and quick replies</a></p>
              </div>
            </div>
            
            <Separator className="my-8 bg-border/40" />

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Store Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {branches.map((branch) => (
                <div key={branch.name} className="space-y-3 border border-border/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />{branch.name}</h3>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{branch.address}</p>
                  <Link href={branch.directionsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-auto inline-flex items-center gap-1 font-medium">
                    Get Directions
                  </Link>
                </div>
              ))}
            </div>

            <Separator className="my-8 bg-border/40" />

            <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">Business Hours</h2>
                <div className="text-foreground/80 text-lg">
                    <p>Monday – Saturday: 10:30 AM to 7:30 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>

            <Separator className="my-8 bg-border/40" />

            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Follow Us</h2>
              <p className="text-foreground/80 max-w-lg mx-auto leading-relaxed">Stay connected with updates, new arrivals, and behind-the-scenes content.</p>
              <div className="flex justify-center gap-8 pt-4">
                <a href="https://www.instagram.com/_ameeshree.jewels_?igsh=MTE4Z3BxM29zOTRycw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-transform hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-8 w-8" />
                </a>
                <a href="https://wa.me/919819264909" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-transform hover:scale-110" aria-label="WhatsApp">
                   <MessageSquare className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
