import ThemeToggle from "@/components/ThemeToggle";
import type { NavItem } from "@/types/portfolio";

type MobileNavProps = {
  navItems: NavItem[];
};

export default function MobileNav({ navItems }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-slate-50/95 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90 md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex flex-1 items-center justify-between gap-4 overflow-x-auto whitespace-nowrap text-[11px] text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-sky-600 dark:hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
