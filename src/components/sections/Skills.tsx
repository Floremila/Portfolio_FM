import type { SkillGroup } from "@/types/portfolio";

type SkillsProps = {
  skillGroups: SkillGroup[];
};

export default function Skills({ skillGroups }: SkillsProps) {
  return (
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
  );
}
