import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Briefcase, Users } from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import GridBackground from '@/components/ui/GridBackground';

const HeroSection = () => {
  const { openModal } = useRequestCallback();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Grid Background */}
      <GridBackground className="z-0 opacity-40 bottom-0 h-3/4" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* "Transform Your Career" removed as per request */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Shaping Tomorrow’s <br />
              <span className="text-primary">Tech Leaders</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Industry-led training in Data Engineering and AI/ML Engineering, integrated with a 6-month paid internship.
              <br className="hidden md:block" />
              Learn by working inside real tech companies through live projects, expert mentorship, and a work-integrated learning model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" onClick={openModal}>
                Request Callback
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ctaOutline" size="xl" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>


          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl shadow-xl p-6 md:p-8">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/50 rounded-full" />

              <div className="relative grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Work-Integrated Learning</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">Students work inside real tech companies, not simulated labs.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Paid Internship from Day 1</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">Internship offer letter on admission with industry-aligned compensation.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Founder-Led Curriculum</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">Designed by tech founders and industry professionals, not academic faculty.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">Career Partner Model</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">We don’t sell courses. We build careers.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
