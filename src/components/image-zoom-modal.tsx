
'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageZoomModalProps {
  imageUrl: string;
  altText: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageZoomModal({ imageUrl, altText, isOpen, onClose }: ImageZoomModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-border/60">
        <DialogHeader className="sr-only"> {/* Hidden for visual, present for a11y */}
          <DialogTitle>{altText || 'Zoomed Image'}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video md:aspect-[16/10] lg:aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/800x600.png?text=Error+Loading+Image`;
              (e.target as HTMLImageElement).srcset = '';
            }}
          />
        </div>
        {/* The DialogContent component from shadcn/ui already includes a DialogClose button, so the explicit one below was redundant. */}
      </DialogContent>
    </Dialog>
  );
}
