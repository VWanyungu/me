export const meta = {
    name: "Victor Wanyungu",
    firstName: "Victor",
    lastName: "Wanyungu",
    role: "Full-Stack Developer",
    focus: "Backend Focus",
    email: "vicamboka@gmail.com",
    github: "https://github.com/VWanyungu",
    linkedin: "https://www.linkedin.com/in/victorwanyungu/",
    twitter: "https://twitter.com/WanyunguVictor",
    tagline: "I build systems that scale — clean APIs, reliable infrastructure, and the frontend to make it all visible.",
    bio: "Full-stack developer based in Nairobi, Kenya. I specialise in backend architecture, API design and TypeScript applications with a strong eye for the product experience on the frontend.",
};

export const skills = [
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Node.js / Express", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Backend" },
    { name: "React / Next.js", level: 82, category: "Frontend" },
    { name: "Supabase", level: 80, category: "Backend" },
    { name: "Knex.js", level: 78, category: "Backend" },
    { name: "CI/CD (GitLab/GitHub)", level: 75, category: "DevOps" },
    { name: "Docker", level: 65, category: "DevOps" },
];

export const experiences = [
    {
        company: "Melyvig Technologies",
        role: "Technology Solutions Lead (Co-founder)",
        period: "2024 — Present",
        location: "Nairobi, Kenya",
        description: "Leading product and engineering across multiple division products. Designed the Melyvig POS system architecture, company-wide design system, and co-founding engagement framework.",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    },
    {
        company: "Ministry of Health — PMU",
        role: "Software Developer",
        period: "2023 — 2024",
        location: "Nairobi, Kenya",
        description: "Developed and maintained the CHT/eCHIS community health platform. Worked with GitLab CI/CD pipelines and Mocha/Chai test suites for mission-critical health data systems.",
        tags: ["Node.js", "GitLab CI", "Mocha/Chai", "CHT"],
    },
    {
        company: "Freelance / Independent",
        role: "Full-Stack Developer",
        period: "2021 — 2023",
        location: "Remote",
        description: "Built RAP (a student subscription platform with M-Pesa integration), a SaaS product for university students",
        tags: ["M-Pesa Daraja", "Next.js", "Supabase", "Vercel"],
    },
];

export const projects = [
    {
        slug: 'rap',
        title: 'Revision Access Point',
        featured: true,
        status: 'Live',
        year: '2023',
        tags: ['Full Stack', 'PWA'],
        tagline: 'PWA for university students to access notes and past papers.',
        description:
            'A Progressive Web App that provides access to university lecture notes, exams, cats, assignments, quizes and tutorials for university students. It is a full stack application with a postgre database on Supabase and uses the ChatPDF api to generate quiz questions and answers.',
        stack: ['Tailwind', 'Node', 'Express', 'Supabase', 'ChatPDF API', 'Daraja API'],
        link: 'https://revision-access-point.vercel.app/',
    },
    {
        slug: 'calibre-steps',
        title: 'Calibre Steps',
        featured: false,
        status: 'Live',
        year: '2026',
        tags: ['Replit'],
        tagline: 'Turn knowledge into repeatable steps.',
        description: 'Build clear, structured guides that help others learn, complete tasks, and achieve consistent results. From cooking and DIY projects to workplace procedures and onboarding, turn experience into actionable instructions.',
        stack: ['Replit', 'AI', 'Daraja API'],
        link: 'https://step-builder--vwanyungu254.replit.app/',
    },
];

export const blogPosts = [
    {
        slug: "rate-limiting-patterns",
        title: "Rate Limiting in Node.js: Token Bucket, Leaky Bucket, and Redis Windows",
        excerpt: "A deep-dive into four rate limiting algorithms — when to use each, how they differ under load, and how to implement distributed limits with Redis.",
        date: "2024-11-10",
        tags: ["backend"],
        readTime: "9 min read",
    },
    {
        slug: "mpesa-daraja-supabase",
        title: "M-Pesa STK Push with Supabase Edge Functions",
        excerpt: "A practical walkthrough of integrating Safaricom's Daraja API inside a Supabase Edge Function — handling callbacks, JWT verification, and sandbox shortcode quirks.",
        date: "2024-10-04",
        tags: ["backend", "mpesa"],
        readTime: "7 min read",
    },
    {
        slug: "scaffold-prompt-system",
        title: "Preserving Architectural Knowledge with AI Scaffolding Prompts",
        excerpt: "How I built a SCAFFOLD_PROMPT.md system to encode my Node/Express/Knex architecture into a reusable instruction file — so AI tools start every project with the right mental model.",
        date: "2024-09-15",
        tags: ["backend", "ai"],
        readTime: "5 min read",
    },
    {
        slug: "cht-echis-ci",
        title: "CI/CD Practices for CHT Community Health Platforms",
        excerpt: "Lessons from running GitLab CI/CD pipelines on the Ministry of Health's eCHIS platform — test coverage, rollback strategies, and deployment discipline for mission-critical systems.",
        date: "2024-08-01",
        tags: ["backend"],
        readTime: "6 min read",
    },
];