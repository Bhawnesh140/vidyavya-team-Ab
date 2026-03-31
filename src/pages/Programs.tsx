import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Briefcase,
  IndianRupee,
  Users,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import { useRequestCallback } from '@/context/RequestCallbackContext';

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
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-[1.7rem] sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold tracking-tight mb-3 md:mb-4">
              <span className="text-black">Two Programs</span> <span className="text-[#FF5757]">One Mission</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-5 md:mb-6">
              Intensive 6-month engineering tracks built around the skills that technology companies actually hire for. Choose the path that aligns with your career goals.
            </p>
            <Button variant="cta" size="xl" onClick={openModal}>
              Request Callback
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Two Vertical Cards Layout (Side-by-Side) */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background">
        <div className="container-custom max-w-6xl mx-auto">


          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1 — Data Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(52,73,94,0.45)] hover:-translate-y-2 transition-all duration-300 border border-border/50"
            >
              {/* Top Section */}
              <div className="bg-[#34495E] text-white p-8 md:p-10">
                <span className="inline-block font-accent text-xs font-semibold tracking-wider uppercase opacity-80 mb-3">
                  Program 01
                </span>
                <h3 className="font-heading text-3xl font-bold mb-4 text-white">
                  Data Engineering
                </h3>
                <p className="font-body text-sm md:text-base opacity-90 leading-relaxed mb-6 text-white">
                  Build modern data platforms, pipelines, and analytics infrastructure used by leading tech companies.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold shadow-sm border border-white/20 whitespace-nowrap">
                    6 Months
                  </span>
                  <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold shadow-sm border border-white/20 whitespace-nowrap">
                    Hands-On Projects
                  </span>
                  <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold shadow-sm border border-white/20 whitespace-nowrap">
                    Cloud Deployment
                  </span>
                </div>
              </div>

              {/* Tech Stack Icons Row */}
              <div className="bg-muted/30 border-b border-border/50 py-5 px-8 md:px-10 overflow-hidden relative">
                <span className="inline-block font-accent text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  Core Technologies
                </span>
                <div className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center justify-start pr-8">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="SQL" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="SQL" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" alt="Spark" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Spark" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Java" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-9 w-auto hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="AWS" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Docker" />
                </div>
              </div>

              {/* Course Outline */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <span className="inline-block font-accent text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                  Course Outline
                </span>
                <div className="space-y-6 flex-grow mb-8">
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-[#34495E] text-lg">01</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Engineering Foundations</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Linux, shell scripting, Git, Python, and SQL — the core toolkit every data engineer needs to work in real codebases.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-[#34495E] text-lg">02</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Data Modeling & Pipelines</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">ETL/ELT design, dimensional modeling, data quality validation, and building end-to-end analytical pipelines from raw source data.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-[#34495E] text-lg">03</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Distributed Systems & Streaming</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Apache Spark for large-scale batch processing and Apache Kafka for real-time event streaming and pipeline design.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-[#34495E] text-lg">04</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Cloud, Orchestration & Analytics Engineering</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">AWS & GCP cloud platforms, data lake architecture, Apache Airflow for orchestration, and dbt for transformation layers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-[#34495E] text-lg">05</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">System Design, BI & Production</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Business metrics, Power BI & Tableau dashboards, data platform architecture, security, compliance, and a full capstone project.</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <Button variant="outline" className="w-full text-[#34495E] border-[#34495E] hover:bg-[#34495E] hover:text-white transition-colors" asChild>
                  <Link to="/programs/data-engineering">
                    Know More
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Card 2 — AI / ML Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(255,87,87,0.45)] hover:-translate-y-2 transition-all duration-300 border border-border/50"
            >
              {/* Top Section */}
              <div className="bg-primary text-primary-foreground p-8 md:p-10">
                <span className="inline-block font-accent text-xs font-semibold tracking-wider uppercase opacity-80 mb-3">
                  Program 02
                </span>
                <h3 className="font-heading text-3xl font-bold mb-4">
                  AI / ML Engineering
                </h3>
                <p className="font-body text-sm md:text-base opacity-90 leading-relaxed mb-6">
                  Design and deploy production-ready machine learning and artificial intelligence systems end to end.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    6 Months
                  </span>
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    Deep Learning
                  </span>
                  <span className="px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-semibold shadow-sm border border-border/50 whitespace-nowrap">
                    MLOps
                  </span>
                </div>
              </div>

              {/* Tech Stack Icons Row */}
              <div className="bg-muted/30 border-b border-border/50 py-5 px-8 md:px-10 overflow-hidden relative">
                <span className="inline-block font-accent text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  Core Technologies
                </span>
                <div className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center justify-start pr-8">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="TensorFlow" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="PyTorch" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-9 w-9 hover:scale-110 hover:-translate-y-1 transition-transform flex-shrink-0 drop-shadow-sm" title="JavaScript" />
                </div>
              </div>

              {/* Course Outline */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <span className="inline-block font-accent text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                  Course Outline
                </span>
                <div className="space-y-6 flex-grow mb-8">
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">01</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Python, Data & ML Fundamentals</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Advanced Python, NumPy, Pandas, feature engineering, and core ML models — regression, classification, and clustering with scikit-learn.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">02</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Deep Learning</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Neural networks, CNNs for image data, RNNs and LSTMs for sequences, and transfer learning with TensorFlow and PyTorch.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">03</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">MLOps & Production Deployment</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Package, deploy, and monitor ML models as live production APIs — with CI/CD automation and model drift detection.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">04</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Applied AI Systems</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">NLP pipelines, recommendation engines, computer vision applications, and LLM-based tools with prompt engineering for real users.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-heading font-bold text-primary text-lg">05</span>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">ML System Design & Capstone</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">Inference architecture, model scaling, feature stores, and a complete end-to-end AI system as a production-ready portfolio project.</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors" asChild>
                  <Link to="/programs/ai-ml-engineering">
                    Know More
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits - STRICTLY KEPT AS IS */}
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


    </Layout>
  );
};

export default Programs;
