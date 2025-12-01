
'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Instagram, Facebook, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface BranchInfo {
  name: string;
  address: string;
  directionsUrl: string;
}

const branches: BranchInfo[] = [
  {
    name: 'Mumbai Studio',
    address: 'Shop No. 07, Radha Krishna Niwas, D.M. Road, Near Sukh Sagar Medical, Charni Road East, Mumbai – 400004',
    directionsUrl: 'https://maps.app.goo.gl/u9JMsEneGLif7Sfx5',
  },
  {
    name: 'Surat Studio',
    address: '203, 2nd Floor, Ratna Deep Apartment, Muktanand Nagar, Katargam, Surat – 395004',
    directionsUrl: 'https://maps.app.goo.gl/exampleSurat', 
  },
];


export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 drop-shadow-sm">
            We’re Here to Help
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question about our jewelry, want assistance with an order, or wish to explore a custom design, we’re here to support you every step of the way. Choose the option that’s most convenient for you — our team is always happy to assist.
          </p>
        </div>

        <Separator className="bg-primary h-0.5 w-1/4 mx-auto" />
        
        <div className="space-y-12"> 
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Direct Contact Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
              <div className="space-y-2">
                <Phone className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">Phone</h3>
                <p className="text-foreground/80"><a href="tel:+919820365033" className="hover:underline">Mumbai: +91 98203 65033</a></p>
                <p className="text-foreground/80"><a href="tel:+918980354381" className="hover:underline">Surat: +91 89803 54381</a></p>
              </div>
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">Email</h3>
                <p className="text-foreground/80"><a href="mailto:support@ameeshreejewels.com" className="hover:underline">support@ameeshreejewels.com</a></p>
              </div>
              <div className="space-y-2">
                <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-primary">WhatsApp</h3>
                <p className="text-foreground/80"><a href="https://wa.me/919819264909" target="_blank" rel="noopener noreferrer" className="hover:underline">Instant support and quick replies</a></p>
              </div>
            </div>
            
            <Separator className="my-8 bg-border/40" />

            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Store Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {branches.map((branch) => (
                <div key={branch.name} className="space-y-3 border border-border/30 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full bg-card">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />{branch.name}</h3>
                  <p className="text-sm text-foreground/80">{branch.address}</p>
                  <Link href={branch.directionsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-auto">
                    Get Directions
                  </Link>
                </div>
              ))}
            </div>

            <Separator className="my-8 bg-border/40" />

            <div className="text-center space-y-4">
                <h2 className="text-3xl font-semibold text-primary">Business Hours</h2>
                <div>
                    <p className="text-foreground/80">Monday – Saturday: 10:30 AM to 7:30 PM</p>
                    <p className="text-foreground/80">Sunday: Closed</p>
                </div>
            </div>

            <Separator className="my-8 bg-border/40" />

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-primary">Follow Us</h2>
              <p className="text-foreground/80">Stay connected with updates, new arrivals, and behind-the-scenes content.</p>
              <div className="flex justify-center gap-6 pt-2">
                <a href="https://www.instagram.com/ameeshreejewels?igsh=MTE4Z3BxM29zOTRycw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="https://wa.me/919819264909" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                   <MessageSquare className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
