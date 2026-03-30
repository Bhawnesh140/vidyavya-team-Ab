import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const companyBenefits = [
  'Students trained on real-world tools and workflows',
  'Reduced onboarding and training time',
  'Engage learners on live projects and practical assignments',
  'Early identification of high-potential talent',
];

const companyProcess = [
  {
    step: '01',
    title: 'Requirement Sharing',
    description: 'Companies share use cases or project requirements.',
  },
  {
    step: '02',
    title: 'Curriculum Alignment',
    description: 'Vidyavya aligns training to these needs.',
  },
  {
    step: '03',
    title: 'Practical Training',
    description: 'Students work under mentorship in real or simulated environments.',
  },
  {
    step: '04',
    title: 'Evaluation & Hiring',
    description: 'Companies evaluate, mentor, and hire with confidence.',
  },
];

const collegeBenefits = [
  'Industry-aligned Data Engineering and AI/ML training',
  'Hands-on, project-based learning beyond classrooms',
  'Improved placement performance and employer confidence',
  'Strong industry connect for students and institutions',
];

const collegeProcess = [
  {
    step: '01',
    title: 'Strategic Integration',
    description: 'Vidyavya programs integrate alongside existing academic structures.',
  },
  {
    step: '02',
    title: 'Hands-on Training',
    description: 'Students receive hands-on training through guided projects.',
  },
  {
    step: '03',
    title: 'Industry Exposure',
    description: 'Exposure to industry tools, workflows and mentorship.',
  },
  {
    step: '04',
    title: 'Enhanced Outcomes',
    description: 'Colleges enhance outcomes without disrupting academics.',
  },
];

import PartnerForm from '@/components/partner/PartnerForm';
import { useState } from 'react';

const Partner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="font-heading text-[1.7rem] md:text-4xl lg:text-[2.8rem] font-bold text-foreground mb-6">
              Building the <span className="text-primary">Future, Together</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed lg:whitespace-nowrap">
              We partner with companies and colleges committed to developing skilled, job-ready tech talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Companies */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="font-heading font-semibold text-xl text-foreground">
                For Companies
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Access talent trained for real work
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Vidyavya partners with technology companies to build a strong, job-ready talent pipeline.
            </p>

            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Why Partner With Us
            </h3>
            <ul className="space-y-3 mb-8">
              {companyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" onClick={() => setIsFormOpen(true)}>
              Partner with Vidyavya to access industry-ready tech talent.
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                How It Works
              </h3>
              <div className="space-y-6">
                {companyProcess.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-heading text-3xl font-bold text-primary/30">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground lg:whitespace-nowrap">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* For Colleges */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <span className="font-heading font-semibold text-xl text-foreground">
                For Colleges
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Create industry-ready graduates
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              We work with colleges that want students to graduate with practical skills, confidence, and real-world exposure.
            </p>

            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Why Partner With Us
            </h3>
            <ul className="space-y-3 mb-8">
              {collegeBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" onClick={() => setIsFormOpen(true)}>
              Let’s build industry-ready graduates together.
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-1"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                How It Works
              </h3>
              <div className="space-y-6">
                {collegeProcess.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-heading text-3xl font-bold text-accent">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground lg:whitespace-nowrap">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <PartnerForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </Layout>
  );
};

export default Partner;
