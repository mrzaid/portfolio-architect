export const profile = {
  firstName: "Alex",
  fullName: "Alex Morgan",
  name: "Alex Morgan",
  title: "AI Software Engineer",
  subtitle: "Researcher | Problem Solver",
  location: "Stuttgart, Germany",
  intro: "AI Software Engineer building end-to-end AI systems — LLM pipelines, RAG, and computer vision in production.",
  ctaText: "Try My Profile ChatBot",
  ctaLink: "https://example.com/chatbot",
  email: "alex.morgan@example.com",
  linkedin: "https://linkedin.com/in/example",
  github: "https://github.com/example",
};

export const about = {
  paragraphs: [
    "I specialize in building end-to-end AI applications, from dataset curation and research to model development and deployment. Currently, I'm pursuing my M.Sc. in Data Science and Artificial Intelligence at the University of Stuttgart.",
    "My thesis focuses on multi-modal learning for vision-language models. Part of this work was presented at the European Conference on Computer Vision (ECCV) workshop track.",
    "As an AI Software Engineer, I've developed applications across NLP and Computer Vision — including conversational chatbots, document understanding pipelines, image segmentation tools, and retrieval-augmented generation systems.",
  ],
  highlights: [
    "M.Sc. Data Science & AI — University of Stuttgart",
    "Deutschlandstipendium Scholarship recipient",
    "2+ years across LLMs, RAG, CV and OCR pipelines",
    "Languages: English (C1), German (A2), Urdu (Native)",
  ],
};

export const navLinks = [
  { id: "home", label: "About Me" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export const bio = [
  "I specialize in building end-to-end AI applications, from dataset curation and research to model development and deployment. Currently, I'm pursuing my M.Sc. in Data Science and Artificial Intelligence at the University of Stuttgart.",
  "My thesis focuses on multi-modal learning for vision-language models. Part of this work was presented at the European Conference on Computer Vision (ECCV) workshop track.",
  "As an AI Software Engineer, I've developed applications across NLP and Computer Vision — including conversational chatbots, document understanding pipelines, image segmentation tools, and retrieval-augmented generation systems.",
  "My skills span across deep learning, MLOps, full-stack development, and cloud deployment.",
];

export type ExperienceEntry = {
  role: string;
  company: string;
  companyLink?: string;
  location?: string;
  duration: string;
  bullets: string[];
  tags?: string[];
  category: "professional" | "teaching";
};

export const experience: ExperienceEntry[] = [
  {
    role: "AI Software Engineer",
    company: "Neural Forge GmbH",
    location: "Stuttgart, Germany",
    duration: "Jan 2024 – Present",
    category: "professional",
    bullets: [
      "Built a retrieval-augmented chatbot serving 12k+ monthly users with 92% response accuracy across 5 product lines.",
      "Reduced inference latency by 38% by quantizing transformer models and migrating to a triton-based serving stack.",
      "Led a 4-person research squad delivering a multi-modal document parser that cut manual annotation effort by 60%.",
      "Established CI/CD pipelines on AWS, automating 100% of model deployments and shrinking release cycles from 2 weeks to 2 days.",
    ],
    tags: ["Python", "PyTorch", "LangChain", "AWS", "Docker"],
  },
  {
    role: "Machine Learning Engineer",
    company: "Insight Labs",
    location: "Berlin, Germany",
    duration: "Jul 2022 – Dec 2023",
    category: "professional",
    bullets: [
      "Designed an NLP pipeline classifying 1.2M support tickets per month with 94% F1 score.",
      "Productionized 6 computer vision models for industrial defect detection with 99.1% recall.",
      "Mentored 3 junior engineers and ran weekly knowledge-sharing sessions on transformer architectures.",
    ],
    tags: ["HuggingFace", "TensorFlow", "FastAPI", "MongoDB"],
  },
  {
    role: "Software Engineer Intern",
    company: "Code & Coffee",
    location: "Lahore, Pakistan",
    duration: "Jun 2021 – Aug 2022",
    category: "professional",
    bullets: [
      "Developed a Django-based analytics dashboard adopted by 8 internal teams.",
      "Wrote 80+ unit tests, lifting backend coverage from 41% to 87%.",
      "Migrated legacy MySQL schemas to PostgreSQL with zero downtime.",
    ],
    tags: ["Django", "PostgreSQL", "React", "Git"],
  },
  {
    role: "Teaching Assistant — Machine Learning",
    company: "University of Stuttgart",
    location: "Stuttgart, Germany",
    duration: "Oct 2024 – Present",
    category: "teaching",
    bullets: [
      "TA for ML course — weekly tutorials, Python-based problem solving, grading assignments and exams.",
    ],
    tags: ["Teaching", "Python", "Machine Learning"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  domain: string;
};

export const projects: Project[] = [
  {
    title: "Profile ChatBot",
    description: "A RAG-powered chatbot trained on my CV and projects. Uses LangChain, OpenAI embeddings, and a Pinecone vector store for retrieval.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Streamlit", "RAG"],
    github: "https://github.com/example/profile-chatbot",
    demo: "https://example.com/chatbot",
    domain: "nlp",
  },
  {
    title: "Multi-Modal Document Parser",
    description: "Vision-language pipeline that extracts structured data from invoices and forms using a fine-tuned LayoutLMv3 model.",
    tech: ["LayoutLMv3", "HuggingFace", "PyTorch", "Python"],
    github: "https://github.com/example/doc-parser",
    demo: "https://example.com/parser",
    domain: "computer-vision",
  },
  {
    title: "Image Segmentation Toolkit",
    description: "Interactive Streamlit app for SAM-based segmentation with click prompts, mask refinement, and export to COCO format.",
    tech: ["SAM", "Streamlit", "OpenCV", "PyTorch"],
    github: "https://github.com/example/seg-toolkit",
    domain: "computer-vision",
  },
  {
    title: "News Summarizer API",
    description: "FastAPI service that scrapes daily news, runs abstractive summarization with BART, and pushes results via webhook.",
    tech: ["FastAPI", "BART", "HuggingFace", "Python"],
    github: "https://github.com/example/news-api",
    domain: "nlp",
  },
  {
    title: "Real-Time Pose Tracker",
    description: "MediaPipe + WebRTC app for real-time human pose estimation in the browser with sub-50ms latency.",
    tech: ["MediaPipe", "WebRTC", "JavaScript", "Python"],
    github: "https://github.com/example/pose-tracker",
    domain: "computer-vision",
  },
  {
    title: "Resume Ranker",
    description: "Sentence-transformer based system that scores and ranks resumes against a job description with explainability.",
    tech: ["Sentence-Transformers", "scikit-learn", "Python", "NLP"],
    github: "https://github.com/example/resume-ranker",
    domain: "nlp",
  },
];

export const skills = [
  { title: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "NoSQL"] },
  { title: "AI Libraries", items: ["PyTorch", "HuggingFace", "OpenCV", "LangChain", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "NLTK", "Scrapy"] },
  { title: "AI Tools", items: ["NLP", "LLMs", "Computer Vision", "Image Processing", "Multi-modal Learning", "Fine-tuning", "Model Evaluation"] },
  { title: "Development", items: ["Django", "Flask", "Streamlit", "Node.js", "React", "REST APIs", "Postman", "HTML", "CSS"] },
  { title: "Databases", items: ["MS SQL", "MySQL", "Oracle", "MongoDB"] },
  { title: "DevOps", items: ["Docker", "AWS (EC2, Lambda, S3)", "WandB", "Neptune", "Git", "Linux", "Bash Scripting"] },
  { title: "AI Assistants", items: ["ChatGPT", "Copilot", "Cursor", "Perplexity", "Gemini", "NotebookLM"] },
  { title: "Languages", items: ["English (C1)", "German (A2)", "Urdu (Native)"] },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI / ML",
    items: ["PyTorch", "HuggingFace", "scikit-learn", "LLMs", "RAG", "LangChain", "Fine-tuning", "Prompt Engineering"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "SAM", "YOLOv8", "Mask R-CNN", "MediaPipe", "Image Processing"],
  },
  {
    title: "NLP & OCR",
    items: ["NLP", "BART", "Sentence-Transformers", "NLTK", "Machine Translation"],
  },
  {
    title: "LLM Tooling",
    items: ["ChatGPT", "Copilot", "Cursor", "Gemini", "NotebookLM", "OpenAI API"],
  },
  {
    title: "Data & Analytics",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "MS SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Backend & Web",
    items: ["Django", "Flask", "FastAPI", "Streamlit", "Node.js", "React", "REST APIs"],
  },
  {
    title: "DevOps & Infra",
    items: ["Docker", "AWS (EC2, Lambda, S3)", "WandB", "Git", "Linux", "Bash"],
  },
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "NoSQL"],
  },
];

