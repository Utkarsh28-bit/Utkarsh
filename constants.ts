
import { Experience, Project, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Utkarsh Ramshibhai Ravaliya",
  title: "Software Developer & Data Analyst",
  email: "utkarshravliya1234@gmail.com",
  phone: "8980113564",
  linkedin: "https://linkedin.com/in/utkarsh-ravaliya",
  github: "https://github.com/Utkarsh28-bit",
  location: "A-2, Ambika Co Op Society, Rentlav, Udvada (R.S.) 396185",
  summary: "Software Developer and Data Analyst with experience in web development, data processing, and AI solutions. Skilled in Python, HTML/CSS/JavaScript, NLP, and data visualization. Proven ability to build dashboards, automate workflows, and develop intelligent systems."
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "HTML", "CSS", "JavaScript"]
  },
  {
    name: "Tools & Frameworks",
    skills: ["MS Office", "Excel", "Speech Recognition", "NLP", "Flask", "IBM Watson Assistant"]
  },
  {
    name: "Soft Skills",
    skills: ["Team Work", "Communication", "Problem Solving"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "IBM",
    role: "AI Intern",
    period: "Sep 2024 - Present",
    description: [
      "Built an intelligent chatbot using IBM Watson Assistant capable of handling real-time user queries with high accuracy.",
      "Integrated NLP-based intent classification to understand user questions and deliver context-aware responses.",
      "Connected the chatbot to a Python/Flask backend for API communication and extended custom functionality.",
      "Deployed the chatbot with a clean UI and ensured stable performance through optimized processing."
    ]
  },
  {
    company: "Techreale",
    role: "Intern",
    period: "Jul 2024",
    description: [
      "Created interactive dashboards using HTML, CSS, and JavaScript for data visualization.",
      "Collaborated with team members to design and implement user-friendly web interfaces."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Data Cleaning & Preprocessing Pipeline",
    technologies: ["Python", "Pandas", "NumPy"],
    period: "2024",
    highlights: [
      "Developed a complete data-cleaning workflow to transform raw datasets into structured, analysis-ready formats.",
      "Performed key preprocessing tasks including handling missing values, removing duplicates, and treating outliers.",
      "Automated repetitive cleaning steps using Pandas to improve efficiency and ensure consistent data quality.",
      "Visualized data distribution and anomalies using Python plotting tools."
    ]
  },
  {
    title: "Jarvis Virtual Assistant",
    technologies: ["Python", "Speech Recognition", "Text-to-Speech", "NLP"],
    period: "2024",
    highlights: [
      "Built an intelligent virtual assistant capable of executing voice commands and automating system tasks.",
      "Implemented speech recognition and TTS modules for human-like two-way interaction.",
      "Added utilities for checking weather, news, reading emails, and setting reminders.",
      "Optimized performance for smooth execution on low-end systems using lightweight libraries."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Laxmi Institute of Technology, Sarigam",
    degree: "Bachelor of Engineering (BE)",
    year: "2024",
    result: "CGPA: 7.0"
  },
  {
    institution: "Shree Swaminarayan English Medium School, Salvav, Vapi",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2021",
    result: "68%"
  },
  {
    institution: "Shree Swaminarayan English Medium School, Salvav, Vapi",
    degree: "Secondary School Certificate (SSC)",
    year: "2019",
    result: "72%"
  }
];
