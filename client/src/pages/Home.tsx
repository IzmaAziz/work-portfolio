import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Award, Briefcase, BookOpen, Code2, Database, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const metricsData = [
  { label: "Years of Experience", value: 2, max: 5 },
  { label: "Team Members Led", value: 5, max: 10 },
  { label: "AI Solutions Delivered", value: 4, max: 10 },
  { label: "Certifications", value: 5, max: 10 },
];

const projectsData = [
  {
    title: "ReAct Agent Workflow",
    description: "Event-driven AI agent implementing reasoning and action patterns with modular architecture using LlamaIndex workflows.",
    tech: ["LlamaIndex", "Python", "LLMs", "Agentic AI"],
    link: "https://github.com/IzmaAziz/ReAct-Agent-Workflow-Llama-Index",
  },
  {
    title: "RAG Chatbot",
    description: "Retrieval-augmented conversational AI grounding LLM responses in uploaded documents using hybrid retrieval and semantic reranking.",
    tech: ["RAG", "Python", "FastAPI", "ChromaDB", "LLMs"],
    link: "https://github.com/IzmaAziz/Building-Simple-and-Efficient-Chatbots-Demo",
  },
];

const awardsData = [
  { title: "DOT Awards (4x)", issuer: "Data Science Dojo", year: "2023-2025", description: "Quarterly recognition for Delivery Ownership and Trust" },
  { title: "Giant Leap Award", issuer: "Data Science Dojo", year: "2024", description: "Exceptional innovation in AI product development" },
  { title: "Bronze Medal", issuer: "NED University", year: "2023", description: "Ranked 3rd among 152 graduates in Computer Systems Engineering" },
  { title: "Runner-Up", issuer: "FAST DevDay", year: "2022", description: "Genome prediction hackathon competition" },
];

const certifications = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft" },
  { name: "Azure Administrator Associate", issuer: "Microsoft" },
  { name: "Azure Data Engineer Associate", issuer: "Microsoft" },
  { name: "Azure Fundamentals", issuer: "Microsoft" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl [font-family:Poppins] font-bold text-foreground leading-tight">
                  Izma Aziz
                </h1>
                <p className="text-xl text-muted-foreground mt-2">Senior Software Engineer — Generative AI & LLMs</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I lead AI feature development at Data Science Dojo, building complete AI systems from the ground up. My work spans infrastructure, deployment pipelines, and microservices architecture, with a focus on advanced AI implementations including agent-to-agent protocols, model context protocols, and autonomous agent systems.
              </p>
              <div className="flex gap-4 flex-wrap">
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
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {metricsData.map((metric, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}+</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              
              <div className="mt-6 space-y-6">
                {/* Leadership & Product */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" /> Leadership & Core AI Feature Development
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Lead core AI team driving all major AI feature developments for enterprise products, involved in every strategic decision from conception to deployment</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Designed and deployed multi-agent AI systems using A2A (Agent-to-Agent) protocols and MCPs (Model Context Protocol), enabling enterprise clients to automate complex decision-making workflows</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Architected deep agent systems and agentic RAG implementations with hybrid search capabilities, combining semantic and keyword-based retrieval for optimal relevance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Led a team of 5 engineers on AI product development, establishing code review practices, mentoring junior developers, and fostering technical excellence</span>
                    </li>
                  </ul>
                </div>

                {/* End-to-End AI System Integration */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" /> End-to-End AI System Integration
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Designed and implemented production RAG pipelines with hybrid retrieval (semantic + keyword search) and semantic reranking, deployed across multiple enterprise applications serving thousands of users</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Built microservices-based AI architecture using FastAPI, enabling modular, scalable AI components that integrate seamlessly with enterprise systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Engineered database schema modeling and REST API development using Django for data persistence and integration layers supporting complex AI workflows</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Implemented comprehensive CI/CD pipelines automating testing, validation, and deployment of AI models and microservices to production environments</span>
                    </li>
                  </ul>
                </div>

                {/* Infrastructure & DevOps */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" /> Infrastructure & DevOps
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Managed infrastructure-as-code and containerization strategies using Docker, ensuring reproducible and scalable AI system deployments</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Orchestrated cloud infrastructure on Microsoft Azure, optimizing costs and performance for AI workloads including model serving and batch processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Established monitoring, logging, and observability practices for production AI systems, ensuring reliability and rapid incident response</span>
                    </li>
                  </ul>
                </div>

                {/* Thought Leadership */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" /> Thought Leadership & Knowledge Sharing
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Authored 3 technical articles on LLM applications, agentic AI patterns, and production best practices, contributing to company thought leadership</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Delivered 2 webinars on multi-agent systems and agentic workflows, educating enterprise clients and the broader AI community</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>A2A Protocols</Badge>
                <Badge>MCPs</Badge>
                <Badge>Deep Agents</Badge>
                <Badge>Agentic RAG</Badge>
                <Badge>Hybrid Search</Badge>
                <Badge>FastAPI</Badge>
                <Badge>Django</Badge>
                <Badge>Docker</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Azure</Badge>
                <Badge>Database Design</Badge>
                <Badge>REST APIs</Badge>
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
        <div className="container mx-auto px-4">
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
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <div>
                        <p className="font-semibold text-foreground">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Agentic AI and Generative AI applications demonstrating core concepts and flows in AI development.</p>
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
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Code2 className="h-24 w-24 text-white opacity-80" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl [font-family:Poppins] font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2">Technical Skills</h2>
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
                  {["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LlamaIndex","OpenCV"].map((skill, i) => (
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
                  {["PostgreSQL", "ChromaDB", "FAISS", "Azure", "Database Design", "Vector Stores"].map((skill, i) => (
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
        <div className="container mx-auto px-4 text-center">
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
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2026 Izma Aziz. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-2">Senior Software Engineer • Generative AI & LLMs • Data Science Dojo</p>
        </div>
      </footer>
    </div>
  );
}
