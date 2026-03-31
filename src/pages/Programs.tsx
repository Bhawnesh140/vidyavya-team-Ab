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
  ChevronRight,
  Database,
  Brain,
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

const dataEngineeringProgram = {
  title: "Data Engineering Career Program",
  tagline: "Build the modern data platforms, pipelines, and analytics infrastructure that power today's technology companies — from e-commerce to fintech and beyond.",
  badges: ["6 Months · 24 Weeks", "Classroom / Hybrid", "Hands-On Projects", "Career Readiness"],
  aboutSubtitle: "From Raw Data to Production Pipelines",
  aboutDesc: "The Vidyavya Data Engineering Career Program is a 6-month intensive designed around how data engineers actually work in production environments. Every week combines real engineering concepts with hands-on projects that mirror the systems running at leading technology companies. You'll graduate with a portfolio, technical depth, and interview-ready confidence.",
  aboutHighlights: [
    { emoji: "⚙️", title: "Real Engineering Practices", desc: "Learn how data engineers work in production at scale — not just theory." },
    { emoji: "🏗️", title: "Hands-On Projects", desc: "Build pipelines, warehouses, and dashboards with industry-standard tools." },
    { emoji: "🔭", title: "Production Thinking", desc: "Design systems with resilience, observability, and scalability from day one." },
    { emoji: "🎯", title: "Career Readiness", desc: "Graduate with a portfolio, technical depth, and interview confidence." }
  ],
  curriculumSubtitle: "Six Months. Six Engineering Milestones.",
  curriculumDesc: "Each month builds on the last — starting with engineering foundations and culminating in a production-grade capstone that demonstrates full-stack data platform skills.",
  curriculumMonths: [
    {
      emoji: "🐍",
      title: "Month 1 — Engineering Foundations",
      items: [
        "Intro to Data Engineering — roles, data lifecycles & architecture",
        "Linux & Shell Scripting — file systems, bash, cron & automation",
        "Git & GitHub — version control, branching & pull requests",
        "Python for data ingestion & API interaction",
        "SQL — queries, aggregations, window functions & performance tuning"
      ],
      projectTitle: "Month 1 Project",
      projectDesc: "Build a data ingestion script that pulls from public APIs and design SQL queries to analyze large transactional datasets."
    },
    {
      emoji: "🗄️",
      title: "Month 2 — Data Modeling & Pipelines",
      items: [
        "Data normalization & dimensional modeling",
        "Star schema vs. snowflake schema design",
        "ETL / ELT — batch processing & incremental loads",
        "Pipeline idempotency, retry strategies & error handling",
        "Data quality, validation & anomaly detection",
        "OLTP vs. OLAP — building a mini data warehouse"
      ],
      projectTitle: "Month 2 Project",
      projectDesc: "Build a complete end-to-end ETL pipeline from raw source data to a structured analytical layer."
    },
    {
      emoji: "📊",
      title: "Month 3 — Distributed Data Systems",
      items: [
        "Distributed computing — cluster computing & parallel processing",
        "Apache Spark — RDDs, DataFrames & PySpark transformations",
        "Data partitioning & shuffle operations",
        "Optimizing distributed data processing jobs",
        "Apache Kafka — event streaming, producers & consumers",
        "Real-time data pipeline design"
      ]
    },
    {
      emoji: "☁️",
      title: "Month 4 — Cloud & Modern Data Stack",
      items: [
        "AWS & GCP — compute, storage & networking fundamentals",
        "Cloud storage — S3, GCS & data lake architecture",
        "Lifecycle management for petabyte-scale datasets",
        "Apache Airflow — DAGs, scheduling & monitoring pipelines",
        "Analytics Engineering with dbt — tested transformation layers"
      ]
    },
    {
      emoji: "📈",
      title: "Month 5 — Analytics & Business Data",
      items: [
        "Business metrics — customer analytics & financial reporting KPIs",
        "BI & Dashboard design using Power BI & Tableau concepts",
        "Visual storytelling for non-technical stakeholders",
        "Deep dive into fact tables, dimension tables & data marts",
        "Enterprise reporting structures at scale"
      ]
    },
    {
      emoji: "⚙️",
      title: "Month 6 — System Design & Production",
      items: [
        "Data platform architecture — lakes, batch & streaming patterns",
        "Security & compliance — GDPR, CCPA, access control",
        "Data governance frameworks",
        "Monitoring & observability — logging pipelines & incident management",
        "Production runbooks & structured incident response"
      ]
    }
  ],
  capstoneTitle: "Final Capstone Project",
  capstoneSubtitle: "Build a Complete Data Platform",
  capstoneDesc: "Students design and build a production-grade data platform — demonstrating mastery of the full data engineering stack. This becomes your most powerful portfolio piece when entering the job market.",
  capstoneDeliverables: [
    "Ingestion pipelines from multiple source systems",
    "Distributed processing with Apache Spark",
    "Cloud deployment on AWS or GCP",
    "A live, interactive analytics dashboard",
    "Documented architecture with production observability"
  ],
  toolsSubtitle: "What You'll Work With",
  tools: [
    { cat: "Languages & Scripting", list: "Python SQL Bash / Shell PySpark" },
    { cat: "Data Processing", list: "Apache Spark Apache Kafka ETL / ELT dbt" },
    { cat: "Cloud Platforms", list: "AWS (S3, EC2) Google Cloud (GCS) Data Lakes" },
    { cat: "Orchestration & Workflow", list: "Apache Airflow DAGs Cron Jobs" },
    { cat: "Analytics & Visualization", list: "Power BI Tableau Data Warehousing Dimensional Modeling" },
    { cat: "Engineering Practices", list: "Git / GitHub Data Quality Testing Monitoring & Observability" }
  ],
  outcomesSubtitle: "What You'll Be Able to Do",
  outcomesDesc: "Graduates leave with demonstrable engineering skills — not just theoretical knowledge, but deployed, production-grade systems they built themselves.",
  outcomesList: [
    { num: "01", title: "Design Data Pipelines", desc: "Architect and build robust ETL/ELT pipelines that move and transform data reliably at scale — from ingestion to analytical layers." },
    { num: "02", title: "Operate Distributed Systems", desc: "Work confidently with Apache Spark and Kafka to process large-scale datasets and build real-time data streaming pipelines." },
    { num: "03", title: "Deploy to Cloud", desc: "Package and ship data platforms to AWS and Google Cloud using modern cloud-native architecture and DevOps practices." },
    { num: "04", title: "Work in Real Teams", desc: "Collaborate using Git, communicate technical decisions clearly, and contribute effectively in professional engineering environments." }
  ],
  professionalSkills: [
    "Resume Building", "GitHub Portfolio", "LinkedIn Optimization", "Mock Interviews", "Workplace Communication"
  ]
};

