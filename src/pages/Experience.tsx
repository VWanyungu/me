import { InteractiveBeams } from '../components/InteractiveBeams';
import { skills, experiences, meta } from '../lib/data';

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="px-6 py-20 border-b border-ink/10 relative overflow-hidden">
        {/* beam layer */}
        {/* <div className="beam-bg absolute inset-0" /> */}
        <InteractiveBeams />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* <p className="font-mono-dm text-xs uppercase tracking-widest text-muted mb-4">
            — Work History
          </p> */}
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold tracking-tighter leading-[0.9] mb-8">
            My{" "}
            <span className="font-display italic font-normal text-green-700">
              Experience
            </span>
          </h1>
          <p className="hidden md:block text-gray-500 max-w-lg leading-relaxed">
            {meta.bio}
          </p>
        </div>
      </div>

      {/* Experience list */}
      <section className="px-6 py-0 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col divide-y divide-ink/10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 group"
              >
                {/* Number + period */}
                {/* <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                  <span className="font-mono-dm text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-green-700">
                    {exp.period}
                  </span>
                </div> */}

                {/* Main content */}
                <div className="md:col-span-9">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-green-700 transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <p className="font-mono-dm text-sm text-muted mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  {exp.description.split("&").map((line, i) => (
                    <p key={i} className="text-gray-500 leading-relaxed text-sm max-w-xl mt-4">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 bg-green-700/5 text-green-700 rounded-full border border-green-700/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills deep-dive */}
      <section className="px-6 py-8 md:py-20 bg-surface">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono-dm text-xs uppercase tracking-widest text-muted mb-3">
            Technical Depth
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight mb-16">
            Stack &{" "}
            <span className="font-display italic font-normal text-green-700">
              Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((s) => (
              <div key={s.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-ink">{s.name}</span>
                    <span className="font-mono-dm text-xs text-muted/60 bg-surface border border-ink/10 px-2 py-0.5 rounded-full">
                      {s.category}
                    </span>
                  </div>
                  <span className="font-mono-dm text-xs text-green-700">{s.level}%</span>
                </div>
                <div className="h-px bg-ink/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-700 rounded-full"
                    style={{ width: `${s.level}%`, transition: "width 1.2s ease-out" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education note */}
      {/* <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono-dm text-xs uppercase tracking-widest text-muted mb-3">
                Education
              </p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-4">
                Masinde Muliro{" "}
                <span className="font-display italic font-normal text-green-700">
                  University
                </span>
              </h2>
              <p className="text-ink/50 leading-relaxed">
                B.Sc. Computer Science
              </p>
            </div>

            <div className="bg-surface rounded-2xl border border-ink/10 p-8">
              <p className="font-mono-dm text-xs uppercase tracking-widest text-muted mb-6">
                Key modules
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Neural Networks & AI",
                  "Disaster Recovery",
                  "Information Ethics",
                  "Modelling & Simulation",
                  "IT Entrepreneurship",
                ].map((m) => (
                  <li key={m} className="flex items-center gap-3 text-sm text-ink/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

