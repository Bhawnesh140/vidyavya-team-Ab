import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import MetricsSection from '@/components/home/MetricsSection';
import WhyVidyavya from '@/components/home/WhyVidyavya';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MetricsSection />
      <WhyVidyavya />
      <LogoStrip />
      <ProgramsPreview />
      <TestimonialCarousel />
    </Layout>
  );
};

export default Index;
