export const profile = {
  firstName: "Alex",
  fullName: "Alex Morgan",
  title: "AI Software Engineer",
  subtitle: "Researcher | Problem Solver",
  ctaText: "Try My ChatBot",
  ctaLink: "#contact",
  email: "alex.morgan@example.com",
  linkedin: "https://linkedin.com/in/example",
  github: "https://github.com/example",
};

export const navLinks = [
  { id: "intro", label: "About Me" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const bio = [
  "I specialize in building end-to-end AI applications, from dataset curation and research to model development and deployment. Currently, I'm pursuing my M.Sc. in Data Science and Artificial Intelligence at the University of Stuttgart.",
  "My thesis focuses on multi-modal learning for vision-language models. Part of this work was presented at the European Conference on Computer Vision (ECCV) workshop track.",
  "As an AI Software Engineer, I've developed applications across NLP and Computer Vision — including conversational chatbots, document understanding pipelines, image segmentation tools, and retrieval-augmented generation systems.",
  "My skills span across deep learning, MLOps, full-stack development, and cloud deployment.",
];

export const experience = [
  {
    company: "Neural Forge GmbH",
    title: "AI Software Engineer",
    location: "Stuttgart, Germany",
    dates: "Jan 2024 – Present",
    bullets: [
      "Built a retrieval-augmented chatbot serving 12k+ monthly users with 92% response accuracy across 5 product lines.",
      "Reduced inference latency by 38% by quantizing transformer models and migrating to a triton-based serving stack.",
      "Led a 4-person research squad delivering a multi-modal document parser that cut manual annotation effort by 60%.",
      "Established CI/CD pipelines on AWS, automating 100% of model deployments and shrinking release cycles from 2 weeks to 2 days.",
    ],
    tags: ["Python", "PyTorch", "LangChain", "AWS", "Docker"],
  },
  {
    company: "Insight Labs",
    title: "Machine Learning Engineer",
    location: "Berlin, Germany",
    dates: "Jul 2022 – Dec 2023",
    bullets: [
      "Designed an NLP pipeline classifying 1.2M support tickets per month with 94% F1 score.",
      "Productionized 6 computer vision models for industrial defect detection with 99.1% recall.",
      "Mentored 3 junior engineers and ran weekly knowledge-sharing sessions on transformer architectures.",
    ],
    tags: ["HuggingFace", "TensorFlow", "FastAPI", "MongoDB"],
  },
  {
    company: "Code & Coffee",
    title: "Software Engineer Intern",
    location: "Lahore, Pakistan",
    dates: "Jun 2021 – Aug 2022",
    bullets: [
      "Developed a Django-based analytics dashboard adopted by 8 internal teams.",
      "Wrote 80+ unit tests, lifting backend coverage from 41% to 87%.",
      "Migrated legacy MySQL schemas to PostgreSQL with zero downtime.",
    ],
    tags: ["Django", "PostgreSQL", "React", "Git"],
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

export const projects = [
  {
    title: "Profile ChatBot",
    description: "A RAG-powered chatbot trained on my CV and projects. Uses LangChain, OpenAI embeddings, and a Pinecone vector store for retrieval.",
    github: "https://github.com/example/profile-chatbot",
    demo: "https://example.com/chatbot",
  },
  {
    title: "Multi-Modal Document Parser",
    description: "Vision-language pipeline that extracts structured data from invoices and forms using a fine-tuned LayoutLMv3 model.",
    github: "https://github.com/example/doc-parser",
    demo: "https://example.com/parser",
  },
  {
    title: "Image Segmentation Toolkit",
    description: "Interactive Streamlit app for SAM-based segmentation with click prompts, mask refinement, and export to COCO format.",
    github: "https://github.com/example/seg-toolkit",
  },
  {
    title: "News Summarizer API",
    description: "FastAPI service that scrapes daily news, runs abstractive summarization with BART, and pushes results via webhook.",
    github: "https://github.com/example/news-api",
  },
  {
    title: "Real-Time Pose Tracker",
    description: "MediaPipe + WebRTC app for real-time human pose estimation in the browser with sub-50ms latency.",
    github: "https://github.com/example/pose-tracker",
  },
  {
    title: "Resume Ranker",
    description: "Sentence-transformer based system that scores and ranks resumes against a job description with explainability.",
    github: "https://github.com/example/resume-ranker",
  },
];

export const education = [
  {
    degree: "M.Sc. Data Science and Artificial Intelligence",
    university: "University of Stuttgart",
    gpa: "1.4",
    honors: ["🏆 Deutschlandstipendium Scholarship"],
    courses: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Statistical ML"],
  },
  {
    degree: "B.Eng. Computer Systems Engineering",
    university: "NUST, Islamabad",
    gpa: "3.92",
    honors: ["🥇 Ranked 1st in Class", "🏆 Rector's Honor Roll"],
    courses: ["Data Structures", "Algorithms", "Operating Systems", "Databases", "AI Fundamentals"],
  },
];
