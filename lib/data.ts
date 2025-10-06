import {
  Code2,
  Server,
  BrainCircuit,
  Blocks,
  MonitorSmartphone,
  PenTool,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  BookCheck,
} from 'lucide-react';

export const personalInfo = {
  name: "Vedant Talekar",
  aka: "thevedantt",
  title: "Python Developer | Full-Stack Developer | AI/ML Enthusiast",
  bio: "Hi there! I’m Vedant — a developer who blends code with creativity and AI with real-world utility. I build scalable web apps, smart systems, and AI-driven solutions that matter.",
  email: "vedanttalekar1705@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/thevedantt", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vedant-talekar-055910208", icon: Linkedin },
    { name: "Email", url: "mailto:vedanttalekar1705@gmail.com", icon: Mail },
  ],
  quote: "Tech should simplify lives, not complicate them — I build with that belief."
};

export const about = {
  aboutMe: [
    "I work across the stack with **Next.js**, **React**, **TypeScript**, and **Python**",
    "I'm passionate about **AI & ML**, working with **TensorFlow**, **scikit-learn**, and LLMs",
    "I believe in building tools that are intuitive, intelligent, and impactful",
    "Constantly exploring the intersection of tech and human problems — from **healthcare** to **education**",
  ],
  focusAreas: [
    "Real-time voice agents powered by **AI**",
    "ML-backed tools like **question generators** and **recommendation systems**",
    "Building health-focused AI (e.g., **diabetes prediction**, symptom analyzers)",
    "Frontend frameworks with motion UI & interactive UX",
  ],
};

export const projects = [
  {
    title: "ExaLearn",
    description: "A dynamic, interactive web-based learning platform built using pure JavaScript and CSS. Delivers real-time feedback, responsive UI, and gamified experiences with a lightweight, client-side architecture.",
    tech: ["JavaScript", "CSS"],
    link: "https://github.com/thevedantt/ExaLearn",
  },
  {
    title: "GustoGo",
    description: "A digital canteen management system using Flask that allows users to browse the menu, place orders, and manage their profiles in a seamless web experience.",
    tech: ["Flask", "Python", "HTML", "CSS"],
    link: "https://github.com/thevedantt/gustogo",
  },
  {
    title: "VaidAI",
    description: "Real-time AI medical voice assistant leveraging AssemblyAI, Clerk, and NeonDB. Provides conversational diagnosis with report generation for enhanced virtual care.",
    tech: ["Next.js", "TypeScript", "AssemblyAI", "NeonDB"],
    link: "https://github.com/thevedantt/vaidai",
  },
  {
    title: "CineMind",
    description: "A movie recommendation system using hybrid ML techniques combining collaborative filtering and content-based filtering for personalized suggestions.",
    tech: ["Python", "Scikit-learn"],
    link: "https://github.com/thevedantt/cinemind",
  },
  {
    title: "GlucoGuardAI",
    description: "AI-powered tool for real-time glucose and diabetes risk prediction, combining ML classification with visualizations for better patient awareness.",
    tech: ["Python", "Pandas", "Sklearn"],
    link: "https://github.com/thevedantt/glucoguardai",
  },
  {
    title: "DigitRec",
    description: "MNIST digit recognition model built with TensorFlow and CNN, designed to classify handwritten digits with high accuracy and interactive demo support.",
    tech: ["Python", "TensorFlow"],
    link: "https://github.com/thevedantt/digitrec",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: Code2,
    list: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    icon: MonitorSmartphone,
    list: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    category: "Backend",
    icon: Server,
    list: ["Flask", "Firebase", "SQLite", "Neon DB", "FastAPI"],
  },
  {
    category: "ML/AI",
    icon: BrainCircuit,
    list: ["TensorFlow", "Scikit-learn", "LangChain", "OpenAI", "Gemini", "RAG Pipelines", "FAISS"],
  },
  {
    category: "UI/UX Design",
    icon: PenTool,
    list: ["Figma", "Canva", "Wireframing", "Prototyping"],
  },
  {
    category: "Other Tools",
    icon: Blocks,
    list: ["Git", "Vercel", "PythonAnywhere", "Clerk", "AssemblyAI", "Railway", "Render"],
  },
];

export const experience = [
  {
    icon: Briefcase,
    title: "AI Engineer and Developer",
    company: "FindFake Services, Navi Mumbai",
    date: "June 2025 - Present",
    description: "Leading development of a cross-platform Flutter application and working on ML models for detecting image-based forgery.",
  },
  {
    icon: GraduationCap,
    title: "B.E. in Data Science and Artificial Intelligence Engineering",
    company: "A.C. Patil College of Engineering, Navi Mumbai",
    date: "2022 - 2026",
    description: "CGPI (Till SEM-V): 7.1",
  },
  {
    icon: GraduationCap,
    title: "Higher Secondary Certificate (HSC)",
    company: "D.G. Ruparel College of Arts, Science, and Commerce, Mumbai",
    date: "2020 - 2022",
    description: "Percentage: 55%",
  },
];

export const achievements = [
    {
        icon: Award,
        title: "2nd Runner-Up",
        event: "Avishkaar Season 2 (2024)",
        description: "A national-level hackathon by GeeksforGeeks."
    },
    {
        icon: Award,
        title: "Winner",
        event: "Inter-college project competition",
        description: "Won in 2025 and 2024."
    },
    {
        icon: Award,
        title: "Runner-Up",
        event: "INNOVATHON (2025)",
        description: "In the GenAI category."
    }
];

export const certifications = [
    {
        icon: BookCheck,
        title: "UI/UX Design with Figma",
        issuer: "Udemy",
        date: "Feb 2025"
    },
    {
        icon: BookCheck,
        title: "Python & TensorFlow: Deep Dive into Machine Learning",
        issuer: "Udemy",
        date: "Jun 2025"
    },
    {
        icon: BookCheck,
        title: "Full Stack Developer",
        issuer: "OneRoadmap",
        date: "Apr 2025"
    },
    {
        icon: BookCheck,
        title: "Mastering Prompt Engineering",
        issuer: "Udemy",
        date: "Apr 2025"
    }
];
