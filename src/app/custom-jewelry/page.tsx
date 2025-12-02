
'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { UploadCloud, Gem, Sparkles, Award, CheckCircle, Pencil, MessageSquare, Mail, CornerDownRight, BotMessageSquare, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Step data for the process section
const processSteps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: '1. Consultation & Vision',
    description: 'Share your story, inspiration, and desires with our design consultants to begin crafting your unique vision.',
    imgSrc: '/Images/Custom_Design/Consultation_Vision.png',
    dataAiHint: 'jewelry design consultation',
  },
  {
    icon: <Pencil className="w-10 h-10 text-primary" />,
    title: '2. Design & Refinement',
    description: 'Our artists translate your vision into detailed sketches and 3D models, allowing for refinement and perfection.',
    imgSrc: '/Images/Custom_Design/Design_Refinement.png',
    dataAiHint: 'jewelry 3d model',
  },
  {
    icon: <Gem className="w-10 h-10 text-primary" />,
    title: '3. Artistry & Craftsmanship',
    description: 'Our master artisans bring your design to life, meticulously setting each stone and polishing every detail by hand.',
    imgSrc: '/Images/Custom_Design/Artistry_Craftsmanship.png',
    dataAiHint: 'jewelry artisan crafting',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: '4. Delivery & Celebration',
    description: 'Your finished masterpiece is delivered in our signature packaging, ready to be cherished for a lifetime.',
    imgSrc: '/Images/Custom_Design/Delivery_Celebration.png',
    dataAiHint: 'luxury jewelry box',
  },
];

// Highlight gallery data
const highlightDesigns = [
  { id: 'h1', name: 'The Brushed Silver Flora Garland', imgSrc: '/Images/Custom_Design/1.png', dataAiHint: 'emerald flower ring', description: 'An intricate garland of brushed silver leaves, highlighted with marquise-cut emeralds.' },
  { id: 'h2', name: 'The Regal Polki & Ruby Jadau Choker', imgSrc: '/Images/Custom_Design/3.png', dataAiHint: 'sapphire art deco', description: 'A vintage-inspired choker combining uncut Polki diamonds with deep red rubies in a classic Jadau setting.' },
  { id: 'h3', name: 'The Geometric Mosaic Radiant Ring', imgSrc: '/Images/Custom_Design/2.png', dataAiHint: 'diamond flower hoops', description: 'A modern statement ring featuring a mosaic of princess-cut diamonds and sapphires.' },
  { id: 'h4', name: 'The Flush-Set Marquise Eternity Bangle', imgSrc: '/Images/Custom_Design/4.png', dataAiHint: 'ruby gold necklace', description: 'A seamless gold bangle with flush-set marquise diamonds creating an endless sparkle.' },
  { id: 'h5', name: 'The Radiant Azure Swirl Pendant', imgSrc: '/Images/Custom_Design/Radiant_Azure_Swirl_Pendant.png', dataAiHint: 'ocean wave bracelet', description: 'A swirling pendant of white gold and diamonds, culminating in a brilliant pear-shaped aquamarine.' },
  { id: 'h6', name: 'The Royal Heritage Cabochon Bangle', imgSrc: '/Images/Custom_Design/Royal_Heritage_Cabochon_Bangle.png', dataAiHint: 'galaxy spiral ring', description: 'A statement bangle featuring oversized cabochon emeralds and rubies, set in ornate yellow gold.' },
];

const whyChooseUsItems = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Ethical Sourcing",
        description: "We use only conflict-free diamonds and responsibly sourced gemstones."
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Expert Artisans",
        description: "Every piece is handcrafted by artisans with generations of experience."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "Tailor-Made Designs",
        description: "Your jewelry will be a one-of-a-kind creation that tells your personal story."
    },
     {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: "Lifetime Support",
        description: "Includes complimentary cleaning, polishing, and guidance for your jewel."
    }
];

const WHATSAPP_NUMBER = '919819264909';
const WHATSAPP_MESSAGE = "Hi, I'm interested in creating a custom jewelry piece. Please assist me with the design process.";
const EMAIL_ADDRESS = 'support@ameeshreejewels.com';
const EMAIL_SUBJECT = 'Custom Jewellery Request – AmeeShree Jewels';
const EMAIL_BODY = 'Hello, I want to create a custom jewellery piece. My requirements are:';

export default function CustomJewelryPage() {
  return (
    <div className="py-16 px-4 md:px-6 bg-background text-foreground animate-fadeInSmooth">
      {/* --- Hero Section --- */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">Your Vision, Handcrafted Into a Masterpiece</h1>
                <p className="text-lg text-foreground/80 max-w-lg mx-auto md:mx-0 mb-8">Have a design in mind? Simply send us your idea, inspiration, or sketch on WhatsApp. Our expert designers will collaborate with you to bring your unique vision to life, crafting a jewel that is exclusively yours.</p>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                            <BotMessageSquare className="mr-2" /> Request Your Custom Design
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                       <a href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}>
                           <Mail className="mr-2" /> Email Us Your Idea
                       </a>
                    </Button>
                </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                    src="/Images/Custom_Design/YourVision_img1.png"
                    alt="Macro shot of a custom floral necklace"
                    fill
                    className="object-cover"
                    data-ai-hint="jewelry macro detail"
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
        </div>
      </div>

      <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

      {/* --- 4-Step Process Section --- */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">The Bespoke Journey</h2>
          <p className="text-lg text-foreground/70 mt-3 max-w-2xl mx-auto">A seamless and personal process from imagination to creation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center group p-4 rounded-xl transition-shadow duration-300 hover:shadow-xl hover:bg-card/50">
              <div className="mb-5 p-4 bg-primary/10 rounded-full">{step.icon}</div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

      {/* --- Highlights Gallery --- */}
      <div className="max-w-7xl mx-auto mb-24">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">A Few Creations We’ve Brought to Life</h2>
          <p className="text-lg text-foreground/70 mt-3 max-w-2xl mx-auto">Creations born from imagination and artistry, telling a unique story for each client.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlightDesigns.map((design) => (
            <div key={design.id} className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                <Image src={design.imgSrc} alt={design.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={design.dataAiHint} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                    <h3 className="text-white font-semibold text-xl drop-shadow-md">{design.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{design.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

      {/* --- Why Choose Us Section --- */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">An Unparalleled Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map(item => (
                <div key={item.title} className="p-8 bg-card/60 rounded-xl text-center flex flex-col items-center shadow-md transition-shadow hover:shadow-lg border border-transparent hover:border-primary/20">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
                </div>
            ))}
        </div>
      </div>

       <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

       {/* --- Final CTA Block --- */}
       <div className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Create Your Custom Jewel?</h2>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-8">Your story deserves to be told in gold and gemstones. Let's start the conversation and bring your vision to life.</p>
           <Button asChild size="lg">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                  <BotMessageSquare className="mr-2" /> Start Your Design on WhatsApp
              </a>
          </Button>
       </div>


       {/* Floating WhatsApp Button */}
        <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300 animate-float"
            aria-label="Start custom design on WhatsApp"
        >
            <BotMessageSquare className="w-8 h-8" />
        </a>
    </div>
  );
}

    
