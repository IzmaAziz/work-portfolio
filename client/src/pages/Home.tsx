import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Award, Briefcase, BookOpen, Code2, Database, GitBranch, Rocket, Users, Bot, BadgeCheck, Video, Play } from "lucide-react";
import { motion } from "framer-motion";

const metricsData = [
  { 
    value: "2+", 
    subtitle: "Years Experience", 
    icon: Rocket,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  { 
    value: "5+", 
    subtitle: "Team Members Led", 
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  { 
    value: "4+", 
    subtitle: "AI Solutions Delivered", 
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

const projectsData = [
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
  { title: "🏆 DOT Awards (4x)", issuer: "Data Science Dojo", year: "2023-2025", description: "Quarterly recognition for Delivery Ownership and Trust" },
  { title: "🚀 Giant Leap Award", issuer: "Data Science Dojo", year: "2024", description: "Exceptional innovation in AI product development" },
  { title: "🥉 Bronze Medal", issuer: "NED University", year: "2023", description: "Ranked 3rd among 152 graduates in Computer Systems Engineering" },
  { title: "🥈 Runner-Up", issuer: "FAST DevDay", year: "2022", description: "Genome prediction hackathon competition" },
];

const certifications = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/e47e1b6c31f7e9a3" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/fbb53d93f59f6f5f" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/d01aa37012f65658" },
  { name: "Azure Data Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/63ba4cecc60ccc89" },
  { name: "Azure Fundamentals", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/izmaaziz-5765/credentials/certification/azure-fundamentals" },
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
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl [font-family:Poppins] font-bold text-primary">IA</div>
          <div className="flex gap-6">
            <a href="#experience" className="text-sm font-medium hover:text-primary transition">Experience</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition">Projects</a>
            <a href="#awards" className="text-sm font-medium hover:text-primary transition">Awards</a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition">Education</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-12 md:py-20">
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
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start pt-2">
                <Button asChild className="bg-primary hover:bg-primary/90">
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
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-slate-100 min-w-[160px]"
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
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <Briefcase className="text-primary" /> Experience
            </h2>
            <p className="text-muted-foreground">Core AI team lead driving enterprise AI feature development</p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground">Senior Software Engineer — Generative AI</h3>
              <p className="text-accent font-semibold">Data Science Dojo • Sep 2023 – Present</p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Leadership & Product */}
                <div className="bg-slate-50 rounded-lg p-5">
                  <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" /> Leadership
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Lead core AI team of 5 engineers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Drive all AI feature development decisions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Establish code review & mentorship practices</span>
                    </li>
                  </ul>
                </div>

                {/* AI Systems */}
                <div className="bg-slate-50 rounded-lg p-5">
                  <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" /> AI Systems
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-agent systems with A2A & MCP protocols</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Agentic RAG with hybrid search & reranking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Production RAG pipelines serving thousands</span>
                    </li>
                  </ul>
                </div>

                {/* Architecture */}
                <div className="bg-slate-50 rounded-lg p-5">
                  <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" /> Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Microservices with FastAPI & Django</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Database schema design & REST APIs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>CI/CD pipelines for AI model deployment</span>
                    </li>
                  </ul>
                </div>

                {/* Infrastructure */}
                <div className="bg-slate-50 rounded-lg p-5">
                  <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-primary" /> Infrastructure
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Docker containerization & IaC</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Azure cloud infrastructure optimization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Monitoring, logging & observability</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  <Badge>A2A Protocols</Badge>
                  <Badge>MCPs</Badge>
                  <Badge>Agentic RAG</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>Django</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Azure</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-l-4 border-slate-300 pl-6 py-4">
              <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground">Undergraduate Research & Thesis</h3>
              <p className="text-accent font-semibold">NED University • 2022 – 2023</p>
              <p className="mt-2 text-muted-foreground">
                Developed a fine-tuned T5 transformer model for translating natural language questions to executable SQL queries. Introduced novel synonym-based data augmentation strategy and schema-aware positional embeddings, achieving 80% exact-match precision on the Spider benchmark—a 39% relative improvement over baseline.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>T5 Transformer</Badge>
                <Badge>Transfer Learning</Badge>
                <Badge>NLP</Badge>
                <Badge>Semantic Parsing</Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <BookOpen className="text-primary" /> Education
            </h2>
            <p className="text-muted-foreground">Academic background and certifications</p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-l-4 border-primary">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground">BE Computer Systems</h3>
                    <p className="text-accent font-semibold">NED University of Engineering & Technology</p>
                    <p className="text-muted-foreground text-sm mt-1">2019 – 2023 • Karachi, Pakistan</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">3.96</div>
                    <p className="text-xs text-muted-foreground">CGPA / 4.0</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Badge className="mb-3">🥉 Bronze Medalist - Ranked 3rd among 152 graduates</Badge>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Database Systems", "Distributed Systems", "Object-Oriented Programming"].map((course, i) => (
                      <Badge key={i} variant="secondary">{course}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h3 className="text-2xl [font-family:Poppins] font-bold text-foreground mb-4">Professional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <a 
                      key={idx} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group hover:bg-slate-50 p-2 -m-2 rounded-lg transition-colors"
                    >
                      <span className="text-accent mt-1">✓</span>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                          {cert.name}
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
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
                <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col border border-slate-200 shadow-sm bg-white">
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
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-5">
                        <div className="flex items-center gap-2 text-violet-700 font-semibold text-sm mb-1">
                          <Video className="h-4 w-4" /> Featured Webinar
                        </div>
                        <p className="text-sm text-violet-900">{project.webinarTitle}</p>
                      </div>
                    )}
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button asChild variant="default" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
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
      <section id="awards" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
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
                <Card className="p-6 border-l-4 border-accent hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                    <span className="text-sm text-accent font-semibold">{award.year}</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
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
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">AI & Machine Learning</h3>
                <div className="space-y-2">
                  {["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LlamaIndex", "OpenCV"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Backend & Architecture</h3>
                <div className="space-y-2">
                  {["FastAPI", "Django", "REST APIs", "Microservices", "Docker", "CI/CD"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Infrastructure & Data</h3>
                <div className="space-y-2">
                  {["SQL", "PostgreSQL", "ChromaDB", "FAISS", "Azure", "Database Design", "Vector Stores"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Advanced Gen-AI Concepts</h3>
                <div className="space-y-2">
                  {["A2A Protocols", "MCPs", "Deep Agents", "Agentic RAG", "Hybrid Search", "Semantic Reranking"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  {["Microsoft Azure", "Infrastructure as Code", "Monitoring & Logging", "Git"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">Specialized Domains</h3>
                <div className="space-y-2">
                  {["NLP", "Transfer Learning", "Production AI Systems", "System Design"].map((skill, i) => (
                    <p key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
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
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90">Interested in AI systems, agentic architectures, or production-grade AI infrastructure? Let's discuss opportunities and collaboration.</p>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="text-slate-400">© 2026 Izma Aziz. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-2">Senior Software Engineer • Generative AI & LLMs • Data Science Dojo</p>
        </div>
      </footer>
    </div>
  );
}
