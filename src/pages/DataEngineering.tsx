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
  Users
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

const DataEngineering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Dark + Gradient Premium Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0A1628] text-white">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20 md:opacity-50 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A8D8EA]/20 rounded-full blur-[100px] opacity-20 md:opacity-40 transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[#0A1628] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeIn} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Data<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A8D8EA]">Engineering</span><br />
              Career Program
            </motion.h1>

            <motion.p variants={fadeIn} className="font-body text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Build the modern data platforms, pipelines, and analytics infrastructure that power today's technology companies — from e-commerce to fintech and beyond.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10">
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#A8D8EA]" />
                6 Months · 24 Weeks
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2 text-[#A8D8EA]" />
                Classroom / Hybrid
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Hammer className="w-4 h-4 mr-2 text-[#A8D8EA]" />
                Hands-On Projects
              </div>
              <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold flex items-center">
                <Target className="w-4 h-4 mr-2 text-[#A8D8EA]" />
                Career Readiness
              </div>
            </motion.div>

            <motion.span variants={fadeIn} className="inline-block font-accent text-sm md:text-base font-semibold tracking-widest text-[#A8D8EA] uppercase opacity-90 mt-4 border-t border-white/10 pt-6 w-full max-w-lg">
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
            <span className="inline-block font-accent text-lg md:text-xl font-bold tracking-widest text-[#34495E] uppercase mb-4 relative pb-2">
              About This Program
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#A8D8EA] rounded-full" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              From Raw Data to Production Pipelines
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Vidyavya Data Engineering Career Program is a 6-month intensive designed around how data engineers actually work in production environments. Every week combines real engineering concepts with hands-on projects that mirror the systems running at leading technology companies. You'll graduate with a portfolio, technical depth, and interview-ready confidence.
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
              { icon: Settings, title: "Real Engineering Practices", desc: "Learn how data engineers work in production at scale — not just theory.", bg: "bg-slate-50 border-slate-100" },
              { icon: Hammer, title: "Hands-On Projects", desc: "Build pipelines, warehouses, and dashboards with industry-standard tools.", bg: "bg-[#A8D8EA]/5 border-[#A8D8EA]/20" },
              { icon: Telescope, title: "Production Thinking", desc: "Design systems with resilience, observability, and scalability from day one.", bg: "bg-slate-50 border-slate-100" },
              { icon: Target, title: "Career Readiness", desc: "Graduate with a portfolio, technical depth, and interview confidence.", bg: "bg-[#A8D8EA]/5 border-[#A8D8EA]/20" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-[#34495E] shadow-sm transform group-hover:scale-110 group-hover:bg-[#34495E] group-hover:text-white transition-all duration-300">
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
          subtitle="Each month builds on the last - starting with engineering foundations and culminating in a production-grade capstone that demonstrates full-stack data platform skills."
        />

        <div className="max-w-5xl mx-auto space-y-6 mt-16 md:mt-24">
          {[
            {
              month: "Month 1",
              title: "Engineering Foundations",
              topics: [
                "Intro to Data Engineering - roles, data lifecycles & architecture",
                "Linux & Shell Scripting — file systems, bash, cron & automation",
                "Git & GitHub — version control, branching & pull requests",
                "Python for data ingestion & API interaction",
                "SQL — queries, aggregations, window functions & performance tuning"
              ],
              project: "Month 1 Project\nBuild a data ingestion script that pulls from public APIs and design SQL queries to analyze large transactional datasets."
            },
            {
              month: "Month 2",
              title: "Data Modeling & Pipelines",
              topics: [
                "Data normalization & dimensional modeling",
                "Star schema vs. snowflake schema design",
                "ETL / ELT — batch processing & incremental loads",
                "Pipeline idempotency, retry strategies & error handling",
                "Data quality, validation & anomaly detection",
                "OLTP vs. OLAP — building a mini data warehouse"
              ],
              project: "Month 2 Project\nBuild a complete end-to-end ETL pipeline from raw source data to a structured analytical layer."
            },
            {
              month: "Month 3",
              title: "Distributed Data Systems",
              topics: [
                "Distributed computing — cluster computing & parallel processing",
                "Apache Spark — RDDs, DataFrames & PySpark transformations",
                "Data partitioning & shuffle operations",
                "Optimizing distributed data processing jobs",
                "Apache Kafka — event streaming, producers & consumers",
                "Real-time data pipeline design"
              ]
            },
            {
              month: "Month 4",
              title: "Cloud & Modern Data Stack",
              topics: [
                "AWS & GCP — compute, storage & networking fundamentals",
                "Cloud storage — S3, GCS & data lake architecture",
                "Lifecycle management for petabyte-scale datasets",
                "Apache Airflow — DAGs, scheduling & monitoring pipelines",
                "Analytics Engineering with dbt — tested transformation layers"
              ]
            },
            {
              month: "Month 5",
              title: "Analytics & Business Data",
              topics: [
                "Business metrics — customer analytics & financial reporting KPIs",
                "BI & Dashboard design using Power BI & Tableau concepts",
                "Visual storytelling for non-technical stakeholders",
                "Deep dive into fact tables, dimension tables & data marts",
                "Enterprise reporting structures at scale"
              ]
            },
            {
              month: "Month 6",
              title: "System Design & Production",
              topics: [
                "Data platform architecture — lakes, batch & streaming patterns",
                "Security & compliance — GDPR, CCPA, access control",
                "Data governance frameworks",
                "Monitoring & observability — logging pipelines & incident management",
                "Production runbooks & structured incident response"
              ]
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="bg-[#34495E] text-white p-8 md:p-10 md:w-1/3 shrink-0 flex flex-col justify-center relative overflow-hidden">
                <span className="font-accent text-sm font-semibold tracking-widest uppercase text-[#A8D8EA] mb-3 relative z-10">{item.month}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold leading-snug relative z-10">{item.title}</h3>

                {/* Abstract shape */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-[20px]" />
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
                    <span className="block font-heading font-bold text-sm uppercase tracking-widest text-[#34495E] mb-2">{item.project.split('\n')[0]}</span>
                    <p className="font-body text-sm font-medium text-foreground/80 leading-relaxed">{item.project.split('\n')[1]}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Capstone & Deliverables */}
      <Section className="bg-gradient-to-br from-[#0A1628] to-[#1a2d42] text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block font-accent text-sm font-semibold tracking-widest text-[#A8D8EA] uppercase mb-4">
              Final Capstone Project
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Build a Complete Data Platform
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-body text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Students design and build a production-grade data platform — demonstrating mastery of the full data engineering stack. This becomes your most powerful portfolio piece when entering the job market.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-8 text-center text-white/90 uppercase tracking-widest border-b border-white/10 pb-4">Capstone Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "Ingestion pipelines from multiple source systems",
                "Distributed processing with Apache Spark",
                "Cloud deployment on AWS or GCP",
                "A live, interactive analytics dashboard",
                "Documented architecture with production observability"
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
            { icon: Code2, title: "Languages & Scripting", p: "Python SQL Bash / Shell PySpark", bg: "bg-slate-50 border-slate-100" },
            { icon: Database, title: "Data Processing", p: "Apache Spark Apache Kafka ETL / ELT dbt", bg: "bg-[#A8D8EA]/5 border-[#A8D8EA]/20" },
            { icon: Cloud, title: "Cloud Platforms", p: "AWS (S3, EC2) Google Cloud (GCS) Data Lakes", bg: "bg-slate-50 border-slate-100" },
            { icon: Terminal, title: "Orchestration & Workflow", p: "Apache Airflow DAGs Cron Jobs", bg: "bg-[#A8D8EA]/5 border-[#A8D8EA]/20" },
            { icon: BarChart, title: "Analytics & Visualization", p: "Power BI Tableau Data Warehousing Dimensional Modeling", bg: "bg-slate-50 border-slate-100" },
            { icon: GitBranch, title: "Engineering Practices", p: "Git / GitHub Data Quality Testing Monitoring & Observability", bg: "bg-[#A8D8EA]/5 border-[#A8D8EA]/20" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className={`group flex flex-col p-6 md:px-7 md:py-8 ${item.bg} rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(255,87,87,0.12)] hover:shadow-[0_20px_40px_rgba(255,87,87,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-[#34495E] shadow-sm transform group-hover:scale-110 group-hover:bg-[#34495E] group-hover:text-white transition-all duration-300">
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
          subtitle="Graduates leave with demonstrable engineering skills — not just theoretical knowledge, but deployed, production-grade systems they built themselves."
        />

        <div className="max-w-6xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 gap-10 lg:gap-16">
          {[
            { n: "01", t: "Design Data Pipelines", d: "Architect and build robust ETL/ELT pipelines that move and transform data reliably at scale — from ingestion to analytical layers." },
            { n: "02", t: "Operate Distributed Systems", d: "Work confidently with Apache Spark and Kafka to process large-scale datasets and build real-time data streaming pipelines." },
            { n: "03", t: "Deploy to Cloud", d: "Package and ship data platforms to AWS and Google Cloud using modern cloud-native architecture and DevOps practices." },
            { n: "04", t: "Work in Real Teams", d: "Collaborate using Git, communicate technical decisions clearly, and contribute effectively in professional engineering environments." }
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
      <Section className="bg-[#34495E] text-white overflow-hidden relative border-t-8 border-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:w-1/2">
            <span className="inline-block font-accent text-sm font-semibold tracking-widest text-[#A8D8EA] bg-[#A8D8EA]/10 px-4 py-2 rounded-full uppercase mb-6">
              Every Saturday
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Complementary Professional Skills
            </h2>
            <p className="font-body text-xl text-slate-300 leading-relaxed mb-8">
              Technical ability gets you interviews. Professional readiness gets you hired. Every Saturday throughout the program, students participate in career development sessions.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:w-1/2 w-full relative">
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
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 text-[#A8D8EA] group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
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

export default DataEngineering;
