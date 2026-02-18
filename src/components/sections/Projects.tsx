import Image from "next/image";
import type { Project } from "@/types/portfolio";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
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
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                  className="h-48 w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <span className="font-display text-3xl">&lt;/&gt;</span>
              </div>
            )}
            <div className="flex items-center gap-4">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={40}
                  height={40}
                  sizes="40px"
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
            {project.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
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
  );
}
