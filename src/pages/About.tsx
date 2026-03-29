import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Eye, Target, Linkedin } from 'lucide-react';

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
    image: '/founders/siddharth.jpeg',
    linkedin: 'https://www.linkedin.com/in/siddharth-surve-a336131b9/',
  },
  {
    name: 'Saachin Mane',
    role: 'Co-founder',
    bio: 'Saachin is a tech leader with deep expertise in data, cloud, AI, and automation. Founder of Zyver and co-founder of Meta for Data, he is passionate about building next-generation technology and aligning education with real-world industry demands.',
    initials: 'SM',
    image: '/founders/saachin.jpeg',
    linkedin: 'https://www.linkedin.com/in/saachin-mane-75070b186/',
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
            <h1 className="font-heading text-[1.7rem] md:text-4xl lg:text-[2.8rem] font-bold text-foreground mb-4">
              Redefining How <span className="text-primary">Tech Careers Are Built</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Vidyavya was created by founders running technology companies to bridge the gap between academic learning and real industry needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <SectionHeader
              label="Our Story"
              title="Born from Industry Experience"
              align="left"
              className="mb-2 md:mb-2"
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
          <div className="relative h-full">
            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground h-full flex flex-col justify-center">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/50 rounded-full" />
              <div className="relative space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="w-6 h-6 text-secondary-foreground shrink-0" />
                    <h4 className="font-heading font-bold text-xl">Our Vision</h4>
                  </div>
                  <p className="font-body text-sm text-secondary-foreground/80">
                    <span className="block font-bold mb-1">To Build the Future of Tech, One Engineer at a Time</span>
                    We empower motivated learners through practical experience and aim to become India’s leading career accelerator for Data and AI, creating engineers who drive the next wave of technological innovation.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-secondary-foreground shrink-0" />
                    <h4 className="font-heading font-bold text-xl">Our Mission</h4>
                  </div>
                  <p className="font-body text-sm text-secondary-foreground/80">
                    <span className="block font-bold mb-1">To Turn Learners into Leaders</span>
                    We train students in Data Engineering and AI/ML through a work-integrated model where they learn from industry professionals, work on real projects, and graduate confident for modern tech roles.
                  </p>
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
              className="relative p-6 rounded-xl shadow-card transition-all bg-card text-foreground"
            >
              <span className="absolute -top-3 -left-3 font-heading text-5xl font-bold text-primary/40">
                {item.step}
              </span>
              <div className="relative pt-4">
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
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
              <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-6 rounded-full relative group">
                {/* Founder Image */}
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${founder.name} LinkedIn profile`}
                  className="absolute bottom-2 right-2 w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-white" />
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
            className="mb-6 md:mb-8 text-secondary-foreground [&_span]:text-primary [&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/80"
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
