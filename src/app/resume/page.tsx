export const metadata = {
  title: "Florencia Méndez Quintana | Resume",
  description: "Resume PDF",
};

export default function ResumePage() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200/80 bg-slate-50/90 px-6 py-4 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm font-medium">Resume</span>
          <a
            href="/#top"
            className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
          >
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-display font-semibold">Resume</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          You can view the PDF below or download a copy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/Florencia-Mendez-Resume-2026.pdf"
            download
            className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
          >
            Download PDF
          </a>
          <a
            href="/Florencia-Mendez-Resume-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
          >
            Open in new tab
          </a>
        </div>
        <div className="mt-8 h-[75vh] overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <iframe
            title="Resume PDF"
            src="/Florencia-Mendez-Resume-2026.pdf"
            className="h-full w-full"
          />
        </div>
      </main>
    </div>
  );
}