export const education = [
  {
    degree: "M.Sc. Data Science and Artificial Intelligence",
    university: "University of Stuttgart",
    school: "University of Stuttgart, Germany",
    duration: "2023 – Present",
    status: "Currently enrolled",
    type: "master",
    gpa: "1.4",
    honors: ["🏆 Deutschlandstipendium Scholarship"],
    courses: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Statistical ML"],
  },
  {
    degree: "B.Eng. Computer Systems Engineering",
    university: "NUST, Islamabad",
    school: "NUST, Islamabad, Pakistan",
    duration: "2019 – 2023",
    status: "Completed",
    type: "bachelor",
    gpa: "3.92",
    honors: ["🥇 Ranked 1st in Class", "🏆 Rector's Honor Roll"],
    courses: ["Data Structures", "Algorithms", "Operating Systems", "Databases", "AI Fundamentals"],
  },
];

export const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera (deeplearning.ai)",
    url: "https://www.coursera.org",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM / Coursera",
    url: "https://www.coursera.org",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/",
  },
];

export const summerSchools = [
  {
    title: "Deep Learning Summer School",
    institution: "University of Stuttgart, Germany",
    duration: "August 2024",
    description: "Intensive 5-day program with lectures and hands-on labs covering deep learning, computer vision, NLP, and generative models taught by leading international experts.",
    topics: ["Deep Learning", "Computer Vision", "NLP", "Generative Models", "Transformers"],
  },
];

export const leadershipExperience = [
  {
    organization: "AI Student Club",
    role: "Technical Lead",
    duration: "September 2023 – Present",
    location: "Stuttgart, Germany",
    description: "Student community for AI enthusiasts at the University of Stuttgart, organizing workshops, hackathons, and speaker sessions.",
    achievements: [
      "Organized monthly workshops on ML topics, reaching 100+ students per session.",
      "Led a team of 5 to build a shared GPU compute cluster for student research projects.",
      "Invited industry speakers from Google DeepMind, Bosch, and local AI startups.",
    ],
  },
  {
    organization: "Open Source AI Initiative",
    role: "Contributor & Maintainer",
    duration: "June 2022 – Present",
    description: "Open source community contributing to AI tooling and educational resources for aspiring ML engineers.",
    achievements: [
      "Contributed 15+ PRs to popular ML libraries including LangChain and HuggingFace.",
      "Wrote technical tutorials reaching 5,000+ readers on Medium.",
    ],
  },
];
