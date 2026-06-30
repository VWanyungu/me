import { useState } from "react";
import { InteractiveBeams } from '../components/InteractiveBeams';
import { blogPosts } from '../lib/data';
import { formatDate } from '../lib/utils';

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

export default function Blog() {
  const [featured, ...rest] = blogPosts;
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="px-6 py-20 border-b border-ink/10 relative overflow-hidden">
        <InteractiveBeams />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* <p className=" text-xs uppercase tracking-widest text-muted mb-4">
            Writing
          </p> */}
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold tracking-tighter leading-[0.9]">
            Technical{" "}
            <span className="font-display italic font-normal text-green-700">
              Blog
            </span>
          </h1>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`font-mono-dm text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-150 ${activeTag === null
                ? "bg-green-700/5 text-green-700 border-green-700"
                : "border-ink/20 text-muted hover:border-green-700 hover:text-green-700"
                }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`font-mono-dm text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-150 ${activeTag === tag
                  ? "bg-green-700/5 text-green-700 border-green-700"
                  : "border-ink/20 text-muted hover:border-green-700 hover:text-green-700"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="px-6 py-8 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Featured post */}
          <a
            href={`${featured.link}`}
            target="_blank"
            className="group block mb-16"
          >
            <div className="grid grid-cols-1 gap-8 border border-ink/10 bg-surface rounded-2xl p-4 md:p-10 hover:border-green-700/30 transition-all duration-300 hover:-translate-y-0.5">
              <div className="">
                <div className="flex items-center gap-3 mb-6">
                  <span className=" text-xs uppercase tracking-widest text-green-700 border border-green-700/30 bg-green-700/5 px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                  {/* <span className=" text-xs text-muted">
                    {featured.readTime}
                  </span> */}
                </div>

                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-tight leading-tight text-ink mb-4 group-hover:text-green-700 transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>

                <div className="flex items-center gap-2  text-xs uppercase tracking-widest text-green-700">
                  Read Article →
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" text-xs bg-green-700 text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <p className=" text-xs text-muted">
                  {formatDate(featured.date)}
                </p> */}
              </div>
            </div>
          </a>

          {/* Rest of posts */}
          <div className="flex flex-col divide-y divide-ink/10">
            {filtered.map((post) => (
              <a
                key={post.slug}
                href={`${post.link}`}
                target="_blank"
                className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-surface/50 -mx-4 px-4  transition-colors duration-200"
              >
                {/* <div className="md:col-span-2">
                  <p className=" text-xs text-muted">
                    {formatDate(post.date)}
                  </p>
                </div> */}

                <div className="md:col-span-9">
                  <h3 className="font-semibold text-ink text-lg leading-snug mb-2 group-hover:text-green-700 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" text-xs text-green-700 bg-green-700/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <div className="md:col-span-1 flex items-start justify-end">
                  <span className=" text-xs text-muted">
                    {post.readTime}
                  </span>
                </div> */}
              </a>
            ))}
          </div>

          {/* Newsletter nudge */}
          <div className="mt-10 md:mt-20 bg-green-700 text-white rounded-2xl px-6 py-8 md:px-10 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                More writing on the way
              </h3>
              <p className="text-white/50 text-sm">
                I write about building full-stack applications and backend architecture
              </p>
            </div>
            <a
              href="https://discovertech.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-white/20 text-white  text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-green-light hover:text-green-light transition-colors duration-200 whitespace-nowrap"
            >
              Follow on Hashnode ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
