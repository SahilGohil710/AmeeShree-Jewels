
'use client';

export default function AnimatedHeroText() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Images/Home_Video/3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg animate-text-focus-in">
          AmeeShree Jewels: Where Royalty Meets Radiance
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-text-focus-in animation-delay-200">
          Discover exquisite jewelry meticulously crafted with passion and precision. Find the perfect piece to celebrate life's special moments, embodying timeless elegance and enduring charm.
        </p>
      </div>
    </div>
  );
}
