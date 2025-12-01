
import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import ClientLayoutContent from './client-layout-content';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: 'AmeeShree Jewels',
  description: 'Exquisite Jewelry for Every Occasion',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning is recommended by next-themes */}
      {/* Apply font variable only, background is handled in globals.css */}
      <body className={`${ebGaramond.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {/* Background animation container is now part of ClientLayoutContent for better encapsulation of client-side effects */}
        <ClientLayoutContent>{children}</ClientLayoutContent>
      </body>
    </html>
  );
}
