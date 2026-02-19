import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'secondary' | 'accent' | 'cream';
}

const sectionVariants = {
  default: 'bg-background',
  secondary: 'bg-secondary text-secondary-foreground',
  accent: 'bg-accent/30',
  cream: 'bg-cream',
};

const Section = ({ children, className, id, variant = 'default' }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        sectionVariants[variant],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
