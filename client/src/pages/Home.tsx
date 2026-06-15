import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Award, Briefcase, BookOpen, Code2, Rocket, Users, Bot, BadgeCheck, Video, Play, ScrollText, Target, Search, ShieldCheck, Sparkles, Activity, TrendingDown, Download, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
];

const resumeUrl = `${import.meta.env.BASE_URL}izma-aziz-resume.pdf`;

const metricsData = [
  {
    value: "4+",
    subtitle: "Years Experience",
    icon: Rocket,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    value: "7+",
    subtitle: "Engineers Led",
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  {
    value: "10+",
    subtitle: "Enterprise Clients",
    icon: Bot,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  { 
    value: "3rd", 
    subtitle: "of 152 graduates", 
    tag: "Bronze Medalist", 
    icon: Award,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    tagColor: "text-orange-500"
  },
];

const impactData = [
  { value: "80%", label: "Response accuracy", icon: Target },
  { value: "70%+", label: "Retrieval accuracy", icon: Search },
  { value: "60%", label: "Fewer hallucinations", icon: ShieldCheck },
  { value: "50%", label: "Better personalization", icon: Sparkles },
  { value: "90%", label: "System uptime", icon: Activity },
  { value: "40%", label: "Lower compute cost", icon: TrendingDown },
];

const experienceData = [
  {
    title: "Senior Software Engineer — Generative AI",
    org: "Data Science Dojo",
    dates: "Aug 2025 – Present",
    current: true,
    highlights: [
      "Lead a team of 7–8 engineers delivering agentic AI across 10+ enterprise clients",
      "Architect multi-agent systems (A2A, MCP) and agentic RAG with hybrid search & reranking",
      "Own microservices, CI/CD, and Azure infrastructure for production AI deployment",
    ],
    tags: ["Multi-Agent", "MCP", "Agentic RAG", "FastAPI", "Azure", "Docker"],
  },
  {
    title: "Data Scientist I & II",
    org: "Data Science Dojo",
    dates: "Dec 2023 – Aug 2025",
    current: false,
    highlights: [
      "Built production RAG systems and enterprise retrieval pipelines",
      "Implemented ReAct agents with self-critique and established RAGAS evaluation",
      "Reduced hallucinations by 60% and reached 80% client satisfaction",
    ],
    tags: ["RAG", "ReAct", "RAGAS", "LlamaIndex", "Python"],
  },
  {
    title: "Earlier Experience",
    org: "Internships · ConceptZI, Data Science Dojo, Muller & Phipps, VIRTUOSOFT",
    dates: "2021 – 2023",
    current: false,
    highlights: [
      "ML Intern, ConceptZI — ML & deep learning on structured datasets",
      "Data Science Intern & Trainee, Data Science Dojo — ML pipelines & Django",
      "IT Intern, Muller & Phipps — QA testing & Power BI reporting",
      "Web Development Intern, VIRTUOSOFT (NIC NED) — Django & REST APIs",
    ],
    tags: [],
  },
];

const projectsData = [
  {
    title: "Multi-Agent Deep Agent with Skills",
    description: "Planning-oriented deep agent with a custom skill framework using a progressive-disclosure strategy, enabling dynamic multi-agent coordination.",
    tech: ["LangChain", "Azure OpenAI", "Streamlit", "Multi-Agent"],
    github: "https://github.com/IzmaAziz/Multi_Agent_Deep_Agent_With_Skills_Demo",
    webinar: "https://datasciencedojo.com/tutorial/multi-agent-ai-langchain/",
    webinarTitle: "Scaling AI Beyond Single Agents: Multi-Agent Architectures with LangChain",
  },
  {
    title: "Event-Driven Agentic AI System",
    description: "Event-driven AI agent implementing reasoning and action patterns with modular architecture using LlamaIndex workflows.",
    tech: ["LlamaIndex", "Python", "LLMs", "Agentic AI"],
    github: "https://github.com/IzmaAziz/ReAct-Agent-Workflow-Llama-Index",
    webinar: "https://datasciencedojo.com/tutorial/agentic-ai-llamaindex-workflows/",
    webinarTitle: "Master Agentic AI: Deep Dive into Event-Driven LlamaIndex Workflows",
  },
  {
    title: "Intelligent Document Assistant",
    description: "Retrieval-augmented conversational AI grounding LLM responses in uploaded documents using hybrid retrieval and semantic reranking.",
    tech: ["RAG", "Python", "FastAPI", "ChromaDB", "LLMs"],
    github: "https://github.com/IzmaAziz/Building-Simple-and-Efficient-Chatbots-Demo",
    webinar: "https://datasciencedojo.com/tutorial/building-simple-and-efficient-chatbots-step-by-step/",
    webinarTitle: "Building Simple and Efficient Chatbots Step-by-Step",
  },
];

const awardsData = [
  { title: "🌟 Enabler Award", issuer: "Data Science Dojo", year: "2024", description: "Contribution to team capability, mentorship, and high-performance delivery" },
  { title: "🏆 DOT Awards (4x)", issuer: "Data Science Dojo", year: "2023-2025", description: "Quarterly recognition for Delivery Ownership and Trust" },
  { title: "🚀 Giant Leap Award", issuer: "Data Science Dojo", year: "2024", description: "Exceptional innovation in AI product development" },
  { title: "🥉 Bronze Medal", issuer: "NED University", year: "2023", description: "Ranked 3rd among 152 graduates in Computer Systems Engineering" },
  { title: "🥈 Runner-Up", issuer: "FAST-NUCES", year: "2022", description: "Developers Day 2022 Data Science Competition" },
];

const certifications = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/e47e1b6c31f7e9a3" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/fbb53d93f59f6f5f" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/d01aa37012f65658" },
  { name: "Azure Data Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/63ba4cecc60ccc89" },
  { name: "Azure Fundamentals", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/certification/azure-fundamentals" },
  { name: "Building with the Claude API", issuer: "Anthropic", link: "https://verify.skilljar.com/c/4knpgeeorjzc" },
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", link: "https://www.coursera.org/account/accomplishments/verify/W8YJ8S7WJ33K" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <div className="text-2xl [font-family:Poppins] font-bold text-primary shrink-0">IA</div>
          <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-medium transition ${activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="flex-1 space-y-4 md:space-y-5 text-center lg:text-left">
              <p className="text-primary font-semibold text-sm md:text-base">Senior Software Engineer — Generative AI & LLMs</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl [font-family:Poppins] font-bold text-foreground leading-tight">
                Izma Aziz
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I lead AI feature development at Data Science Dojo, building complete AI systems from the ground up. My work spans infrastructure, deployment pipelines, and microservices architecture, with a focus on advanced AI implementations including agent-to-agent protocols, model context protocols, and autonomous agent systems.
              </p>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start pt-2">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#projects">
                    <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://linkedin.com/in/izma-aziz-31a922224" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:izma.aziz02@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Metrics Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 w-full lg:w-auto"
            >
              {metricsData.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-slate-100 min-w-0 lg:min-w-[160px]"
                  >
                    <div className={`w-11 h-11 mb-4 rounded-xl ${metric.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${metric.iconColor}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{metric.subtitle}</p>
                    {metric.tag && (
                      <p className={`text-sm font-semibold mt-2 ${metric.tagColor}`}>{metric.tag}</p>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Career</p>
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <Briefcase className="text-primary" /> Experience
            </h2>
            <p className="text-muted-foreground">A track record of measurable impact across the AI delivery lifecycle</p>
          </motion.div>

          {/* Career impact band */}
          <motion.div
            className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {impactData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} variants={itemVariants} className="bg-white border border-slate-200 shadow-sm rounded-lg p-3 text-center">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-1.5" strokeWidth={2} />
                  <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" aria-hidden="true" />

            <div className="space-y-8">
              {experienceData.map((exp, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative pl-10">
                  {/* marker */}
                  <span
                    className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-primary ${exp.current ? "bg-primary" : "bg-white"}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg [font-family:Poppins] font-bold text-foreground">{exp.title}</h3>
                    {exp.current && (
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Current</Badge>
                    )}
                  </div>
                  <p className="text-sm text-primary font-semibold mt-0.5">{exp.org} • {exp.dates}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-px">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Background</p>
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <BookOpen className="text-primary" /> Education
            </h2>
            <p className="text-muted-foreground">Academic background and certifications</p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 md:p-7 border-l-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground">BE Computer Systems</h3>
                    <p className="text-primary font-semibold">NED University of Engineering & Technology</p>
                    <p className="text-muted-foreground text-sm mt-1">2019 – 2023 • Karachi, Pakistan</p>
                    <p className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1">
                      <Award className="h-4 w-4" /> Bronze Medalist — Ranked 3rd of 152 graduates
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-bold text-primary">3.96</div>
                    <p className="text-xs text-muted-foreground">CGPA / 4.0</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Database Systems", "Distributed Systems", "Object-Oriented Programming"].map((course, i) => (
                      <Badge key={i} variant="secondary">{course}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <ScrollText className="h-4 w-4 text-primary" /> Thesis — Smart SQL Query Generation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fine-tuned a T5 transformer for natural-language-to-SQL with synonym-based data augmentation and schema-aware positional embeddings, reaching 80% exact-match precision on the Spider benchmark — a 39% improvement over baseline.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["T5 Transformer", "Transfer Learning", "NLP", "Semantic Parsing"].map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 md:p-7 border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground mb-4">Professional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => {
                    const Wrapper = cert.link ? "a" : "div";
                    return (
                      <Wrapper
                        key={idx}
                        {...(cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-start gap-3 group hover:bg-slate-50 p-2 -m-2 rounded-lg transition-colors"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            {cert.name}
                            {cert.link && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                          </p>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Portfolio</p>
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <Code2 className="text-primary" /> Projects & Webinars
            </h2>
            <p className="text-muted-foreground">Agentic AI and Generative AI applications with accompanying educational webinars.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsData.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col border-l-4 border-primary">
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title with icon */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Code2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg [font-family:Poppins] font-bold text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                      </div>
                    </div>
                    
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>

                    {/* Webinar info */}
                    {project.webinar && (
                      <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-5">
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                          <Video className="h-4 w-4" /> Featured Webinar
                        </div>
                        <p className="text-sm text-foreground">{project.webinarTitle}</p>
                      </div>
                    )}
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <Button asChild variant="default" className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      )}
                      {project.webinar && (
                        <Button asChild variant="outline" className="flex-1">
                          <a href={project.webinar} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 h-4 w-4" /> Webinar
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Recognition</p>
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <Award className="text-primary" /> Awards & Recognition
            </h2>
            <p className="text-muted-foreground">Achievements and professional recognition</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awardsData.map((award, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg [font-family:Poppins] font-bold text-foreground">{award.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{award.issuer}</p>
                  <p className="text-sm text-foreground">{award.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Expertise</p>
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <Code2 className="text-primary" /> Technical Skills
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">AI & Machine Learning</h3>
                <div className="space-y-2">
                  {["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "LlamaIndex", "OpenCV"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Backend & Architecture</h3>
                <div className="space-y-2">
                  {["FastAPI", "Django", "REST APIs", "Microservices", "Event-Driven Systems", "Async Processing", "Docker", "CI/CD"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Infrastructure & Data</h3>
                <div className="space-y-2">
                  {["SQL", "PostgreSQL", "Cosmos DB", "ChromaDB", "FAISS", "Embeddings", "ETL Pipelines", "Database Design", "Vector Stores"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Advanced Gen-AI Concepts</h3>
                <div className="space-y-2">
                  {["A2A Protocols", "MCPs", "Deep Agents", "ReAct Agents", "Agentic RAG", "Context Engineering", "Hybrid Search", "Semantic Reranking", "Human-in-the-Loop"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  {["Microsoft Azure", "Azure OpenAI", "Azure AI Search", "GitHub Actions", "Azure DevOps", "Infrastructure as Code", "Monitoring & Logging", "Git"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Specialized Domains</h3>
                <div className="space-y-2">
                  {["NLP", "Text-to-SQL", "Transfer Learning", "LLM Observability (Langfuse)", "RAG Evaluation (RAGAS)", "Production AI Systems", "System Design"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Interested in AI systems, agentic architectures, or production-grade AI infrastructure? Let's discuss opportunities and collaboration.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="bg-white text-primary hover:bg-slate-100">
                <a href="mailto:izma.aziz02@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <a href="https://linkedin.com/in/izma-aziz-31a922224" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <a href="https://github.com/IzmaAziz" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="[font-family:Poppins] font-bold text-slate-200">Izma Aziz</p>
          <p className="text-slate-500 text-sm">© 2026 Izma Aziz • Senior Software Engineer, Generative AI &amp; LLMs</p>
        </div>
      </footer>
    </div>
  );
}
