import type { ContactLink } from "@/types/portfolio";

type ContactProps = {
  contactLinks: ContactLink[];
};

export default function Contact({ contactLinks }: ContactProps) {
  return (
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
  );
}
