
'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { useEffect, useState } from 'react';
import { ScrollToTopButton } from '@/components/layout/scroll-to-top-button';

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
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 sparkling-bg"></div>
        </div>
        <div className={`flex flex-col min-h-screen ${isMounted ? 'animate-fadeInSmooth' : 'opacity-0'}`}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <ScrollToTopButton />
      </ThemeProvider>
  );
}
