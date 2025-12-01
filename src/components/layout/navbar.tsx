
'use client';

import * as React from 'react';
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
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];


export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-6">
          <Gem className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-bold tracking-tight text-primary whitespace-nowrap">
            AmeeShree Jewels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex flex-grow justify-center">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                       'bg-transparent hover:bg-accent/10 focus:bg-accent/10', 
                      pathname === item.href
                        ? 'bg-primary/10 text-primary font-semibold border-b-2 border-primary rounded-none' 
                        : 'text-foreground/90 hover:text-primary focus:text-accent-foreground', 
                      'font-medium transition-all duration-200 text-base px-4 py-2' 
                    )}
                  >
                    {item.label} 
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side elements (Theme Toggle & Mobile Menu Trigger) */}
        <div className="flex items-center gap-2">
           <ThemeToggle /> 

          {/* Mobile Navigation Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background border-l border-border/60">
               <SheetHeader className="p-4 border-b border-border/40">
                <SheetTitle className="flex items-center gap-2 text-primary">
                   <Gem className="h-5 w-5" />
                   <span className="text-lg font-semibold">AmeeShree Jewels</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4 space-y-2 mt-4">
                {menuItems.map((item) => (
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
