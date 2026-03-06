
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-foreground/70 mb-8 max-w-md text-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" passHref>
        <Button size="lg" className="rounded-xl">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
