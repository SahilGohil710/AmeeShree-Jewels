'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Gem, Sparkles, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Ethical Sourcing',
    description: 'Responsibly sourced gemstones and materials.',
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: 'Premium Craftsmanship',
    description: 'Hand-finished details with meticulous quality checks.',
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: 'Unique Designs',
    description: 'Original concepts you won’t find in mass-market catalogs.',
  },
  {
    icon: <Gem className="w-10 h-10 text-primary" />,
    title: 'Lifetime Support',
    description: 'Care, cleaning, and guidance for your jewels over the years.',
  },
];

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-6xl py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">Why Choose AmeeShree Jewels</h2>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Every piece is crafted with intention, detail, and a deep respect for the stories it will carry.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              'flex flex-col items-center text-center p-6 rounded-lg bg-card/50 transition-all duration-500 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="mb-4 p-3 rounded-full bg-primary/10">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
