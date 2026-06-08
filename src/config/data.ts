import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaPython } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiGo,
  SiLangchain,
  SiTailwindcss,
  SiNextdotjs,
  SiTerraform,
  SiApachekafka,
  SiDatadog,
  SiPrometheus,
  SiJest,
  SiCypress,
  SiOpenai,
  SiPrisma,
  SiGooglecloud,
  SiHtml5,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/hernandezcruzhecto",
  },
  {
    id: 2,
    priority: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/héctor-hernández-cruz",
  },
];

export const personalInfo = {
  name: "Héctor Hernández Cruz",
  title: "Senior Full-Stack Engineer · TypeScript · React · Go · Node.js",
  avatar: "/Portfolio_Name.png",
  email: "hernandezcruzhecto@gmail.com",
  phone: "+1(323)540-5891",
  location: "Playa del Carmen, Mexico",
  description:
    "I build production AI systems and full-stack applications. React/TypeScript on the frontend, Node.js and Go on the backend, AWS for infrastructure, and LangChain for the RAG pipelines I work with in clinical AI. 9+ years shipping in globally distributed, English-first teams.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Curai Health",
    position: "Senior Full-Stack Engineer",
    period: "Jul 2024 – Present",
    shortDesc:
      "Building clinical AI features end to end in a HIPAA-compliant production environment. RAG pipelines, structured LLM outputs, and the Go and Node.js services that power them.",
    bulletPoints: [
      "Build RAG pipelines with LangChain and PostgreSQL vector search (pgvector) for clinical AI",
      "Develop Go microservices for real-time clinical data ingestion via gRPC",
      "Optimized React/TypeScript/GraphQL frontends and cut average API response time by 42% with query optimization and Redis caching",
      "Apply prompt engineering and structured output validation in HIPAA-compliant production environments",
      "Integrate AWS Bedrock and GCP Vertex AI for model serving across clinical AI services",
      "Deploy and maintain services on AWS with Kubernetes and GitHub Actions CI/CD",
    ],
  },
  {
    company: "Ashby",
    position: "Software Engineer",
    period: "Jun 2022 – Jun 2024",
    shortDesc:
      "Shipped React/TypeScript/GraphQL features and optimized Node.js APIs for a recruiting platform used by high-growth companies.",
    bulletPoints: [
      "Shipped React, TypeScript, and GraphQL frontend features across multiple product areas",
      "Built and optimized Node.js APIs, improving data-fetching and reducing response time by 42%",
      "Worked with distributed systems handling large data volumes via PostgreSQL and Redis caching",
      "Contributed to Go backend services for high-performance concurrent workloads",
      "Deployed services on AWS with Kubernetes and GitHub Actions CI/CD",
    ],
  },
  {
    company: "Bazaarvoice",
    position: "Software Engineer",
    period: "Jul 2019 – Apr 2022",
    shortDesc:
      "Built and maintained e-commerce review and ratings features, optimized data pipelines, and migrated a large JavaScript frontend to TypeScript.",
    bulletPoints: [
      "Developed React and JavaScript storefront components for e-commerce ratings and review features",
      "Built Node.js REST APIs integrating third-party review aggregation services, reducing data sync latency by 11%",
      "Optimized PostgreSQL queries for product analytics and cut report generation from 8s to 1.2s",
      "Migrated frontend modules from JavaScript to TypeScript, improving reliability and reducing runtime errors",
      "Contributed to AWS infrastructure (EC2, S3, RDS) and handled production incidents on-call",
    ],
  },
  {
    company: "Self-Employed",
    position: "Freelance Software Engineer",
    period: "Jan 2017 – May 2019",
    shortDesc:
      "Delivered full-stack web applications for small businesses and early-stage startups across the US.",
    bulletPoints: [
      "Built e-commerce storefronts, marketing sites, and REST APIs for retail and hospitality clients",
      "Collaborated directly with non-technical stakeholders to define requirements and iterate on features",
      "Worked across the full stack with JavaScript, React, and Node.js",
    ],
  },
];

