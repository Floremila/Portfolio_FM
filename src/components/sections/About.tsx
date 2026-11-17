import Image from "next/image";

export default function About() {
  return (
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
              I&apos;m a Java Developer student at Stockholm Tekniska Institut,
              originally from Montevideo and based in Stockholm, looking for my
              first role in tech. I&apos;m motivated by collaborative
              problem-solving and by understanding how systems and people
              interact.
            </p>
            <p>
              Before moving into development I worked as a talent acquisition
              coordinator, and earlier in administrative and finance operations
              (including SAP). That background shapes how I build: I
              communicate clearly, think in structured steps and coordinate
              easily across different roles.
            </p>
            <p>
              Outside of work I enjoy nature, novels in Spanish, ceramics,
              knitting and dance, ideally shared with family or friends.
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
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 100vw"
              className="h-full w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
