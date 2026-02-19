import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Target, Lightbulb, Users, Award, Briefcase, FileCheck, Rocket } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Job-Focused Curriculum',
    description: 'Every module is designed with industry demands in mind.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Learning',
    description: 'Work on real projects, real data, and real systems from day one.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn directly from founders and senior professionals.',
  },
  {
    icon: Award,
    title: 'Guaranteed Internship',
    description: '6-month internship on live projects with stipend.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Dedicated placement assistance and interview prep.',
  },
  {
    icon: Rocket,
    title: 'Live Projects',
    description: 'Build a production-ready portfolio that stands out.',
  },
  {
    icon: FileCheck,
    title: 'Industry Certified',
    description: 'Get recognized certifications upon completion.',
  },
];

const WhyVidyavya = () => {
  return (
    <Section>
      <SectionHeader
        label="Why Choose Vidyavya?"
        title="Where Learning Meets Real Work"
        subtitle="Unlike traditional institutes, Vidyavya is built around how the tech industry actually works. Our programs turn theory into execution through real projects, mentorship, and workplace exposure."
      />

      <div className="relative overflow-hidden mb-12 py-4">
        <div className="flex testimonial-scroll w-max">
          {/* First Set */}
          <div className="flex gap-6 px-3">
            {features.map((feature, index) => (
              <div
                key={`feature-1-${index}`}
                className="w-[300px] bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow flex-shrink-0 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* Duplicate Set for Infinite Scroll */}
          <div className="flex gap-6 px-3">
            {features.map((feature, index) => (
              <div
                key={`feature-2-${index}`}
                className="w-[300px] bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow flex-shrink-0 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </div>
    </Section>
  );
};

export default WhyVidyavya;
