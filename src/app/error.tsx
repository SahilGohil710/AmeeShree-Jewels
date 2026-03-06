
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled Runtime Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
        Something went wrong!
      </h2>
      <p className="text-foreground/70 mb-8 max-w-md">
        We encountered an unexpected error. Our team has been notified. 
        Please try refreshing the page or contact support if the issue persists.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/'}
          variant="outline"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