export const techStack = [
  // Row 1 — Core languages
  { name: "TypeScript",   icon: SiTypescript,   color: "text-blue-500",   type: "Frontend"  },
  { name: "React",        icon: FaReact,         color: "text-sky-400",    type: "Frontend"  },
  { name: "Node.js",      icon: FaNodeJs,        color: "text-green-500",  type: "Backend"   },
  { name: "Go",           icon: SiGo,            color: "text-sky-400",    type: "Backend"   },
  { name: "Python",       icon: FaPython,        color: "text-yellow-300", type: "Backend"   },

  // Row 2 — APIs & frameworks
  { name: "GraphQL",      icon: SiGraphql,       color: "text-pink-400",   type: "Frontend"  },
  { name: "REST APIs",    icon: SiNextdotjs,     color: "text-white",      type: "Backend"   },
  { name: "gRPC",         icon: SiGo,            color: "text-blue-300",   type: "Backend"   },
  { name: "Next.js",      icon: SiNextdotjs,     color: "text-white",      type: "Frontend"  },
  { name: "Prisma",       icon: SiPrisma,        color: "text-teal-400",   type: "Backend"   },

  // Row 3 — Databases
  { name: "PostgreSQL",   icon: SiPostgresql,    color: "text-blue-400",   type: "Databases" },
  { name: "Redis",        icon: SiRedis,         color: "text-red-500",    type: "Databases" },
  { name: "MySQL",        icon: SiMysql,         color: "text-orange-400", type: "Databases" },
  { name: "Kafka",        icon: SiApachekafka,   color: "text-white",      type: "Databases" },
  { name: "LangChain",    icon: SiLangchain,     color: "text-green-400",  type: "AI/LLM"   },

  // Row 4 — AI/LLM & Cloud
  { name: "OpenAI API",   icon: SiOpenai,        color: "text-white",      type: "AI/LLM"   },
  { name: "AWS Bedrock",  icon: FaAws,           color: "text-[#ff9900]",  type: "AI/LLM"   },
  { name: "GCP Vertex",   icon: SiGooglecloud,   color: "text-blue-400",   type: "AI/LLM"   },
  { name: "AWS",          icon: FaAws,           color: "text-[#ff9900]",  type: "Cloud"    },
  { name: "Docker",       icon: FaDocker,        color: "text-blue-400",   type: "Cloud"    },

  // Row 5 — Infra & Frontend extras
  { name: "Kubernetes",   icon: SiKubernetes,    color: "text-blue-500",   type: "Cloud"    },
  { name: "Terraform",    icon: SiTerraform,     color: "text-purple-400", type: "Cloud"    },
  { name: "GitHub",       icon: FaGitAlt,        color: "text-white",      type: "Cloud"    },
  { name: "Tailwind",     icon: SiTailwindcss,   color: "text-cyan-400",   type: "Frontend" },
  { name: "JavaScript",   icon: SiJavascript,    color: "text-yellow-400", type: "Frontend" },

  // Row 6 — Monitoring & Testing
  { name: "Datadog",      icon: SiDatadog,       color: "text-purple-400", type: "Testing"  },
  { name: "Prometheus",   icon: SiPrometheus,    color: "text-orange-500", type: "Testing"  },
  { name: "Jest",         icon: SiJest,          color: "text-red-400",    type: "Testing"  },
  { name: "Cypress",      icon: SiCypress,       color: "text-green-400",  type: "Testing"  },
  { name: "HTML/CSS",     icon: SiHtml5,         color: "text-orange-400", type: "Frontend" },
];

