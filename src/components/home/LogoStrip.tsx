import { useEffect } from 'react';

const partnerLogos = [
  'TechCorp',
  'DataFlow',
  'CloudBase',
  'AI Labs',
  'DevStudio',
  'InnoTech',
  'CodeWorks',
  'ByteForce',
];

const LogoStrip = () => {
  return (
    <div className="py-12 bg-card border-y border-border overflow-hidden">
      <div className="container-custom mb-6">
        <p className="font-accent text-base text-muted-foreground text-center uppercase tracking-wider">
          Trusted by Leading Companies
        </p>
      </div>
      <div className="relative">
        <div className="flex logo-scroll">
          {/* First set of logos */}
          <div className="flex gap-12 items-center px-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 h-12 px-8 flex items-center justify-center bg-muted rounded-lg"
              >
                <span className="font-heading font-semibold text-muted-foreground/60 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-12 items-center px-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 h-12 px-8 flex items-center justify-center bg-muted rounded-lg"
              >
                <span className="font-heading font-semibold text-muted-foreground/60 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
