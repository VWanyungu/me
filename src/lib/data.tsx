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
        role: "Technology Solutions Lead",
        period: "2026 — Present",
        location: "Nairobi, Kenya",
        description: "Leading architecture and full-stack development of two core products: an offline first POS and inventory management system for Kenyan SMEs, and a tech products e-commerce platform, both built on React, Node.js/Express and PostgreSQL. & Driving all product and infrastructure decisions from system design and database schema to deployment and DevOps configuration. & Spearheading onboarding of the early technical team, establishing development workflows, coding standards and CI/CD practices from the ground up. & Designing and implementing backend APIs, frontend interfaces and infrastructure across both products simultaneously as the founding technical lead.",
        tags: ["React", "Typescript", "Node", "Express", "PostgreSQL"],
    },
    {
        company: "Project Management Unit, Ministry of Health",
        role: "Full Stack Developer",
        period: "2025 - 2026",
        location: "Nairobi, Kenya",
        description: "Built and improved dashboards and data collection forms for the Support Supervision Tool, a health worker performance monitoring platform. & Optimized CHT eCHIS XML forms to accommodate new data requirements and validation rules, coordinating directly with field users to gather feedback and iterate. & Wrote automated tests using Mocha and Chai integrated into GitLab CI/CD pipelines to validate backend logic and form behaviour. & Conducted QA across both platforms, tracked issues and produced reports to support monitoring and evaluation efforts.",
        tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "CHT", "GitLab"],
    },
    {
        company: "Masinde Muliro University of Science and Technology Christian Union",
        role: "Full Stack Developer",
        period: "2024 - 2025",
        location: "Nairobi, Kenya",
        description: "Built the organization's public website and a secure internal admin portal managing events, media, leader information and union resources. & Integrated the Google Drive API to pull and display existing photo libraries within the portal, eliminating manual re-uploading of legacy content. & Implemented session-based authentication and authorization for the admin portal; hosted and administered the platform via cPanel.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Google Drive API"],
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
    {
        slug: 'flow',
        title: 'Flow',
        featured: true,
        status: 'Live',
        year: '2025',
        tags: ['Full Stack', 'Django', 'Spotify API'],
        tagline: 'For smooth Spotify song on song transitions',
        description: 'A web application that allows users to create playlists of songs that flow well together. It uses the Spotify API to get song data and the ffmpeg library to create smooth transitions between songs.',
        stack: ['Django', 'react', 'ffmpeg', 'Docker', 'Spotify API', 'DSA'],
        link: 'https://step-builder--vwanyungu254.replit.app/',
    },
];

export const blogPosts = [
    {
        slug: "performance-optimizations-for-your-backend",
        title: "Performance Optimizations for Your Backend",
        excerpt: "Learn how to improve backend performance with practical techniques such as database indexing, connection pooling, caching, and background job queues to build faster and more scalable applications",
        date: "2026-05-21",
        tags: ["backend"],
        readTime: "13 min read",
        link: "https://discovertech.hashnode.dev/performance-optimizations-for-your-back-end"
    },
    {
        slug: "rate-limiting",
        title: "Rate Limiting",
        excerpt: "Learn how to design and implement effective rate limiting strategies to protect your APIs from abuse, ensure fair resource usage, and maintain system reliability. Explore common algorithms, implementation layers and industry best practices.",
        date: "2026-05-11",
        tags: ["backend"],
        readTime: "5 min read",
        link: "https://discovertech.hashnode.dev/rate-limiting"
    },
    {
        slug: "rest-api-design-with-express",
        title: "REST API Design with Express",
        excerpt: "Designing a REST API goes beyond exposing endpoints. Learn how to structure resources, choose appropriate HTTP status codes, implement versioning and handle pagination to improve usability and long-term maintainability.",
        date: "2025-12-13",
        tags: ["backend", "api"],
        readTime: "4 min read",
        link: "https://discovertech.hashnode.dev/rest-api-design-with-express"
    },
    {
        slug: "api-security",
        title: "API Security",
        excerpt: "Learn the essential principles of building secure, scalable, and maintainable APIs. This guide covers authentication, access control, input validation, data hashing, rate limiting, monitoring, database management, fault tolerance and other best practices for production-ready systems",
        date: "2025-12-13",
        tags: ["backend", "security", "api"],
        readTime: "3 min read",
        link: "https://discovertech.hashnode.dev/api-security"
    },
    {
        slug: "vpn-vs-proxy",
        title: "VPN vs Proxy",
        excerpt: "Understand the differences between VPNs and proxies, including how they work, their security implications, performance trade-offs, and use cases to help you choose the right solution for privacy and network access.",
        date: "2025-6-14",
        tags: ["backend"],
        readTime: "2 min read",
        link: "https://discovertech.hashnode.dev/vpn-vs-proxy"
    },
];