export const projects = [
  {
    title: "ARIA — AI Interview Assistant",
    description:
      "A native Windows SaaS platform that listens to both sides of a live interview and surfaces personalized AI suggestions in under one second. Built on premium WASAPI audio capture, a private desktop overlay invisible to screen share, and state-of-the-art LLMs grounded in the user's resume and job description. Ships STAR-method behavioral coaching, live coding analysis, and per-session transcription. Supports Free, Pro, and Elite tiers with multi-user simultaneous access and crypto payments.",
    image: "/images/projects/Stealth.png",
    liveUrl: "https://ariainterview.com",
    techStack: techStack.filter((item) =>
      ["TypeScript", "React", "Node.js", "OpenAI API", "AWS"].includes(item.name)
    ),
  },
  {
    title: "rag-pipeline",
    description:
      "A production-oriented RAG pipeline built around patterns from my clinical AI work. Hybrid retrieval combines dense vectors and keyword search fused via Reciprocal Rank Fusion, with cross-encoder reranking and graceful fallback. Answers are grounded with enforced citations. An evaluation harness tracks hit rate, MRR, and faithfulness so changes are measurable. Redis caches embeddings so re-ingestion is nearly free.",
    image: "/images/projects/rag-pipeline.png",
    liveUrl: "https://github.com/hernandezcruzhecto/rag-pipeline",
    techStack: techStack.filter((item) =>
      ["Python", "LangChain", "PostgreSQL", "Redis"].includes(item.name)
    ),
  },
  {
    title: "graphql-api",
    description:
      "A production-shaped GraphQL API focused on the two things that actually move latency: N+1 elimination with DataLoader and Redis response caching with tag-based invalidation. Comes with a reproducible benchmark that counts DB round-trips before and after batching. 101 queries collapse to 2. Per-request loader isolation keeps data from leaking across users.",
    image: "/images/projects/graphql-api.png",
    liveUrl: "https://github.com/hernandezcruzhecto/graphql-api",
    techStack: techStack.filter((item) =>
      ["TypeScript", "GraphQL", "PostgreSQL", "Redis"].includes(item.name)
    ),
  },
  {
    title: "go-microservice",
    description:
      "A gRPC microservice for real-time clinical data ingestion, built around patterns I use in production. Bounded worker pool with backpressure, context propagation that respects client cancellation, and graceful shutdown that drains in-flight work before exiting. Domain logic is isolated from the transport layer for unit-testable business rules. Concurrency verified under the Go race detector.",
    image: "/images/projects/go-microservice.png",
    liveUrl: "https://github.com/hernandezcruzhecto/go-microservice",
    techStack: techStack.filter((item) =>
      ["Go"].includes(item.name)
    ),
  },
  {
    title: "vitals-dashboard",
    description:
      "A real-time clinical vitals monitoring dashboard, the frontend to the Go ingestion service above. Memoized rendering under per-second updates so unchanged patient cards skip re-rendering entirely. SVG sparklines are hand-rolled with no charting dependency. The color palette is calm and dark, with vivid color reserved strictly for alerts. Deployed and live on Vercel.",
    image: "/images/projects/vitals-dashboard.png",
    liveUrl: "https://vitals-dashboard-lilac.vercel.app",
    techStack: techStack.filter((item) =>
      ["React", "TypeScript"].includes(item.name)
    ),
  },
];

export const setupSpecs = [
  {
    title: "Remote-first workflow",
    subTitle: "Full async across US timezones from Playa del Carmen, Mexico.",
    icon: FiMonitor,
  },
  {
    title: "Clinical AI stack",
    subTitle: "LangChain, pgvector, AWS Bedrock, and GCP Vertex AI for production LLM systems.",
    icon: FiCpu,
  },
  {
    title: "Full-stack tooling",
    subTitle: "TypeScript, React, Go, Node.js, PostgreSQL, Redis, Kubernetes, GitHub Actions.",
    icon: HiOutlineDesktopComputer,
  },
  {
    title: "Open to remote roles",
    subTitle: "9 years shipping in globally distributed English-first teams. Always learning.",
    icon: FiHeadphones,
  },
];

export const certifications = [] as {
  title: string;
  image: string;
  url: string;
}[];

export const testimonials = [] as {
  name: string;
  company: string;
  linkedIn: string;
  position: string;
  avatar: string;
  testimonial: string;
}[];
