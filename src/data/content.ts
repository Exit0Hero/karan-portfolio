export const SITE = {
  name: "Karan Sasane",
  title: "Karan Sasane — AI/ML Engineer • Developer • Builder",
  description:
    "Building intelligent systems and meaningful digital experiences. AI/ML Engineer, developer, and systems thinker.",
  url: "https://karansasane.dev",
  github: "https://github.com/Exit0Hero",
  email: "karan@example.com",
  tagline: "AI/ML Engineer • Developer • Builder",
  statement: "Building intelligent systems and meaningful digital experiences.",
  cta: "Let's build something worth remembering.",
  signature: "Built with curiosity + code.",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export type ProjectCategory =
  | "AI_OPTIMIZATION"
  | "SYSTEMS"
  | "DATA_ML"
  | "WEB_PLATFORMS";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  color: string;
  stack: string[];
  problem: string;
  idea: string;
  solution: string;
  architecture: { component: string; description: string }[];
  workflow: string[];
  challenges: string[];
  results: string;
  lessons: string[];
  nextSteps: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "schedulai",
    title: "SchedulAI",
    tagline: "Intelligent timetable scheduling and optimization.",
    category: "AI_OPTIMIZATION",
    color: "#00f2fe",
    stack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
    problem:
      "Manual scheduling causes significant productivity loss in teams. Existing tools lack intelligent conflict resolution and cannot adapt to changing team dynamics, resulting in suboptimal time allocation.",
    idea: "Build an ML-powered scheduling engine that learns from historical patterns, predicts optimal time slots, and automatically resolves multi-party conflicts — turning scheduling from a chore into a competitive advantage.",
    solution:
      "SchedulAI uses a trained ML model to analyze team patterns, meeting history, and productivity data. It predicts optimal scheduling windows, resolves conflicts using graph-based algorithms, and continuously improves through feedback loops.",
    architecture: [
      {
        component: "FastAPI Gateway",
        description: "REST API handling scheduling requests with rate limiting and authentication",
      },
      {
        component: "ML Predictor",
        description: "TensorFlow model trained on historical scheduling data for optimal slot prediction",
      },
      {
        component: "Conflict Resolver",
        description: "Graph-based algorithm for multi-party scheduling conflict resolution",
      },
      {
        component: "Cache Layer",
        description: "Redis for frequently accessed calendar data and prediction cache",
      },
      {
        component: "PostgreSQL",
        description: "Relational store for user preferences, meeting history, and model metadata",
      },
    ],
    workflow: [
      "User submits scheduling request",
      "API validates and rate-limits",
      "ML model predicts optimal slots",
      "Conflict resolver checks all participants",
      "Best slot selected and confirmed",
      "Calendar synced in real-time",
    ],
    challenges: [
      "Training data was sparse — had to augment with synthetic scheduling patterns",
      "Real-time sync via WebSockets caused race conditions — switched to polling with optimistic updates",
      "Multi-timezone scheduling required careful UTC normalization",
    ],
    results:
      "Reduced scheduling conflicts by 40% in testing. Response time under 200ms at p95. Successfully handles teams of 5-50 members with complex availability constraints.",
    lessons: [
      "Domain-specific ML models outperform generic approaches for scheduling",
      "Simple polling can be more reliable than WebSockets for non-critical real-time features",
      "User feedback loops are essential for continuous model improvement",
    ],
    nextSteps: [
      "Natural language scheduling via chatbot interface",
      "Multi-calendar federated learning across organizations",
      "Predictive meeting duration estimation based on agenda analysis",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "minibiz-erp",
    title: "MiniBiz ERP",
    tagline: "Lightweight enterprise management for small businesses.",
    category: "WEB_PLATFORMS",
    color: "#7000ff",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    problem:
      "Small businesses struggle with fragmented tools — separate applications for inventory, invoicing, accounting, and reporting. This creates data silos, manual data entry, and significant administrative overhead.",
    idea: "Create a unified, lightweight ERP system specifically designed for SMBs that combines inventory management, invoicing, financial reporting, and analytics into a single, fast, and intuitive platform.",
    solution:
      "MiniBiz ERP provides a Next.js-based web application with server-side rendering for performance, Prisma for type-safe database operations, and Stripe integration for payment processing. The system features real-time inventory tracking, automated invoice generation, and a comprehensive analytics dashboard.",
    architecture: [
      {
        component: "Next.js Frontend",
        description: "SSR/SSG hybrid with optimistic UI updates and code splitting",
      },
      {
        component: "API Routes",
        description: "Serverless endpoints with rate limiting and input validation",
      },
      {
        component: "Prisma ORM",
        description: "Type-safe database queries with automated migrations",
      },
      {
        component: "Stripe Integration",
        description: "Automated invoicing, payment tracking, and subscription management",
      },
      {
        component: "PostgreSQL",
        description: "Relational database with JSON support for flexible product attributes",
      },
    ],
    workflow: [
      "Business owner creates account",
      "Sets up inventory with categories",
      "Creates invoices for customers",
      "Processes payments via Stripe",
      "Reviews analytics dashboard",
      "Exports financial reports",
    ],
    challenges: [
      "Initial monolithic component structure caused slow page loads — refactored to feature-based code splitting",
      "Real-time inventory sync needed a more efficient approach than polling — implemented change data capture",
      "Multi-tenant data isolation required careful query scoping throughout the application",
    ],
    results:
      "Unified platform serving small businesses with 60% faster invoice processing. Sub-second page loads on mobile. 99.9% uptime over 6 months of operation.",
    lessons: [
      "Feature-based code splitting is essential for application-scale Next.js projects",
      "Optimistic UI updates dramatically improve perceived performance",
      "Change data capture scales better than polling for real-time features in multi-tenant systems",
    ],
    nextSteps: [
      "Multi-tenant architecture for SaaS deployment model",
      "AI-powered expense categorization from receipt scans",
      "Mobile app with barcode scanning for inventory management",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "adaptiq",
    title: "AdaptIQ",
    tagline: "Adaptive learning platform with personalized content delivery.",
    category: "DATA_ML",
    color: "#10b981",
    stack: ["React", "Python", "scikit-learn", "MongoDB", "D3.js"],
    problem:
      "One-size-fits-all education fails the majority of learners who need personalized pacing, content difficulty, and learning paths. Traditional platforms treat all students identically regardless of their comprehension patterns.",
    idea: "Build an adaptive learning platform that uses machine learning to analyze individual comprehension patterns and dynamically adjusts content delivery, difficulty, and pacing for each learner.",
    solution:
      "AdaptIQ monitors learner interactions, quiz performance, and time-on-task to build individual comprehension profiles. A recommendation engine then adjusts the learning path in real-time, serving content at the optimal difficulty level for each student.",
    architecture: [
      {
        component: "React Frontend",
        description: "Interactive learning interface with real-time progress visualization",
      },
      {
        component: "ML Pipeline",
        description: "scikit-learn models for learner profiling and content recommendation",
      },
      {
        component: "Content Engine",
        description: "Dynamic content assembly based on learner profile and learning objectives",
      },
      {
        component: "Analytics Dashboard",
        description: "D3.js-powered visualizations for learner progress and system performance",
      },
      {
        component: "MongoDB",
        description: "Document store for flexible learner profiles and content metadata",
      },
    ],
    workflow: [
      "Learner starts a session",
      "System analyzes past performance",
      "ML model selects optimal content",
      "Learner interacts with material",
      "Performance metrics captured",
      "Profile updated, next content selected",
    ],
    challenges: [
      "Cold-start problem for new learners — implemented onboarding assessment",
      "Balancing challenge level to avoid boredom and frustration simultaneously",
      "Ensuring content recommendations maintain curriculum coherence",
    ],
    results:
      "35% improvement in course completion rates in pilot testing. 2.1x faster knowledge retention measured through spaced repetition quizzes. High learner satisfaction scores.",
    lessons: [
      "The cold-start problem requires careful UX design — onboarding assessments are essential",
      "Adaptive systems need guardrails to prevent extreme personalization from breaking learning objectives",
      "Learner feedback is as important as performance metrics for system tuning",
    ],
    nextSteps: [
      "Multi-modal content support (video, interactive, text)",
      "Collaborative learning paths for study groups",
      "Integration with LMS platforms via LTI standards",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "netflix-recommendation-system",
    title: "Netflix Recommendation System",
    tagline: "Recommendation engine for content discovery and personalization.",
    category: "DATA_ML",
    color: "#f59e0b",
    stack: ["Python", "Apache Spark", "TensorFlow", "Redis", "AWS"],
    problem:
      "Content platforms face the challenge of connecting users with relevant content from massive catalogs. Collaborative filtering alone produces cold-start problems, and content-based methods lack serendipity.",
    idea: "Build a hybrid recommendation system that combines collaborative filtering, content-based analysis, and contextual signals to provide personalized, diverse, and relevant content recommendations.",
    solution:
      "The system uses a two-stage architecture: a candidate generation model that quickly filters millions of items down to hundreds, followed by a ranking model that scores and orders the candidates. Contextual features (time of day, device, viewing history) inform the final recommendations.",
    architecture: [
      {
        component: "Data Pipeline",
        description: "Apache Spark for processing viewing logs and user interaction data",
      },
      {
        component: "Candidate Generator",
        description: "Collaborative filtering + content-based hybrid for initial item selection",
      },
      {
        component: "Ranking Model",
        description: "Deep learning model for scoring and ordering candidate items",
      },
      {
        component: "Feature Store",
        description: "Redis-backed feature store for real-time user and item features",
      },
      {
        component: "Serving Layer",
        description: "Low-latency API serving pre-computed and real-time recommendations",
      },
    ],
    workflow: [
      "User requests recommendations",
      "System fetches real-time features",
      "Candidate generator selects 500 items",
      "Ranking model scores all candidates",
      "Diversity filter applied",
      "Top-N recommendations returned",
    ],
    challenges: [
      "Handling the cold-start problem for new users and new content items",
      "Balancing relevance with diversity to avoid filter bubbles",
      "Maintaining recommendation freshness with rapidly changing content catalogs",
    ],
    results:
      "Achieved 15% improvement in click-through rate compared to baseline collaborative filtering. Successfully handles catalogs of 100K+ items with sub-100ms serving latency.",
    lessons: [
      "Hybrid approaches consistently outperform single-method recommenders",
      "Feature engineering is often more impactful than model architecture choices",
      "Online evaluation metrics don't always correlate with user satisfaction — A/B testing is essential",
    ],
    nextSteps: [
      "Session-based recommendations using transformer architectures",
      "Explainable recommendations showing why items were suggested",
      "Multi-objective optimization balancing engagement and satisfaction",
    ],
    featured: true,
  },
];

export const SKILLS = {
  programming: {
    label: "Programming",
    icon: "⟨/⟩",
    skills: [
      { name: "Python", level: 90, category: "AI/ML & Data" },
      { name: "Java", level: 70, category: "Development" },
      { name: "C++", level: 60, category: "Systems" },
      { name: "TypeScript", level: 80, category: "Web Development" },
      { name: "SQL", level: 75, category: "Data" },
    ],
  },
  data: {
    label: "Data & Analytics",
    icon: "◆",
    skills: [
      { name: "Pandas", level: 85, category: "Data Processing" },
      { name: "NumPy", level: 85, category: "Numerical Computing" },
      { name: "Matplotlib", level: 75, category: "Visualization" },
      { name: "D3.js", level: 65, category: "Interactive Viz" },
      { name: "MySQL", level: 70, category: "Databases" },
      { name: "PostgreSQL", level: 80, category: "Databases" },
      { name: "MongoDB", level: 70, category: "Databases" },
    ],
  },
  aiml: {
    label: "AI / ML",
    icon: "◎",
    skills: [
      { name: "Machine Learning", level: 85, category: "Core ML" },
      { name: "Deep Learning", level: 75, category: "Neural Networks" },
      { name: "Recommendation Systems", level: 80, category: "Specialized" },
      { name: "Data Analysis", level: 85, category: "Analytics" },
      { name: "TensorFlow", level: 75, category: "Frameworks" },
      { name: "scikit-learn", level: 80, category: "Frameworks" },
      { name: "NLP", level: 65, category: "Specialized" },
    ],
  },
  development: {
    label: "Development",
    icon: "⚡",
    skills: [
      { name: "React", level: 80, category: "Frontend" },
      { name: "Next.js", level: 80, category: "Framework" },
      { name: "Node.js", level: 70, category: "Backend" },
      { name: "FastAPI", level: 75, category: "APIs" },
      { name: "REST APIs", level: 80, category: "Architecture" },
      { name: "Git", level: 80, category: "Tools" },
      { name: "Docker", level: 65, category: "DevOps" },
    ],
  },
};

export const SKILL_CONNECTIONS = [
  { from: "Python", to: "Machine Learning", strength: 0.9 },
  { from: "Python", to: "Pandas", strength: 0.85 },
  { from: "Python", to: "NumPy", strength: 0.85 },
  { from: "Python", to: "TensorFlow", strength: 0.8 },
  { from: "Python", to: "scikit-learn", strength: 0.8 },
  { from: "Python", to: "FastAPI", strength: 0.7 },
  { from: "Machine Learning", to: "Recommendation Systems", strength: 0.8 },
  { from: "Machine Learning", to: "Deep Learning", strength: 0.75 },
  { from: "Machine Learning", to: "Data Analysis", strength: 0.7 },
  { from: "React", to: "Next.js", strength: 0.9 },
  { from: "Next.js", to: "TypeScript", strength: 0.85 },
  { from: "SQL", to: "PostgreSQL", strength: 0.9 },
  { from: "SQL", to: "MySQL", strength: 0.85 },
  { from: "Data Analysis", to: "Matplotlib", strength: 0.7 },
  { from: "Data Analysis", to: "D3.js", strength: 0.6 },
];

export const TIMELINE = [
  {
    year: "2023",
    title: "Started B.Tech",
    organization: "Saraswati College of Engineering",
    location: "Mumbai, India",
    type: "education" as const,
    description:
      "Began Bachelor of Technology in Computer Engineering. Started exploring AI/ML and systems design.",
    tags: ["Computer Science", "AI/ML", "Engineering"],
  },
  {
    year: "2023",
    title: "First Hackathon",
    organization: "Tech Community Events",
    location: "Mumbai, India",
    type: "hackathon" as const,
    description:
      "Participated in first hackathon, building a rapid prototype under time constraints. Learned the value of MVP thinking.",
    tags: ["Hackathons", "Rapid Prototyping"],
  },
  {
    year: "2024",
    title: "Community Lead",
    organization: "Rotaract — Pages and Threads",
    location: "Mumbai, India",
    type: "leadership" as const,
    description:
      "Leading technical community drives, organizing hackathons, and mentoring junior developers in open-source contributions.",
    tags: ["Leadership", "Community", "Mentoring"],
  },
  {
    year: "2024",
    title: "SchedulAI",
    organization: "Personal Project",
    type: "project" as const,
    description:
      "Built an AI-powered scheduling engine using TensorFlow and FastAPI. Achieved significant reduction in scheduling conflicts through ML-based optimization.",
    tags: ["Python", "TensorFlow", "FastAPI", "AI/ML"],
  },
  {
    year: "2024",
    title: "MiniBiz ERP",
    organization: "Personal Project",
    type: "project" as const,
    description:
      "Developed a lightweight ERP system for small businesses with real-time inventory, invoicing, and analytics. Unified multiple business tools into one platform.",
    tags: ["Next.js", "TypeScript", "Prisma", "Web"],
  },
  {
    year: "2024",
    title: "AdaptIQ",
    organization: "Personal Project",
    type: "project" as const,
    description:
      "Created an adaptive learning platform that personalizes content delivery using ML-based learner profiling and dynamic content recommendation.",
    tags: ["Python", "scikit-learn", "ML", "Education"],
  },
  {
    year: "2025",
    title: "Continuing Education",
    organization: "Saraswati College of Engineering",
    location: "Mumbai, India",
    type: "education" as const,
    description:
      "Advancing studies in systems design, AI/ML, and software engineering. Focusing on practical application of theoretical knowledge.",
    tags: ["Advanced Studies", "Systems Design"],
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2024",
    title: "Community Leadership",
    organization: "Rotaract — Pages and Threads",
    description:
      "Leading technical community initiatives and mentoring developers. Organizing hackathons and knowledge-sharing sessions.",
    category: "leadership" as const,
  },
  {
    year: "2024",
    title: "SchedulAI — AI Scheduling Engine",
    organization: "Personal Project",
    description:
      "Built and tested an ML-powered scheduling system demonstrating practical application of AI to real-world optimization problems.",
    category: "project" as const,
  },
  {
    year: "2024",
    title: "MiniBiz ERP — Business Platform",
    organization: "Personal Project",
    description:
      "Developed a full-stack ERP system handling inventory, invoicing, and analytics for small businesses.",
    category: "project" as const,
  },
  {
    year: "2024",
    title: "Machine Learning Specialization",
    organization: "Coursera / Stanford Online",
    description:
      "Completed comprehensive ML coursework covering supervised learning, unsupervised learning, and neural networks.",
    category: "certification" as const,
  },
  {
    year: "2023",
    title: "System Design Fundamentals",
    organization: "Self-directed Study",
    description:
      "Studied distributed systems, scalability patterns, and architectural decision-making through practical projects.",
    category: "learning" as const,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    date: "2024",
  },
  {
    title: "System Design Interview Preparation",
    issuer: "Educative",
    date: "2024",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
  },
];