const aiMlProgram = {
  title: "AI / ML Engineering Career Program",
  tagline: "Design, train, and deploy production-ready AI systems — going far beyond notebook experimentation into real engineering workflows that deliver models to users at scale.",
  badges: ["6 Months · 24 Weeks", "Classroom / Hybrid", "End-to-End ML Systems", "MLOps & Deployment"],
  aboutSubtitle: "From Model Notebooks to Production AI",
  aboutDesc: "The Vidyavya AI/ML Engineering Career Program is a 6-month intensive built around the full lifecycle of machine learning — from data preparation and model training to cloud deployment and production monitoring. Students graduate having deployed real AI systems, making them genuinely job-ready in one of the highest-demand fields in technology.",
  aboutHighlights: [
    { emoji: "🧠", title: "End-to-End ML Systems", desc: "Build complete pipelines from raw data to production inference endpoints." },
    { emoji: "🚀", title: "MLOps & Deployment", desc: "Package, deploy, and maintain ML models as reliable production APIs." },
    { emoji: "🔬", title: "Deep Learning Mastery", desc: "CNNs, RNNs, Transformers, and transfer learning from real frameworks." },
    { emoji: "🎯", title: "Applied AI Systems", desc: "NLP, computer vision, LLMs, and recommendation engines — built for users." }
  ],
  curriculumSubtitle: "Six Months. Six Engineering Milestones.",
  curriculumDesc: "Each month builds systematically — from Python and data mastery to building and shipping complete AI systems at scale.",
  curriculumMonths: [
    {
      emoji: "🐍",
      title: "Month 1 — Data & Python Foundations",
      items: [
        "Advanced Python for ML workflows",
        "NumPy for numerical computation",
        "Pandas for data manipulation",
        "Data cleaning and missing value handling",
        "Feature preparation and engineering",
        "Exploratory data analysis techniques"
      ]
    },
    {
      emoji: "🤖",
      title: "Month 2 — Machine Learning Fundamentals",
      items: [
        "Regression and classification models",
        "Clustering algorithms & unsupervised methods",
        "scikit-learn end-to-end workflows",
        "Cross-validation and model evaluation",
        "Hyperparameter tuning strategies",
        "Avoiding overfitting in practice"
      ]
    },
    {
      emoji: "🧠",
      title: "Month 3 — Deep Learning",
      items: [
        "Neural network architecture & backpropagation",
        "CNNs — feature extraction, pooling & image classification",
        "RNNs & LSTMs for sequential & time-series data",
        "Transfer learning from TensorFlow Hub & PyTorch",
        "Training loops from scratch to production"
      ]
    },
    {
      emoji: "🚀",
      title: "Month 4 — MLOps & Production Deployment",
      items: [
        "Package models for production (Docker, APIs)",
        "Deploy models as callable REST APIs",
        "Automate CI/CD pipelines for ML systems",
        "Monitor models in production for drift and failures",
        "Maintain and retrain deployed models"
      ],
      projectTitle: "Month 4 Milestone",
      projectDesc: "Students deploy at least one live, callable production API — a portfolio milestone that significantly strengthens job applications."
    },
    {
      emoji: "🤖",
      title: "Month 5 — Applied AI Systems",
      items: [
        "NLP pipelines — tokenization, embeddings & text workflows",
        "Recommendation systems — collaborative & content-based filtering",
        "Computer vision — object detection & pretrained vision models",
        "LLMs & prompt engineering for production AI applications",
        "Personalization engines like those used by streaming platforms"
      ]
    },
    {
      emoji: "⚙️",
      title: "Month 6 — ML System Design & Final Project",
      items: [
        "End-to-end ML pipeline architecture",
        "Inference system design patterns",
        "Model scaling — vertical & horizontal strategies",
        "Latency vs. throughput trade-offs",
        "Feature stores and model registries"
      ]
    }
  ],
  month3DeepDive: {
    title: "Month 3 Deep Dive — Deep Learning (Four Core Architectures)",
    items: [
      { emoji: "🧬", title: "Neural Networks", desc: "Architecture fundamentals, backpropagation, activation functions, and training loops built from scratch." },
      { emoji: "📷", title: "CNNs", desc: "Convolutional Neural Networks for image data — feature extraction, pooling, and classification pipelines." },
      { emoji: "🔄", title: "RNNs & LSTMs", desc: "Recurrent architectures for sequential data — time series, text, and memory-aware modeling." },
      { emoji: "⚡", title: "Transfer Learning", desc: "Leverage pretrained models from TensorFlow Hub and PyTorch to accelerate development on new tasks." }
    ]
  },
  capstoneTitle: "Final Capstone Project",
  capstoneSubtitle: "Design & Build a Complete AI System",
  capstoneDesc: "Students design and build a complete end-to-end AI system — a polished, portfolio-ready deliverable that demonstrates the full ML engineering stack, from raw data to monitored production deployment.",
  capstoneDeliverables: [
    "Data preparation and feature engineering pipeline",
    "Model training, evaluation, and iteration",
    "API-based production deployment",
    "Monitoring and observability setup",
    "Portfolio-ready documentation and presentation"
  ],
  toolsSubtitle: "What You'll Work With",
  tools: [
    { cat: "Languages & Libraries", list: "Python NumPy Pandas scikit-learn" },
    { cat: "Deep Learning Frameworks", list: "TensorFlow PyTorch TensorFlow Hub Keras" },
    { cat: "Applied AI", list: "NLP Pipelines Computer Vision LLMs Prompt Engineering" },
    { cat: "MLOps & Deployment", list: "Docker REST APIs CI/CD for ML Model Monitoring" },
    { cat: "Cloud & Infrastructure", list: "AWS Google Cloud Feature Stores Model Registries" },
    { cat: "Engineering Practices", list: "Git / GitHub Model Evaluation Hyperparameter Tuning" }
  ],
  outcomesSubtitle: "What You'll Be Able to Do",
  outcomesDesc: "Graduates leave with demonstrated, deployable AI/ML engineering ability — not just theoretical knowledge, but live systems they shipped.",
  outcomesList: [
    { num: "01", title: "Build ML Systems End-to-End", desc: "Train, evaluate, and iterate on machine learning models across regression, classification, and deep learning domains using real frameworks." },
    { num: "02", title: "Deploy to Production", desc: "Package and ship models to AWS and Google Cloud as reliable, monitored production APIs using modern MLOps and DevOps practices." },
    { num: "03", title: "Build Applied AI Applications", desc: "Design and build NLP pipelines, recommendation systems, computer vision apps, and LLM-powered tools that solve real user problems." },
    { num: "04", title: "Work in Real Teams", desc: "Collaborate using Git, communicate technical decisions clearly, and contribute effectively to professional engineering environments from day one." }
  ],
  professionalSkills: [
    "Resume Building", "GitHub Portfolio", "LinkedIn Optimization", "Mock Interviews", "Workplace Communication"
  ]
};

