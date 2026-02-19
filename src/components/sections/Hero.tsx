import Image from "next/image";
import type { HeroData } from "@/types/portfolio";

type HeroProps = {
  hero: HeroData;
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section
      id="hero"
      className="grid min-h-[calc(100dvh-4rem)] scroll-mt-16 gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-display font-semibold leading-tight md:text-5xl">
          {hero.name}
        </h1>
        <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          {hero.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="pointer-events-none absolute -inset-7 rounded-[2.6rem] bg-gradient-to-br from-sky-500/18 via-sky-500/8 to-transparent blur-[28px] dark:from-sky-400/22 dark:via-sky-400/10 dark:to-transparent" />
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={420}
            height={520}
            priority
            sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 70vw"
            className="relative w-72 max-w-full rounded-2xl object-cover md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
