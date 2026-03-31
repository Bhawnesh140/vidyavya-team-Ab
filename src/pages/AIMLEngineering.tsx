import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Hammer, 
  Telescope, 
  Target,
  CheckCircle2,
  Calendar,
  Code2,
  Database,
  Cloud,
  Terminal,
  BarChart,
  GitBranch,
  FileText,
  Github,
  Linkedin,
  Mic,
  MessageSquare,
  Users,
  BrainCircuit,
  Rocket,
  Microscope,
  Crosshair
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AIMLEngineering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Dark + Gradient Premium Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0A0611] text-white">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] opacity-20 md:opacity-50 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] opacity-20 md:opacity-40 transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[#0A0611] opacity-60 mix-blend-overlay" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeIn} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              AI / ML<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Engineering</span><br/>
              Career Program
            </motion.h1>
            
            <motion.p variants={fadeIn} className="font-body text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Design, train, and deploy production-ready AI systems — going far beyond notebook experimentation into real engineering workflows that deliver models to users at scale.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10">
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                6 Months · 24 Weeks
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Classroom / Hybrid
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <BrainCircuit className="w-4 h-4 mr-2 text-primary" />
                End-to-End ML Systems
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-primary" />
                MLOps & Deployment
              </div>
            </motion.div>

            <motion.span variants={fadeIn} className="inline-block font-accent text-sm md:text-base font-semibold tracking-widest text-[#FF5757] uppercase opacity-90 mt-4 border-t border-white/10 pt-6 w-full max-w-lg">
              Vidyavya Advanced Engineering Career Programs
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-12 bg-background relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-accent text-lg md:text-xl font-bold tracking-widest text-primary uppercase mb-4 relative pb-2">
              About This Program
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/40 rounded-full" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              From Model Notebooks to Production AI
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Vidyavya AI/ML Engineering Career Program is a 6-month intensive built around the full lifecycle of machine learning — from data preparation and model training to cloud deployment and production monitoring. Students graduate having deployed real AI systems, making them genuinely job-ready in one of the highest-demand fields in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="pt-6 pb-2 md:pt-10 md:pb-6 bg-background relative z-10">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {[
              { icon: BrainCircuit, title: "End-to-End ML Systems", desc: "Build complete pipelines from raw data to production inference endpoints.", bg: "bg-slate-50 border-slate-100" },
              { icon: Rocket, title: "MLOps & Deployment", desc: "Package, deploy, and maintain ML models as reliable production APIs.", bg: "bg-slate-50 border-slate-100" },
              { icon: Microscope, title: "Deep Learning Mastery", desc: "CNNs, RNNs, Transformers, and transfer learning from real frameworks.", bg: "bg-slate-50 border-slate-100" },
              { icon: Crosshair, title: "Applied AI Systems", desc: "NLP, computer vision, LLMs, and recommendation engines — built for users.", bg: "bg-slate-50 border-slate-100" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary shadow-sm transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm flex-grow leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section - Card Based Layout */}
      <Section className="bg-background">
        <SectionHeader 
          label="Curriculum"
          title="Six Months. Six Engineering Milestones."
          subtitle="Each month builds systematically — from Python and data mastery to building and shipping complete AI systems at scale."
        />
        
        <div className="max-w-5xl mx-auto space-y-6 mt-16 md:mt-24">
          {[
            {
              month: "Month 1",
              title: "Data & Python Foundations",
              topics: [
                "Advanced Python for ML workflows",
                "NumPy for numerical computation",
                "Pandas for data manipulation",
                "Data cleaning and missing value handling",
                "Feature preparation and engineering",
                "Exploratory data analysis techniques"
              ]
            },
            {
              month: "Month 2",
              title: "Machine Learning Fundamentals",
              topics: [
                "Regression and classification models",
                "Clustering algorithms & unsupervised methods",
                "scikit-learn end-to-end workflows",
                "Cross-validation and model evaluation",
                "Hyperparameter tuning strategies",
                "Avoiding overfitting in practice"
              ]
            },
            {
              month: "Month 3",
              title: "Deep Learning",
              topics: [
                "Neural network architecture & backpropagation",
                "CNNs — feature extraction, pooling & image classification",
                "RNNs & LSTMs for sequential & time-series data",
                "Transfer learning from TensorFlow Hub & PyTorch",
                "Training loops from scratch to production"
              ]
            },
            {
              month: "Month 4",
              title: "MLOps & Production Deployment",
              topics: [
                "Package models for production (Docker, APIs)",
                "Deploy models as callable REST APIs",
                "Automate CI/CD pipelines for ML systems",
                "Monitor models in production for drift and failures",
                "Maintain and retrain deployed models"
              ],
              project: "Month 4 Milestone\nStudents deploy at least one live, callable production API — a portfolio milestone that significantly strengthens job applications."
            },
            {
              month: "Month 5",
              title: "Applied AI Systems",
              topics: [
                "NLP pipelines — tokenization, embeddings & text workflows",
                "Recommendation systems — collaborative & content-based filtering",
                "Computer vision — object detection & pretrained vision models",
                "LLMs & prompt engineering for production AI applications",
                "Personalization engines like those used by streaming platforms"
              ]
            },
            {
              month: "Month 6",
              title: "ML System Design & Final Project",
              topics: [
                "End-to-end ML pipeline architecture",
                "Inference system design patterns",
                "Model scaling — vertical & horizontal strategies",
                "Latency vs. throughput trade-offs",
                "Feature stores and model registries"
              ]
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-primary text-white p-8 md:p-10 md:w-1/3 shrink-0 flex flex-col justify-center relative overflow-hidden">
                <span className="font-accent text-sm font-semibold tracking-widest uppercase text-white/80 mb-3 relative z-10">{item.month}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold leading-snug relative z-10">{item.title}</h3>
                
                {/* Abstract shape */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-[20px]" />
              </div>
              <div className="p-8 md:p-10 flex-grow bg-white">
                <ul className="space-y-4 mb-6">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-4 mt-0.5" />
                      <span className="font-body text-foreground/80 leading-relaxed max-w-xl">{topic}</span>
                    </li>
                  ))}
                </ul>
                {item.project && (
                  <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl mt-8">
                    <span className="block font-heading font-bold text-sm uppercase tracking-widest text-primary mb-2">{item.project.split('\n')[0]}</span>
                    <p className="font-body text-sm font-medium text-foreground/80 leading-relaxed">{item.project.split('\n')[1]}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Deep Dive Cards */}
      <section className="bg-slate-50 border-t border-border/50 pt-10 pb-16 md:pt-14 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🧬", title: "Neural Networks", p: "Architecture fundamentals, backpropagation, activation functions, and training loops built from scratch." },
            { icon: "📷", title: "CNNs", p: "Convolutional Neural Networks for image data — feature extraction, pooling, and classification pipelines." },
            { icon: "🔄", title: "RNNs & LSTMs", p: "Recurrent architectures for sequential data — time series, text, and memory-aware modeling." },
            { icon: "⚡", title: "Transfer Learning", p: "Leverage pretrained models from TensorFlow Hub and PyTorch to accelerate development on new tasks." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-border/60 shadow-sm transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capstone & Deliverables */}
      <Section className="bg-gradient-to-br from-[#0F0A1A] to-[#1A050B] text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <motion.span initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="inline-block font-accent text-sm font-semibold tracking-widest text-[#FF5757] uppercase mb-4">
              Final Capstone Project
            </motion.span>
            <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Design & Build a Complete AI System
            </motion.h2>
            <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="font-body text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Students design and build a complete end-to-end AI system — a polished, portfolio-ready deliverable that demonstrates the full ML engineering stack, from raw data to monitored production deployment.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-8 text-center text-white/90 uppercase tracking-widest border-b border-white/10 pb-4">Capstone Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "Data preparation and feature engineering pipeline",
                "Model training, evaluation, and iteration",
                "API-based production deployment",
                "Monitoring and observability setup",
                "Portfolio-ready documentation and presentation"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full md:w-[calc(50%-12px)] flex items-center p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mr-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body font-medium leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Tools & Technologies */}
      <Section className="bg-white">
        <SectionHeader 
          label="What You'll Work With"
          title="Tools & Technologies"
        />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-6xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {[
            { icon: Code2, title: "Languages & Libraries", p: "Python NumPy Pandas scikit-learn", bg: "bg-slate-50 border-slate-100" },
            { icon: BrainCircuit, title: "Deep Learning Frameworks", p: "TensorFlow PyTorch TensorFlow Hub Keras", bg: "bg-slate-50 border-slate-100" },
            { icon: Telescope, title: "Applied AI", p: "NLP Pipelines Computer Vision LLMs Prompt Engineering", bg: "bg-slate-50 border-slate-100" },
            { icon: Rocket, title: "MLOps & Deployment", p: "Docker REST APIs CI/CD for ML Model Monitoring", bg: "bg-slate-50 border-slate-100" },
            { icon: Cloud, title: "Cloud & Infrastructure", p: "AWS Google Cloud Feature Stores Model Registries", bg: "bg-slate-50 border-slate-100" },
            { icon: GitBranch, title: "Engineering Practices", p: "Git / GitHub Model Evaluation Hyperparameter Tuning", bg: "bg-slate-50 border-slate-100" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-primary shadow-sm transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold mb-3 text-foreground">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm tracking-wide leading-relaxed flex-grow">{item.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Program Outcomes */}
      <Section className="bg-slate-50 border-t border-slate-100">
        <SectionHeader 
          label="What You'll Be Able to Do"
          title="Program Outcomes"
          subtitle="Graduates leave with demonstrated, deployable AI/ML engineering ability — not just theoretical knowledge, but live systems they shipped."
        />
        
        <div className="max-w-6xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 gap-10 lg:gap-16">
          {[
            { n: "01", t: "Build ML Systems End-to-End", d: "Train, evaluate, and iterate on machine learning models across regression, classification, and deep learning domains using real frameworks." },
            { n: "02", t: "Deploy to Production", d: "Package and ship models to AWS and Google Cloud as reliable, monitored production APIs using modern MLOps and DevOps practices." },
            { n: "03", t: "Build Applied AI Applications", d: "Design and build NLP pipelines, recommendation systems, computer vision apps, and LLM-powered tools that solve real user problems." },
            { n: "04", t: "Work in Real Teams", d: "Collaborate using Git, communicate technical decisions clearly, and contribute effectively to professional engineering environments from day one." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="font-heading text-6xl md:text-7xl font-bold text-slate-200 shrink-0 group-hover:text-primary/20 transition-colors">{item.n}</div>
              <div>
                <h4 className="font-heading text-2xl font-bold mb-4 text-foreground">{item.t}</h4>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Weekly Section */}
      <Section className="bg-[#0F0A1A] text-white overflow-hidden relative border-t-8 border-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="md:w-1/2">
            <span className="inline-block font-accent text-sm font-semibold tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full uppercase mb-6">
              Every Saturday
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Complementary Professional Skills
            </h2>
            <p className="font-body text-xl text-slate-300 leading-relaxed mb-8">
              Technical ability gets you interviews. Professional readiness gets you hired. Every Saturday throughout the program, students participate in structured career development sessions.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="md:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 relative z-10 shadow-2xl">
              <ul className="space-y-6">
                {[
                  { icon: FileText, t: "Resume Building" },
                  { icon: Github, t: "GitHub Portfolio" },
                  { icon: Linkedin, t: "LinkedIn Optimization" },
                  { icon: Mic, t: "Mock Interviews" },
                  { icon: MessageSquare, t: "Workplace Communication" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg md:text-xl font-body font-medium text-white group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 text-[#FF5757] group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                      <item.icon className="w-6 h-6" />
                    </div>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default AIMLEngineering;