const ProgramBlock = ({ program, index }: { program: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-6xl mx-auto mb-24 bg-card rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-border/50"
    >
      {/* Decorative background grid pattern for tech theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 z-0"></div>
      {/* Subtle glow */}
      <div className={`absolute -top-40 ${index % 2 === 0 ? '-left-40 bg-primary/20' : '-right-40 bg-accent/20'} w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-60`}></div>

      {/* Program Header */}
      <div className="relative z-10 px-6 pt-12 pb-8 md:px-12 md:pt-16 border-b border-border/40">
        <span className="font-accent text-sm font-medium text-primary mb-3 block">
          Vidyavya · Program {index + 1} of 2
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          {program.title}
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl text-balance leading-relaxed">
          {program.tagline}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
          {program.badges.map((badge: string, i: number) => (
            <span key={i} className="inline-flex items-center px-4 py-2 rounded-full font-body text-sm font-medium bg-secondary/10 text-secondary-foreground">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-0 border-b border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
        
        {/* Left Column: About & Outcomes */}
        <div className="lg:col-span-4 bg-muted/30 p-6 md:p-12 flex flex-col gap-12">
          
          {/* About */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">About This Program</h3>
            <p className="font-heading text-sm text-primary font-medium mb-4">{program.aboutSubtitle}</p>
            <p className="font-body text-muted-foreground leading-relaxed text-sm mb-6">{program.aboutDesc}</p>
            <div className="space-y-4">
              {program.aboutHighlights.map((hi: any, i: number) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-xl bg-background rounded-lg p-2 shadow-sm border border-border/50">{hi.emoji}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">{hi.title}</h4>
                    <p className="font-body text-xs text-muted-foreground mt-1">{hi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Outcomes Sidebar format */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">Program Outcomes</h3>
            <p className="font-heading text-sm text-primary font-medium mb-4">{program.outcomesSubtitle}</p>
            <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">{program.outcomesDesc}</p>
            <div className="space-y-6">
              {program.outcomesList.map((outcome: any, i: number) => (
                <div key={i} className="relative pl-4 border-l-2 border-primary/20">
                  <span className="absolute -left-3 top-0 text-3xl font-bold font-heading text-primary/10 tracking-tighter leading-none">{outcome.num}</span>
                  <h4 className="font-heading font-semibold text-sm mb-1">{outcome.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{outcome.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Curriculum & Deep Dive */}
        <div className="lg:col-span-8 p-6 md:p-12 bg-background">
          <h3 className="font-heading text-2xl font-bold mb-2">Curriculum</h3>
          <p className="font-heading text-md text-primary font-medium mb-4">{program.curriculumSubtitle}</p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl">{program.curriculumDesc}</p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 gap-y-10">
            {program.curriculumMonths.map((month: any, i: number) => (
              <div key={i} className="group flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl bg-muted rounded-xl p-2 shadow-sm flex-shrink-0 transition-transform group-hover:scale-110">{month.emoji}</span>
                  <h4 className="font-heading font-bold text-md text-foreground">{month.title}</h4>
                </div>
                <ul className="space-y-2.5 mb-4 flex-grow">
                  {month.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                {month.projectTitle && (
                  <div className="mt-auto bg-primary/5 border border-primary/10 rounded-xl p-4">
                    <h5 className="font-heading font-semibold text-xs uppercase tracking-wider text-primary mb-1">{month.projectTitle}</h5>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{month.projectDesc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Special element for AI month 3 deep dive */}
          {program.month3DeepDive && (
            <div className="mt-12 bg-secondary/5 border border-secondary/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-heading text-lg font-bold mb-6">{program.month3DeepDive.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {program.month3DeepDive.items.map((item: any, i: number) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Capstone & Tools Horizontal Layout */}
      <div className="relative z-10 grid lg:grid-cols-2 lg:divide-x divide-border/40">
        <div className="p-6 md:p-12 bg-background">
          <h3 className="font-heading text-2xl font-bold mb-2">{program.capstoneTitle}</h3>
          <p className="font-heading text-md text-primary font-medium mb-4">{program.capstoneSubtitle}</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{program.capstoneDesc}</p>
          
          <h4 className="font-heading font-semibold text-sm mb-4">Capstone Deliverables</h4>
          <ul className="space-y-3">
            {program.capstoneDeliverables.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="font-body text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 md:p-12 bg-muted/30">
          <h3 className="font-heading text-2xl font-bold mb-2">Tools & Technologies</h3>
          <p className="font-heading text-md text-primary font-medium mb-8">{program.toolsSubtitle}</p>
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
            {program.tools.map((tool: any, i: number) => (
              <div key={i}>
                <h4 className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">{tool.cat}</h4>
                <p className="font-body text-sm font-medium text-foreground leading-relaxed">{tool.list}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Element for Professional Skills */}
      <div className="relative z-10 p-6 md:p-8 bg-foreground/5 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">Every Saturday — Complementary Professional Skills</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {program.professionalSkills.map((skill: string, i: number) => (
            <span key={i} className="px-3 py-1.5 bg-background rounded-full text-xs font-medium border border-border/50 text-muted-foreground shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const { openModal } = useRequestCallback();
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block font-accent text-xl font-medium text-primary uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h1 className="font-heading text-[1.7rem] md:text-5xl lg:text-[3.2rem] leading-tight font-bold text-foreground mb-6">
              Job-Focused <span className="text-primary">Tech Programs</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Master in-demand skills with hands-on training, real projects, and 6-month guaranteed internships in Data Engineering and AI/ML.
            </p>
            <Button variant="cta" size="xl" onClick={openModal} className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              Request Callback
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs Redesign Section */}
      <section className="py-12 bg-background relative z-10 px-4 md:px-8">
        <ProgramBlock program={dataEngineeringProgram} index={0} />
        <ProgramBlock program={aiMlProgram} index={1} />
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

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary/10 to-accent/30 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-border/50">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career in tech.
            Our team is ready to guide you through the enrollment process.
          </p>
          <Button variant="cta" size="xl" onClick={openModal} className="shadow-md hover:shadow-lg transition-all">
            Request Callback
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Programs;
