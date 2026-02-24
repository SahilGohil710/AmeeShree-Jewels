
'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { useState, useEffect } from 'react';
import { ScrollToTopButton } from '@/components/layout/scroll-to-top-button';
import CustomCursor from '@/components/layout/custom-cursor';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';

export default function ClientLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <CustomCursor />
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 sparkling-bg"></div>
        </div>
        <div className={`flex flex-col min-h-screen ${isMounted ? 'animate-fadeInSmooth' : 'opacity-0'}`}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppButton phoneNumber="919819264909" />
        <ScrollToTopButton />
      </ThemeProvider>
  );
}
