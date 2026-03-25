import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import {
  MapPin,
  Building2,
  Users,
  UserCheck,
  Heart,
  ArrowRight,
  Briefcase
} from 'lucide-react';

const StudentLife = () => {
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
            <span className="inline-block font-accent text-xl font-medium text-primary uppercase tracking-wider mb-4">
              Student Life
            </span>
            <h1 className="font-heading text-[1.7rem] md:text-4xl lg:text-[2.8rem] font-bold text-foreground mb-6">
              Where Learning <span className="text-primary">Meets Growth</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experience a transformative journey at Vidyavya where every day brings new challenges,
              mentorship, and opportunities to grow into an industry-ready professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learn Together. Grow Faster. */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Learn Together. <span className="text-primary">Grow Faster.</span>
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Peer Learning and 1:1 Mentorship
            </h3>
            <ul className="space-y-4">
              {[
                'Learn alongside peers at similar career stages',
                'Comfortable, collaborative learning environment',
                '1:1 mentorship from working professionals',
                'Regular feedback and career guidance'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center"
          >
            <img
              src="/student-life/1.png"
              alt="Learn Together. Grow Faster."
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-sm"
            />
          </motion.div>
        </div>
      </Section>

      {/* Built Like a Startup Office */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 w-full flex items-center justify-center"
          >
            <img
              src="/student-life/2.png"
              alt="Built Like a Startup Office"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-sm"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Built Like a Startup Office
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Think and Work Like a Technologist
            </h3>
            <ul className="space-y-4">
              {[
                'Classrooms designed to replicate startup workspaces',
                'Focus on execution, collaboration, and ownership',
                'Students build professional mindset and confidence',
                'No lecture halls. No college-style learning'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Learn from a Tech Hub */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Learn from a <span className="text-primary">Tech Hub</span>
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Located in Pune
            </h3>
            <ul className="space-y-4">
              {[
                'Based in one of India’s leading tech ecosystems',
                'Close to startups, tech companies, and professionals',
                'Greater industry exposure and networking opportunities'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center"
          >
            <img
              src="/student-life/3.png"
              alt="Learn from a Tech Hub"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-sm"
            />
          </motion.div>
        </div>
      </Section>

      {/* Beyond Technical Skills */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 w-full flex items-center justify-center"
          >
            <img
              src="/student-life/4.png"
              alt="Beyond Technical Skills"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-sm"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Beyond Technical Skills
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Professional and Workplace Readiness
            </h3>
            <ul className="space-y-4">
              {[
                'Communication and soft skills training',
                'Mock interviews including technical and HR rounds',
                'Sessions on workplace behaviour and professionalism',
                'Gender respect and POSH awareness training'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section (Updated Content) */}
      <Section>
        <SectionHeader
          label="Your Journey at Vidyavya"
          title="From Learner to Professional"
          subtitle="A structured journey designed to turn you into an industry-ready professional."
        />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {[
              {
                week: 'Phase 1',
                title: 'Foundation Building',
                description: 'Master core concepts and tools through industry-led training. Build strong technical fundamentals and develop a professional mindset from day one.',
              },
              {
                week: 'Phase 2',
                title: 'Real-World Projects',
                description: 'Apply what you learn by working on real-world projects and assignments. Turn theory into practical, hands-on skills.',
              },
              {
                week: 'Phase 3',
                title: 'Industry Mentorship',
                description: 'Learn directly from experienced professionals who guide you through real workplace challenges and help refine your skills.',
              },
              {
                week: 'Phase 4',
                title: 'Career Profile Building',
                description: 'Build a strong portfolio, resume, and professional presence. Develop communication and workplace skills through focused training and mock interviews.',
              },
              {
                week: 'Phase 5',
                title: 'Step into the Industry',
                description: 'Graduate as a confident, industry-ready professional prepared for roles in Data Engineering, AI/ML, and beyond.',
              }
            ].map((step, index) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block font-accent text-sm font-medium text-primary mb-2">
                    {step.week}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Career Support That Matters */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Career Support That Matters
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Placement and Hiring Opportunities
            </h3>
            <ul className="space-y-4">
              {[
                'Placement support for all students',
                'Direct hiring opportunities for top performers',
                'Strong hiring pipeline through partner companies',
                'Clear role mapping and career guidance'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[300px] shadow-sm"
          >
            <Briefcase className="w-24 h-24 text-primary/40" />
          </motion.div>
        </div>
      </Section>

      {/* Real Company Culture */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 bg-secondary/30 rounded-2xl p-8 flex items-center justify-center min-h-[300px]"
          >
            <Heart className="w-24 h-24 text-primary/40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Real Company Culture
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              Not Just Work, but Belonging
            </h3>
            <ul className="space-y-4">
              {[
                'Team outings and shared experiences',
                'Exposure to real tech company culture',
                'Learning how teams collaborate and grow'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Support Beyond Graduation */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Support Beyond Graduation
            </h2>
            <h3 className="font-heading text-xl font-medium text-secondary mb-6">
              A Career Partner for Life
            </h3>
            <ul className="space-y-4">
              {[
                'Lifetime access to job postings',
                'Continued mock interview support',
                'Ongoing alumni guidance and mentorship'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[300px] shadow-sm"
          >
            <UserCheck className="w-24 h-24 text-primary/40" />
          </motion.div>
        </div>
      </Section>


    </Layout>
  );
};

export default StudentLife;
