import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Data Engineer at TechCorp',
    year: '2024',
    feedback: 'Vidyavya transformed my career. The hands-on projects and mentorship prepared me for real-world challenges. Within months, I was working on production systems.',
    image: null,
  },
  {
    name: 'Priya Patel',
    role: 'ML Engineer at AI Labs',
    year: '2024',
    feedback: 'The practical approach at Vidyavya is unmatched. I learned more in 6 months here than in 4 years of college. The internship experience was invaluable.',
    image: null,
  },
  {
    name: 'Aditya Kumar',
    role: 'Cloud Architect at CloudBase',
    year: '2023',
    feedback: 'What sets Vidyavya apart is the industry relevance. Every project, every challenge was designed to build real capability. I entered the workforce confident.',
    image: null,
  },
  {
    name: 'Sneha Reddy',
    role: 'Data Scientist at DataFlow',
    year: '2024',
    feedback: 'The mentorship at Vidyavya changed everything. Working with senior professionals gave me insights no textbook could provide.',
    image: null,
  },
  {
    name: 'Vikram Singh',
    role: 'Software Engineer at DevStudio',
    year: '2023',
    feedback: 'Vidyavya\'s focus on execution over theory is exactly what the industry needs. I was job-ready from day one of my internship.',
    image: null,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container-custom mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-foreground text-center mb-4">
          Success Stories
        </h2>
        <p className="font-body text-secondary-foreground/80 text-center max-w-2xl mx-auto">
          Hear from our students who transformed their careers with Vidyavya
        </p>
      </div>

      {/* Mobile View: Single card fading carousel */}
      <div className="md:hidden relative px-4 w-full max-w-[400px] mx-auto min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-x-4 top-0"
          >
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-xl transition-shadow w-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-[15px] text-foreground mb-6 leading-relaxed min-h-[110px]">
                "{testimonials[activeIndex].feedback}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="font-heading font-semibold text-foreground">
                    {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].year}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop View: Infinite Scroll */}
      <div className="hidden md:block relative group py-4">
        <div className="flex testimonial-scroll group-hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex gap-6 px-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={`testimonial-1-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="font-heading font-semibold text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-6 px-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={`testimonial-2-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="font-heading font-semibold text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
