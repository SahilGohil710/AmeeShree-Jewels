
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gem, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/earrings', label: 'Earrings' },
  { href: '/bangles', label: 'Bangles' },
  { href: '/rings', label: 'Rings' },
  { href: '/necklaces', label: 'Necklaces' },
  { href: '/bridal-collection', label: 'Bridal Collection'},
  { href: '/custom-jewelry', label: 'Custom Jewelry' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-[72px] md:h-24 lg:h-[104px] max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* --- Left-aligned Text Logo --- */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="AmeeShree Jewels Home">
            <Gem className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-tight text-primary">
              AmeeShree Jewels
            </span>
        </Link>

        {/* --- Desktop Right-aligned Navigation --- */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent hover:bg-transparent focus:bg-transparent hover:text-primary focus:text-primary',
                        pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/80',
                        'font-medium transition-colors duration-200 text-sm tracking-wider'
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/book-appointment" passHref>
            <Button variant="outline" className="ml-4">Book Appointment</Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* --- Mobile Hamburger Menu --- */}
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background border-l border-border/60">
              <SheetHeader className="p-4 border-b border-border/40">
                <SheetTitle className="flex items-center gap-2 text-primary">
                  <Gem className="h-5 w-5" />
                  <span className="text-lg font-semibold">Menu</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4 space-y-2 mt-4">
                {[...menuItems, { href: '/book-appointment', label: 'Book Appointment' }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-150',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50 hover:text-primary'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-border/40">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
