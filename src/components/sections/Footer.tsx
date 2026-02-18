export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
  );
}
