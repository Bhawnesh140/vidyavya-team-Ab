import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Database, Brain, Clock, IndianRupee, Trophy, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Database,
    title: 'Data Engineering',
    duration: '6 Months',
    highlights: [
      'ETL Pipeline Development',
      'Cloud Data Platforms',
      'Big Data Technologies',
      'Real-time Data Processing',
    ],
    color: 'bg-accent/30',
    iconColor: 'text-secondary',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    duration: '6 Months',
    highlights: [
      'Machine Learning Algorithms',
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
    ],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
];

const ProgramsPreview = () => {
  return (
    <Section variant="cream">
      <SectionHeader
        label="Our Programs"
        title="Choose Your Career Path"
        subtitle="Focused programs in Data Engineering and AI/ML that prepare you for real-world roles through hands-on learning and industry exposure."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all group"
          >
            <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6`}>
              <program.icon className={`w-7 h-7 ${program.iconColor}`} />
            </div>

            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              {program.title}
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-1 font-body text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1 font-body text-sm text-muted-foreground">
                <IndianRupee className="w-4 h-4" />
                Stipend Included
              </span>
            </div>

            <ul className="space-y-3 mb-6">
              {program.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="font-body text-sm text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            <Button variant="ctaOutline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
              <Link to="/programs">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <Link to="/programs">View All Programs</Link>
        </Button>
      </div>
    </Section>
  );
};

export default ProgramsPreview;
