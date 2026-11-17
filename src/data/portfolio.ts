import type {
  ContactLink,
  HeroData,
  NavItem,
  Project,
  SkillGroup,
} from "@/types/portfolio";
import {
  BeakerIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  GitHubIcon,
  GlobeIcon,
  LayersIcon,
  LinkedInIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  UsersIcon,
} from "@/components/icons";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroData = {
  eyebrow: "Fullstack Developer Student",
  name: "Florencia Méndez Quintana",
  tagline: "Reliable, structured software, built with collaboration in mind.",
  resumeUrl: "/Florencia-Mendez-Resume-2026.pdf",
  image: {
    src: "/florencia-dark.png",
    alt: "Portrait of Florencia Méndez Quintana",
  },
};

export const projects: Project[] = [
  {
    title: "Liabron",
    description:
      "A role-based platform that connects vocational schools (YH), students and companies around the mandatory LIA internship. Schools load programme information once, from a PDF, and share an invite link; companies offer placements without reading PDFs, and students apply or share their own self-sourced placement for company confirmation. Built as a pilot with Lovable and extended with a focus on access control (server-verified roles, row-level security, private file storage) and personal-data protection. The idea was validated with my programme coordinator.",
    tech: ["TanStack Start", "React", "TypeScript", "Supabase", "Row Level Security"],
    tags: ["Product", "Fullstack"],
    liveUrl: "https://liabrons.lovable.app/",
    logo: "/liabron-logo.png",
    image: "/liabron-ui.png",
    imageAlt: "Liabron home page screenshot",
  },
  {
    title: "CheckGo",
    description:
      "A fullstack task management application where users can create, update, and delete tasks, while an admin user can view existing users. Built with a Java Spring Boot REST API secured with JWT-based authentication and role-based access, a PostgreSQL database, and a Vite frontend that consumes the API.",
    tech: ["Spring Boot", "JWT", "PostgreSQL", "Vite"],
    tags: ["Fullstack"],
    liveUrl: "https://checkgo-frontend.vercel.app/",
    codeUrl: "https://github.com/Floremila/CheckGo",
    logo: "/checkgo-favicon.svg",
    image: "/checkgo-ui.png",
    imageAlt: "CheckGo interface screenshot",
  },
  {
    title: "Lagom Kul",
    description:
      "Lagom Kul is a collaborative fullstack project developed as part of an agile course, together with developers and UX designers. The application is a joke generator aimed at Swedish language learners. I contributed to development tasks across the stack and collaborated closely with the team using Jira for task tracking, sprint planning, and coordination between roles.",
    tech: ["Agile", "Jira", "Collaboration"],
    tags: ["Fullstack"],
    liveUrl: "https://lagomkul.se/",
    codeUrl: "https://github.com/BugBusters-G1/agprojekt",
    logo: "/loga.png",
    image: "/lagomkul-ui.png",
    imageAlt: "Lagom Kul interface screenshot",
  },
  {
    title: "E-shop",
    description:
      "A backend-focused group project developed with Test-Driven Development. I contributed to writing unit tests, implementing and refactoring business logic, and collaborating through pull requests and code integration, with development coordinated using GitHub Projects.",
    tech: ["TDD", "Unit Tests", "GitHub Projects"],
    tags: ["Backend"],
    codeUrl: "https://github.com/AmandaLyckenius/EShop",
    imageAlt: "Code project placeholder",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: CodeIcon,
    items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: LayersIcon,
    items: ["Spring Boot", "React", "Next.js"],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"],
  },
  {
    title: "Web & APIs",
    icon: GlobeIcon,
    items: ["REST APIs", "HTTP/HTTPS", "JSON", "Web services"],
  },
  {
    title: "Security",
    icon: LockIcon,
    items: ["JWT authentication", "Authentication & Authorization", "Row Level Security"],
  },
  {
    title: "Testing",
    icon: BeakerIcon,
    items: ["JUnit", "Mocha"],
  },
  {
    title: "Cloud & DevOps (intro)",
    icon: CloudIcon,
    items: ["Docker", "CI/CD concepts", "AWS/Azure"],
  },
  {
    title: "Ways of Working",
    icon: UsersIcon,
    items: [
      "Agile (Scrum, Kanban)",
      "Pair programming",
      "Sprints",
      "User stories",
      "Task boards",
      "Stakeholder feedback",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:flormequi@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/florencia-m%C3%A9ndez-quintana/",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/Floremila",
    Icon: GitHubIcon,
  },
  {
    label: "Phone",
    href: "tel:0046760153373",
    Icon: PhoneIcon,
  },
];
