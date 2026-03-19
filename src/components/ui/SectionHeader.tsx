import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  label,
  align = 'center',
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {label && (
        <span className="inline-block font-accent text-xl font-bold text-primary uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-[1.4rem] md:text-[1.7rem] lg:text-4xl font-semibold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
