import type { SVGProps } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

type IconProps = SVGProps<SVGSVGElement>;

function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9 6L3.5 12 9 18M15 6l5.5 6-5.5 6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 4l8 4-8 4-8-4 8-4z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 12l8 4 8-4M4 16l8 4 8-4"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" strokeWidth="1.6" />
      <path
        d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.6" />
      <path
        d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="6" y="10" width="12" height="9" rx="2" strokeWidth="1.6" />
      <path d="M9 10V7a3 3 0 016 0v3" strokeWidth="1.6" />
    </svg>
  );
}

function BeakerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9 4h6M10 4v5l-4 7a2 2 0 001.7 3h8.6a2 2 0 001.7-3l-4-7V4"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 14h6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M7 18h10a4 4 0 000-8 5 5 0 00-9.7 1.5A3.5 3.5 0 007 18z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="8" cy="9" r="3" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="2.5" strokeWidth="1.6" />
      <path
        d="M3.5 18a4.5 4.5 0 019 0M13.5 18a4 4 0 016.5 0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="1.6" />
      <path
        d="M4 8l8 5 8-5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 9H3v12h3V9zM4.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 21h-3v-6.3c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1V21h-3V9h3v1.6C14.7 9.6 15.7 9 17.2 9c2.3 0 3.8 1.5 3.8 4.7V21z" />
    </svg>
  );
}

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.3-4.5-1.1-4.5-5.1 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 4-2.3 4.8-4.5 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.9-5.3 6.9-9.8C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"
        strokeWidth="1.6"
      />
      <path d="M11 17h2" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const projects = [
  {
    title: "CheckGo",
    description:
      "A fullstack task management application where users can create, update, and delete tasks, while an admin user can view existing users. Built with a Java Spring Boot REST API secured with JWT-based authentication and role-based access, a PostgreSQL database, and a Vite frontend that consumes the API.",
    tech: ["Spring Boot", "JWT", "PostgreSQL", "Vite"],
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
    tech: ["Fullstack", "Agile", "Jira", "Collaboration"],
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
    tech: ["TDD", "Unit Tests", "Backend", "GitHub Projects"],
    codeUrl: "https://github.com/AmandaLyckenius/EShop",
    imageAlt: "Code project placeholder",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: CodeIcon,
    items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: LayersIcon,
    items: ["Spring Boot", "React", "basic Next.js"],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Web & APIs",
    icon: GlobeIcon,
    items: ["REST APIs", "HTTP/HTTPS", "JSON", "Web services"],
  },
  {
    title: "Security",
    icon: LockIcon,
    items: ["JWT authentication", "basic authentication/authorization"],
  },
  {
    title: "Testing",
    icon: BeakerIcon,
    items: ["JUnit", "basic Mocha"],
  },
  {
    title: "Cloud & DevOps (intro)",
    icon: CloudIcon,
    items: ["Docker", "basic CI/CD concepts", "introductory AWS/Azure"],
  },
  {
    title: "Ways of Working",
    icon: UsersIcon,
    items: [
      "Agile (Scrum, Kanban)",
      "sprints",
      "user stories",
      "task boards",
    ],
  },
];

const contactLinks = [
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

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6">
          <nav className="flex w-full items-center gap-6 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm md:justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-sky-600 dark:hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <section
          id="hero"
          className="grid min-h-[calc(100dvh-4rem)] scroll-mt-16 gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
              Fullstack Developer Student
            </p>
            <h1 className="mt-4 text-4xl font-display font-semibold leading-tight md:text-5xl">
              Florencia Méndez Quintana
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Focused on clear, reliable software built with structure and
              collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Florencia-Mendez-Resume-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/florencia-dark.png"
                alt="Portrait of Florencia Mendez Quintana"
                width={420}
                height={520}
                priority
                className="w-72 max-w-full rounded-2xl object-cover md:w-80"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 py-28">
          <h2 className="text-2xl font-display font-semibold">Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A selection of recent fullstack and backend-focused projects.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-5 rounded-xl border border-slate-200/80 bg-white p-6 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900"
              >
                {project.image ? (
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={640}
                      height={360}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    <span className="font-display text-2xl">&lt;/&gt;</span>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  ) : null}
                  <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-6 text-slate-600 dark:text-slate-300 md:min-h-[152px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
                    >
                      Live
                    </a>
                  ) : null}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-16 py-24">
          <h2 className="text-2xl font-display font-semibold">Skills</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Grouped by area with the tools and concepts I use most.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sky-600 dark:bg-slate-800">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-display font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="scroll-mt-16 py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                About
              </p>
              <h2 className="mt-3 text-3xl font-display font-semibold">
                Get to know me
              </h2>
              <div className="mt-4 max-w-2xl space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  I'm a Java Developer student at Stockholm Tekniska Institut,
                  originally from Montevideo and currently based in Stockholm,
                  seeking an LIA internship. I'm curious and motivated by
                  collaborative problem-solving, and I enjoy working in teams
                  toward shared goals. I adapt easily to new tools, environments,
                  and ways of working, with a strong interest in understanding how
                  systems and people interact.
                </p>
                <p>
                  My background in HR and analytical roles has shaped the way I
                  approach development, strengthening my communication skills,
                  structured thinking, and ability to collaborate across different
                  roles.
                </p>
                <p>
                  Outside of development, I enjoy spending time in nature, reading
                  novels in Spanish, and taking part in creative activities such as
                  ceramics, knitting, or dance. I also enjoy discovering new places
                  — even within the city where I live, where there is always a new
                  corner to explore. Most of these activities are even more
                  meaningful when shared with family or friends.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:items-stretch md:justify-end">
              <div className="w-80 max-w-full md:mt-[1.875rem] md:h-[calc(100%-1.875rem)] md:w-full md:max-w-[420px]">
                <Image
                  src="/about-photo.jpeg"
                  alt="Florencia outdoors in nature"
                  width={520}
                  height={680}
                  className="h-full w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-800"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 py-24">
          <h2 className="text-2xl font-display font-semibold">Contact</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 md:whitespace-nowrap">
            Interested in connecting or discussing internship opportunities? Feel
            free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-sky-400"
                aria-label={label}
                title={label}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Florencia Méndez Quintana</span>
          <div className="flex items-center gap-4">
            <span>Fullstack Developer Student</span>
            <a
              href="#top"
              className="transition hover:text-sky-600 dark:hover:text-sky-400"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
