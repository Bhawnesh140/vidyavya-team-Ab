import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Database,
  Brain,
  Clock,
  IndianRupee,
  CheckCircle,
  Briefcase,
  Users,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';

const programs = [
  {
    icon: Database,
    title: 'Data Engineering',
    duration: '6 Months',
    description: 'Master the art of building scalable data pipelines and infrastructure that power modern businesses.',
    curriculum: [
      'Python & SQL Mastery',
      'ETL Pipeline Development',
      'Apache Spark & Kafka',
      'Cloud Data Platforms (AWS/GCP/Azure)',
      'Data Warehousing & Modeling',
      'Real-time Data Processing',
      'Data Quality & Governance',
      'Production Deployment',
    ],
    highlights: [
      '6-month guaranteed internship on live projects',
      'Monthly stipend during internship',
      'Mentorship from senior data engineers',
      'Portfolio of production-ready projects',
      'Job opportunities for top performers',
    ],
    color: 'from-accent/50 to-accent/20',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    duration: '6 Months',
    description: 'Build intelligent systems and learn to deploy machine learning models at scale in production environments.',
    curriculum: [
      'Mathematics for ML',
      'Machine Learning Algorithms',
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'MLOps & Model Deployment',
      'Large Language Models',
      'AI Ethics & Best Practices',
    ],
    highlights: [
      '6-month guaranteed internship on AI projects',
      'Monthly stipend during internship',
      'Mentorship from ML practitioners',
      'End-to-end ML project portfolio',
      'Job opportunities for top performers',
    ],
    color: 'from-primary/20 to-primary/10',
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: '6-Month Guaranteed Internship',
    description: 'Work on live projects at partner companies, gaining real industry experience.',
  },
  {
    icon: IndianRupee,
    title: 'Stipend During Internship',
    description: 'Earn while you learn with monthly stipend during your internship period.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from senior industry professionals with decades of hands-on experience.',
  },
  {
    icon: Trophy,
    title: 'Job Opportunities',
    description: 'Top performers get fast-tracked for full-time positions at partner companies.',
  },
];

const Programs = () => {
  const { openModal } = useRequestCallback();
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block font-accent text-base font-medium text-primary uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Job-Focused <span className="text-primary">Tech Programs</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Master in-demand skills with hands-on training, real projects, and 6-month guaranteed
              internships in Data Engineering and AI/ML.
            </p>
            <Button variant="cta" size="xl" onClick={openModal}>
              Request Callback
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <Section key={program.title} variant={index % 2 === 0 ? 'default' : 'cream'}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={index % 2 === 1 ? 'lg:order-2' : ''}
            >
              <div className={`inline-flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${program.color} mb-6`}>
                <program.icon className="w-8 h-8 text-foreground" />
                <span className="font-heading font-semibold text-xl text-foreground">
                  {program.title}
                </span>
              </div>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center gap-2 font-body text-sm text-foreground bg-muted px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-2 font-body text-sm text-foreground bg-muted px-4 py-2 rounded-full">
                  <IndianRupee className="w-4 h-4" />
                  Stipend Included
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Program Highlights
              </h3>
              <ul className="space-y-3 mb-8">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={index % 2 === 1 ? 'lg:order-1' : ''}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                  Curriculum
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {program.curriculum.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                    >
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                        {i + 1}
                      </span>
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Benefits */}
      <Section variant="secondary" className="text-secondary-foreground">
        <SectionHeader
          label="Why Choose Vidyavya"
          title="What Sets Us Apart"
          subtitle="Our programs are designed to ensure you're job-ready from day one."
          className="[&_span]:text-primary [&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/80"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-foreground/10 p-6 rounded-xl text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-secondary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-secondary-foreground/80">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary/10 to-accent/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career in tech.
            Our team is ready to guide you through the enrollment process.
          </p>
          <Button variant="cta" size="xl" onClick={openModal}>
            Request Callback
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Programs;
