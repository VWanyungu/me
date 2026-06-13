import { InteractiveBeams } from '../components/InteractiveBeams';
import { meta } from '../lib/data';

function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col md:flex-row justify-center relative overflow-hidden px-4 md:px-60 pt-10 md:pt-36 pb-0">
      {/* Background grid accent */}
      {/* <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      /> */}

      <InteractiveBeams />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left column */}
          <div className="lg:col-span-8 fade-up">
            {/* Eyebrow */}
            {/* <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-green-forest" />
              <span className=" text-xs uppercase tracking-widest text-muted">
                Available for work · Nairobi, KE
              </span>
            </div> */}

            {/* Name block — the signature element */}
            <h1 className="leading-none mb-6">
              {/* <span className="block font-display italic font-normal text-[clamp(3.5rem,9vw,8rem)] text-ink/20 tracking-tight">
                Hello! I'm
              </span> */}
              <span className="block font-sans font-semibold text-[clamp(3.5rem,10vw,9rem)] text-ink tracking-tighter leading-[0.9]">
                Victor
              </span>
              <span className="block font-display italic font-bold text-[clamp(3rem,9vw,8rem)] text-green-forest tracking-tight leading-[0.95]">
                Wanyungu.
              </span>
            </h1>

            <p className="font-display text-gray-500 max-w-lg leading-relaxed my-8">
              {meta.bio}
            </p>

            {/* Role */}
            <p className="font-mono-dm text-sm uppercase tracking-[0.2em] text-muted mb-8">
              {meta.role}{" "}
              <span className="text-green-forest">· {meta.focus}</span>
            </p>

            {/* Tagline */}
            {/* <p className="text-ink/60 text-lg leading-relaxed max-w-xl mb-10">
              {meta.tagline}
            </p> */}

            {/* Values */}
            {/* <ul className="flex flex-col gap-2 mb-12">
              {meta.values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-ink/50">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-forest flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul> */}

            {/* CTAs */}
            {/* <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${meta.email}`}
                className="inline-flex items-center gap-2 bg-ink text-paper font-mono-dm text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-green-forest transition-colors duration-200"
              >
                Let's Talk
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-ink/20 text-ink font-mono-dm text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:border-green-forest hover:text-green-forest transition-colors duration-200"
              >
                Download CV ↓
              </a>
            </div> */}
          </div>

          {/* Right column — social strip */}
          {/* <div className="hidden lg:flex lg:col-span-4 flex-col items-end gap-6 pb-4">
            <div className="flex flex-col gap-3 text-right">
              {[
                { label: "GitHub", href: meta.github },
                { label: "LinkedIn", href: meta.linkedin },
                { label: "Twitter", href: meta.twitter },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-dm text-xs uppercase tracking-widest text-muted hover:text-green-forest transition-colors duration-200"
                >
                  {label} ↗
                </a>
              ))}
            </div>


            <div className="w-32 h-32 rounded-2xl border border-ink/10 bg-surface flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-green-forest/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-green-forest" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Scroll indicator */}
        {/* <div className="relative bottom-8 left-[-80px] flex items-center gap-3">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-px h-10 bg-ink/20" />
            <div className="w-px h-3 bg-green-forest animate-bounce" />
          </div>
          <span
            className="font-mono-dm text-xs uppercase tracking-widest text-muted"
            style={{ writingMode: "vertical-lr" }}
          >
            Scroll Down
          </span>
        </div> */}
      </div>

      <div className="max-w-6xl mx-auto w-full px-2 mt-3 mb-3 z-10">
        <div id="experience" className="flex flex-col h-full">
          <div className="stat-card">
            <h3 className="text-4xl font-bold text-green-forest animate__bounceIn">04</h3>
            <h6 className="text-xs text-gray-400 tracking-widest">YEARS</h6>
            <h6 className="text-xs text-gray-400 tracking-widest">EXPERIENCE</h6>
          </div>
          <div className="stat-card">
            <h3 className="text-4xl font-bold text-green-forest animate__bounceIn">03</h3>
            <h6 className="text-xs text-gray-400 tracking-widest">CLIENTS</h6>
            <h6 className="text-xs text-gray-400 tracking-widest">WORLDWIDE</h6>
          </div>
          <div className="stat-card">
            <h3 className="text-4xl font-bold text-green-forest animate__bounceIn">05</h3>
            <h6 className="text-xs text-gray-400 tracking-widest">TOTAL</h6>
            <h6 className="text-xs text-gray-400 tracking-widest">PROJECTS</h6>
          </div>

          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-dm my-4 text-xs uppercase tracking-widest text-muted hover:text-green-forest transition-colors duration-200"
          >
            Get in touch
          </a>

          <div className='flex gap-2 items-center w-full'>
            {[
              { href: 'https://twitter.com/WanyunguVictor', src: 'https://img.icons8.com/color/96/twitterx--v1.png', alt: 'Twitter' },
              { href: 'https://www.linkedin.com/in/victorwanyungu/', src: 'https://img.icons8.com/color/96/linkedin.png', alt: 'LinkedIn' },
              { href: 'https://github.com/VWanyungu', src: 'https://img.icons8.com/ios-glyphs/120/github.png', alt: 'GitHub' },
            ].map(({ href, src, alt }) => (
              <div onClick={() => window.open(href, '_blank')} className="cursor-pointer flex-1 h-28 rounded-2xl border border-ink/10 hover:border-green-forest/30 hover:bg-surface transition-colors duration-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full md:border-2 md:border-ink/10 hover:border-green-forest/30 flex items-center justify-center">
                  <img width="48" height="48" src={src} alt={alt} />
                </div>
              </div>
            ))}

            {/* <div className="flex-1 h-28 rounded-2xl border border-ink/10 bg-surface flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-green-forest/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-green-forest" />
              </div>
            </div>
            <div className="flex-1 h-28 rounded-2xl border border-ink/10 bg-surface flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-green-forest/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-green-forest" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
