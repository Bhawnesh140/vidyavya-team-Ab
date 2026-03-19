import { useEffect } from 'react';

const LogoStrip = () => {
  // Generate an array of image paths from 1 to 5
  const logos = Array.from({ length: 5 }, (_, i) => `/company-logos/${i + 1}.png`);

  return (
    <div className="py-4 bg-card border-y border-border overflow-hidden">
      <div className="container-custom mb-2">
        <p className="font-accent text-[1.4rem] font-semibold text-muted-foreground text-center uppercase tracking-wider">
          Trusted by Leading Companies
        </p>
      </div>
      <div className="relative overflow-hidden py-0">
        <div className="flex testimonial-scroll w-max">
          {/* First set of logos */}
          <div className="flex gap-4 md:gap-8 items-center px-6">
            {logos.map((src, index) => {
              // Increase size for Logo 2 (index 1) and Logo 4 (index 3) by 6 tailwind steps over the base
              const isLarger = index === 1 || index === 3;
              const imgSizeClass = isLarger
                ? "h-40 md:h-48 w-72 md:w-80" // Base + 6 equivalent (scaled up by ~15-20%)
                : "h-28 md:h-32 w-56 md:w-64"; // Base (scaled up by ~15-20%)

              return (
                <div
                  key={`logo-img-1-${index}`}
                  className="flex-shrink-0 h-40 md:h-48 w-72 md:w-80 flex items-center justify-center p-0 transition-transform"
                >
                  <img
                    src={src}
                    alt={`Company logo ${index + 1}`}
                    loading="lazy"
                    className={`${imgSizeClass} object-contain opacity-70 hover:opacity-100 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-lg transition-all duration-300`}
                  />
                </div>
              );
            })}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-4 md:gap-8 items-center px-6">
            {logos.map((src, index) => {
              // Same sizing logic for the duplicate loop
              const isLarger = index === 1 || index === 3;
              const imgSizeClass = isLarger
                ? "h-40 md:h-48 w-72 md:w-80" // Base + 6 equivalent
                : "h-28 md:h-32 w-56 md:w-64"; // Base

              return (
                <div
                  key={`logo-img-2-${index}`}
                  className="flex-shrink-0 h-40 md:h-48 w-72 md:w-80 flex items-center justify-center p-0 transition-transform"
                >
                  <img
                    src={src}
                    alt={`Company logo ${index + 1}`}
                    loading="lazy"
                    className={`${imgSizeClass} object-contain opacity-70 hover:opacity-100 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-lg transition-all duration-300`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
