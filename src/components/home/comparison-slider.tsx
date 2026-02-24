'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Separator } from '@/components/ui/separator';

const ComparisonSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Separator className="bg-border/50 mb-12" />
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
          See the Transformation
        </h2>
        <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto">
          Experience how the right jewel elevates every look.
        </p>
      </div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="/Images/Transformation/1.png" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="/Images/Transformation/2.png" alt="Image two" />}
        className="rounded-lg overflow-hidden shadow-xl border border-primary/20"
      />
    </div>
  );
};

export default ComparisonSlider;
