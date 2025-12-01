'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { UploadCloud, Gem, Sparkles, Award, CheckCircle, Pencil, MessageSquare, Mail, CornerDownRight, BotMessageSquare } from 'lucide-react';
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
  { id: 'h1', name: 'Emerald Bloom Ring', imgSrc: '/Images/Custom_Design/1.png', dataAiHint: 'emerald flower ring' },
  { id: 'h2', name: 'Sapphire Deco Pendant', imgSrc: '/Images/Custom_Design/3.png', dataAiHint: 'sapphire art deco' },
  { id: 'h3', name: 'Floral Diamond Hoops', imgSrc: '/Images/Custom_Design/2.png', dataAiHint: 'diamond flower hoops' },
  { id: 'h4', name: 'Ruby Sunset Necklace', imgSrc: '/Images/Custom_Design/4.png', dataAiHint: 'ruby gold necklace' },
];

const whyChooseUsItems = [
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: "Ethically Sourced",
        description: "We use only conflict-free diamonds and responsibly sourced gemstones."
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Master Craftsmanship",
        description: "Every piece is handcrafted by artisans with generations of experience."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "Truly Unique",
        description: "Your jewelry will be a one-of-a-kind creation that tells your personal story."
    }
];

const startOrderSteps = [
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Send Us Your Idea",
        description: "Reach out on WhatsApp or Email with your thoughts, reference images, or initial sketches. No idea is too big or too small."
    },
    {
        icon: <Pencil className="w-8 h-8 text-primary" />,
        title: "We Share Concepts",
        description: "Our designers will collaborate with you, providing detailed sketches and 3D models to refine your vision until it’s perfect."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Your Piece is Delivered",
        description: "Once approved, our artisans craft your one-of-a-kind jewel. It arrives in our signature packaging, ready to be treasured."
    }
];

const WHATSAPP_NUMBER = '919819264909';
const WHATSAPP_MESSAGE = "Hi AmeeShree Jewels, I would like to create a custom jewellery piece. Here's my idea: ";
const EMAIL_ADDRESS = 'support@ameeshreejewels.com';
const EMAIL_SUBJECT = 'Custom Jewellery Request – AmeeShree Jewels';
const EMAIL_BODY = 'Hello, I want to create a custom jewellery piece. My requirements are:';

export default function CustomJewelryPage() {
  return (
    <div className="py-16 px-4 md:px-6 bg-background text-foreground animate-fadeInSmooth">
      {/* --- Hero Section --- */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                    src="/Images/Custom_Design/YourVision_img1.png"
                    alt="Macro shot of a custom floral necklace"
                    fill
                    className="object-cover"
                    data-ai-hint="jewelry macro detail"
                    priority
                />
            </div>
             <div className="space-y-8 md:-ml-16 z-10 p-8">
                 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/Images/Custom_Design/YourVision_img2.png"
                        alt="Model wearing a custom necklace"
                        fill
                        className="object-cover"
                        data-ai-hint="model wearing jewelry"
                        priority
                    />
                 </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Your Vision, Our Artistry</h1>
                    <p className="text-lg text-foreground/80 max-w-md mx-auto md:mx-0">From a fleeting idea to a tangible treasure, our bespoke service transforms your personal story into an exquisite piece of high jewelry, crafted exclusively for you.</p>
                     <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                                <BotMessageSquare className="mr-2" /> Start on WhatsApp
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                           <a href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}>
                               <Mail className="mr-2" /> Email Us Your Idea
                           </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

      {/* --- 4-Step Process Section --- */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">The Bespoke Journey</h2>
          <p className="text-lg text-foreground/70 mt-2">A seamless process from imagination to creation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                 <Image src={step.imgSrc} alt={step.title} fill className="object-cover" data-ai-hint={step.dataAiHint} />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

       {/* --- How to Start Your Custom Order --- */}
       <div className="max-w-5xl mx-auto mb-24">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Start Your Custom Order</h2>
           <p className="text-lg text-foreground/70 mt-2">A simple, personal, and collaborative experience.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {startOrderSteps.map((step, index) => (
             <div key={step.title} className="p-8 bg-card/60 rounded-xl text-center flex flex-col items-center shadow-md transition-shadow hover:shadow-lg border border-transparent hover:border-primary/20">
               <div className="p-4 bg-primary/10 rounded-full mb-4">{step.icon}</div>
               <h3 className="text-xl font-semibold mb-2 text-primary">{`Step ${index + 1}: ${step.title}`}</h3>
               <p className="text-foreground/70 leading-relaxed text-sm">{step.description}</p>
             </div>
           ))}
         </div>
          <div className="mt-12 text-center">
              <Button asChild size="lg">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                      Contact a Designer Now
                  </a>
              </Button>
          </div>
       </div>

       <Separator className="bg-border/50 max-w-5xl mx-auto my-24" />

      {/* --- Highlights Gallery --- */}
      <div className="max-w-6xl mx-auto mb-24">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Custom Design Highlights</h2>
          <p className="text-lg text-foreground/70 mt-2">Creations born from imagination and artistry.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlightDesigns.map((design, index) => (
            <div key={design.id} className={`relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group ${index === 1 || index === 2 ? 'md:col-span-2' : ''}`}>
               <Image src={design.imgSrc} alt={design.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={design.dataAiHint} />
               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-md">{design.name}</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map(item => (
                <div key={item.title} className="p-8 bg-card/60 rounded-xl text-center flex flex-col items-center shadow-md transition-shadow hover:shadow-lg border border-transparent hover:border-primary/20">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
                </div>
            ))}
        </div>
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
