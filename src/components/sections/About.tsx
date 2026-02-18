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
              I'm a Java Developer student at Stockholm Tekniska Institut,
              originally from Montevideo and currently based in Stockholm,
              seeking an LIA internship. I'm curious and motivated by
              collaborative problem-solving, and I enjoy working in teams toward
              shared goals. I adapt easily to new tools, environments, and ways
              of working, with a strong interest in understanding how systems
              and people interact.
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
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 100vw"
              className="h-full w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
