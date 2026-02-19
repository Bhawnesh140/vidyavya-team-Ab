import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Users, CheckCircle } from 'lucide-react';

const modelSteps = [
  {
    step: '01',
    title: 'Learn',
    description: 'Master Data or AI through expert-led, hands-on training.',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Apply your learning on live industry projects with our partner companies.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Step confidently into your tech career with mentorship & support.',
  },
];

const founders = [
  {
    name: 'Siddharth Surve',
    role: 'Founder & CEO',
    bio: 'Siddharth founded Vidyavya to bridge the gap between academic learning and real industry needs. A seasoned entrepreneur, he also co-founded Meta for Data and focuses on building scalable, industry-driven tech businesses.',
    initials: 'SS',
  },
  {
    name: 'Saachin Mane',
    role: 'Co-founder',
    bio: 'Saachin is a tech leader with deep expertise in data, cloud, AI, and automation. Founder of Zyver and co-founder of Meta for Data, he is passionate about building next-generation technology and aligning education with real-world industry demands.',
    initials: 'SM',
  },
];

const About = () => {
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
            <span className="inline-block font-accent text-base font-bold text-primary uppercase tracking-wider mb-4">
              Redefining How Tech Careers Are Built
            </span>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
              Vidyavya was created by founders running technology companies to bridge the gap between academic learning and real industry needs.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              label="Our Story"
              title="Born from Industry Experience"
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Vidyavya was created to solve a simple problem. Engineering education produces degree holders, not industry-ready professionals.
              </p>
              <p>
                Built by founders running technology companies in data, cloud, and AI, Vidyavya bridges the gap between theory and real-world execution through practical, work-integrated learning.
              </p>
              <p>
                Our programs stay aligned with live industry needs, training learners to work on real systems, and enter the tech industry confident and industry-ready.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/50 rounded-full" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-foreground/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Our Vision</h4>
                    <p className="font-body text-sm text-secondary-foreground/80">
                      To Build the Future of Tech, One Engineer at a Time
                      <br />
                      We empower motivated learners through practical experience and aim to become India’s leading career accelerator for Data and AI, creating engineers who drive the next wave of technological innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-foreground/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Our Mission</h4>
                    <p className="font-body text-sm text-secondary-foreground/80">
                      To Turn Learners into Leaders
                      <br />
                      We train students in Data Engineering and AI/ML through a work-integrated model where they learn from industry professionals, work on live projects, and graduate confident for modern tech roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Model */}
      <Section variant="cream" className="py-8 md:py-12">
        <SectionHeader
          label="Our Model"
          title="A Clear Path to Success"
          subtitle="Our structured approach ensures every learner progresses from training to career success."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {modelSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-xl shadow-card transition-all ${item.title === 'Build'
                  ? 'bg-[#FF5757] text-white'
                  : 'bg-card text-foreground'
                }`}
            >
              <span className={`absolute -top-3 -left-3 font-heading text-5xl font-bold ${item.title === 'Build' ? 'text-white/20' : 'text-primary/20'
                }`}>
                {item.step}
              </span>
              <div className="relative pt-4">
                <h3 className={`font-heading font-semibold text-xl mb-3 ${item.title === 'Build' ? 'text-white' : 'text-foreground'
                  }`}>
                  {item.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${item.title === 'Build' ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Founders */}
      <Section className="py-8 md:py-12">
        <SectionHeader
          label="Founding Team"
          title="Meet Our Founders"
          subtitle="Industry veterans committed to transforming tech education in India."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center relative">
                <span className="font-heading text-3xl font-bold text-secondary-foreground">
                  {founder.initials}
                </span>
                <a href="#" className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform">
                  <Users className="w-4 h-4 text-[#0077b5]" /> {/* Using Users as placeholder for Linkedin until imported */}
                </a>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="font-accent text-sm text-primary font-medium mb-4">
                {founder.role}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Promise */}
      <Section variant="secondary" className="text-secondary-foreground py-10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            label="Our Promise"
            title="Preparation is Our Obsession"
            className="text-secondary-foreground [&_span]:text-primary [&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/80"
          />
          <div className="space-y-6 font-body text-secondary-foreground/90 leading-relaxed">
            <p>
              We believe success is built through preparation, and at Vidyavya, preparation is our focus.
            </p>
            <p>
              Every class and project is designed to build real skills, discipline, and confidence through execution.
            </p>
            <p>
              We do not promise shortcuts. We promise honest preparation, real-world exposure, and skills that matter.
            </p>
            <p className="font-semibold text-secondary-foreground text-lg pt-4">
              You bring the potential.
              <br />
              Vidyavya prepares you to use it.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
