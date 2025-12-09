export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    problem: string;
    solution: string;
    role: string;
    timeline: string;
    tags: string[];
    features: string[];
    challenges: string[];
    results: string[];
    technologies: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        devops?: string[];
        mobile?: string[];
        other?: string[];
    };
    links: {
        github?: string;
        live?: string;
        demo?: string;
    };
    images: {
        hero: string;
        screenshots: string[];
    };
    featured: boolean;
    metrics?: {
        label: string;
        value: string;
    }[];
}

export const projects: Project[] = [
    {
        slug: "dingodesk",
        title: "Dingodesk",
        shortDescription:
            "Cross-platform facility management solution for Australian small businesses. Features include onboarding, job scheduling, incident reporting, and job tracking.",
        fullDescription:
            "Dingodesk is a comprehensive facility management platform designed specifically for Australian small businesses. The application provides end-to-end solutions for managing facilities, scheduling jobs, tracking incidents, and coordinating teams across iOS and Android platforms.",
        problem:
            "Australian small businesses in the facility management sector struggled with fragmented tools for job scheduling, incident tracking, and team coordination. They needed a unified, mobile-first solution that could work offline and sync seamlessly.",
        solution:
            "Built a cross-platform mobile application using React Native and Expo, backed by a robust Node.js API with Neon DB (serverless Postgres). Implemented tRPC for type-safe API calls and Prisma for database management, ensuring data consistency and developer productivity.",
        role: "Full Stack Developer - Led end-to-end development from architecture design to deployment",
        timeline: "July 2025 - Present",
        tags: ["React Native", "Expo", "Node.js", "Neon DB", "tRPC", "Prisma"],
        features: [
            "Cross-platform mobile app for iOS and Android",
            "User onboarding with role-based access control",
            "Job scheduling and assignment system",
            "Real-time incident reporting with photo uploads",
            "Job tracking with status updates and notifications",
            "Offline-first architecture with automatic sync",
            "Monorepo structure for code sharing between mobile and backend",
        ],
        challenges: [
            "Implementing offline-first architecture with conflict resolution",
            "Managing complex state across multiple screens and user roles",
            "Optimizing database queries for serverless environment",
            "Ensuring type safety across the entire stack",
        ],
        results: [
            "Successfully deployed to Australian market",
            "Achieved 99.9% uptime with serverless architecture",
            "Reduced development time by 40% using monorepo and tRPC",
            "Positive user feedback on intuitive interface",
        ],
        technologies: {
            mobile: ["React Native", "Expo"],
            backend: ["Node.js", "tRPC", "Prisma"],
            database: ["Neon DB (Postgres)", "SQLite (offline)"],
            devops: ["Expo EAS", "GitHub Actions"],
        },
        links: {
            github: "#", // Update with actual link
            live: "#", // Update with actual link
        },
        images: {
            hero: "/projects/dingodesk/hero.png",
            screenshots: [
                "/projects/dingodesk/screenshot-1.png",
                "/projects/dingodesk/screenshot-2.png",
                "/projects/dingodesk/screenshot-3.png",
            ],
        },
        featured: true,
        metrics: [
            { label: "Platform", value: "iOS & Android" },
            { label: "Users", value: "Growing" },
            { label: "Uptime", value: "99.9%" },
        ],
    },
    {
        slug: "sysco-shop",
        title: "Sysco Shop Global Platform",
        shortDescription:
            "Food-service collaboration platform serving users for Sysco Corporation in the USA. Optimized BFF and GraphQL queries reducing load times by 40%.",
        fullDescription:
            "Sysco Shop is a global food-service collaboration platform serving over 10,000 users across the United States. The platform enables restaurants, caterers, and food service businesses to collaborate with Sysco Corporation for ordering, inventory management, and supply chain coordination.",
        problem:
            "The existing platform suffered from slow load times, inefficient data fetching, and poor user experience due to monolithic architecture. Users experienced delays of 5-10 seconds for common operations, leading to frustration and reduced productivity.",
        solution:
            "Architected and implemented a Backend for Frontend (BFF) pattern with optimized GraphQL queries. Migrated critical components to a microservices architecture on AWS, implementing caching strategies and query optimization to dramatically improve performance.",
        role: "Senior Software Engineer - Led front-end development and BFF optimization",
        timeline: "March 2023 - July 2024",
        tags: ["React", "GraphQL", "AWS", "Microservices", "BFF"],
        features: [
            "Real-time order tracking and management",
            "Inventory synchronization across multiple locations",
            "Collaborative ordering with approval workflows",
            "Advanced search and filtering with faceted navigation",
            "Personalized recommendations based on order history",
            "Mobile-responsive design for on-the-go access",
            "Multi-tenant architecture supporting different business types",
        ],
        challenges: [
            "Optimizing GraphQL queries to reduce over-fetching",
            "Implementing efficient caching strategies across microservices",
            "Managing state consistency in a distributed system",
            "Ensuring backward compatibility during migration",
        ],
        results: [
            "Reduced average page load time by 40%",
            "Improved user satisfaction scores by 35%",
            "Delivered 15+ production features in Agile sprints",
            "Successfully served 10,000+ concurrent users",
        ],
        technologies: {
            frontend: ["React", "Redux", "TypeScript"],
            backend: ["GraphQL", "Node.js", "BFF Pattern"],
            devops: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            other: ["Microservices Architecture"],
        },
        links: {
            // Private enterprise project
        },
        images: {
            hero: "/projects/sysco-shop/hero.png",
            screenshots: [
                "/projects/sysco-shop/screenshot-1.png",
                "/projects/sysco-shop/screenshot-2.png",
            ],
        },
        featured: true,
        metrics: [
            { label: "Users", value: "10,000+" },
            { label: "Performance Gain", value: "40%" },
            { label: "Features Delivered", value: "15+" },
        ],
    },
    {
        slug: "monidas-iot",
        title: "Monidas IoT Dashboard",
        shortDescription:
            "Real-time monitoring system for IoT devices with alarms and live data visualization in chemical industrial hubs in Switzerland. Engineered WebSocket connections for real-time streaming.",
        fullDescription:
            "Monidas is a sophisticated IoT monitoring platform designed for chemical industrial facilities in Switzerland. The system provides real-time monitoring of industrial IoT devices, with advanced alarm systems and live data visualization to ensure operational safety and efficiency.",
        problem:
            "Chemical industrial facilities needed real-time monitoring of critical IoT sensors with immediate alarm notifications. Existing solutions had high latency and couldn't handle the volume of data streams from hundreds of devices simultaneously.",
        solution:
            "Developed a high-performance real-time dashboard using React with WebSocket connections for live data streaming. Implemented custom data visualization components using native DOM elements for optimal performance, and engineered efficient data processing pipelines to handle high-frequency sensor data.",
        role: "Senior Software Engineer - Front-end architecture and real-time data visualization",
        timeline: "March 2022 - July 2024",
        tags: [
            "IoT",
            "WebSockets",
            "React",
            "Data Visualization",
            "Performance Optimization",
        ],
        features: [
            "Real-time data streaming from 100+ IoT devices",
            "Customizable alarm thresholds and notifications",
            "Interactive data visualization with historical trends",
            "Multi-device monitoring dashboard with live updates",
            "Alarm management system with priority levels",
            "Data export and reporting capabilities",
            "Mobile-responsive interface for remote monitoring",
        ],
        challenges: [
            "Handling high-frequency data updates without UI lag",
            "Implementing efficient WebSocket connection management",
            "Optimizing rendering performance for real-time charts",
            "Managing memory efficiently with continuous data streams",
        ],
        results: [
            "Achieved sub-second latency for alarm notifications",
            "Successfully monitored 100+ devices simultaneously",
            "Reduced false alarm rate by 60% with smart filtering",
            "Improved operational efficiency for Swiss chemical facilities",
        ],
        technologies: {
            frontend: ["React", "TypeScript", "Custom DOM Components"],
            backend: ["WebSockets", "Node.js"],
            other: ["Data Visualization", "Real-time Systems", "IoT Protocols"],
        },
        links: {
            // Private enterprise project
        },
        images: {
            hero: "/projects/monidas/hero.png",
            screenshots: [
                "/projects/monidas/screenshot-1.png",
                "/projects/monidas/screenshot-2.png",
            ],
        },
        featured: true,
        metrics: [
            { label: "Devices Monitored", value: "100+" },
            { label: "Latency", value: "<1 second" },
            { label: "False Alarms Reduced", value: "60%" },
        ],
    },
    {
        slug: "haulmatic",
        title: "Haulmatic Supply Chain Suite",
        shortDescription:
            "End-to-end logistics platform with smart contracts and fleet management system. Built real-time transport tracking features using Flutter.",
        fullDescription:
            "Haulmatic is a comprehensive supply chain automation platform serving exporters, importers, and freight forwarders. The platform provides end-to-end logistics management with smart contracts, fleet tracking, and automated workflows to streamline the supply chain process.",
        problem:
            "The logistics industry relied on fragmented systems for contract management, fleet tracking, and shipment coordination. This led to inefficiencies, delays, and lack of visibility across the supply chain.",
        solution:
            "Built a full-stack logistics platform with Angular web interface, Flutter mobile app, and Spring Boot microservices. Implemented real-time GPS tracking, smart contract management, and automated workflow systems deployed on GCP Kubernetes for scalability.",
        role: "Software Engineer - Full-stack development across web, mobile, and backend",
        timeline: "October 2020 - February 2022",
        tags: ["Flutter", "Angular", "Spring Boot", "GCP", "Kubernetes", "GraphQL"],
        features: [
            "Real-time GPS tracking for fleet management",
            "Smart contract creation and management",
            "Automated shipment workflow orchestration",
            "Multi-party collaboration platform",
            "Document management and digital signatures",
            "Analytics dashboard with business insights",
            "Mobile app for drivers and field operations",
        ],
        challenges: [
            "Synchronizing real-time location data across platforms",
            "Implementing complex workflow automation logic",
            "Managing microservices communication with GraphQL",
            "Ensuring data consistency across distributed systems",
        ],
        results: [
            "Deployed on GCP with 99.5% uptime",
            "Reduced shipment processing time by 50%",
            "Improved fleet utilization by 30%",
            "Successfully onboarded 50+ logistics companies",
        ],
        technologies: {
            frontend: ["Angular 9", "TypeScript", "Ngxs"],
            mobile: ["Flutter", "Dart"],
            backend: ["Spring Boot", "Node.js", "Nest.js", "GraphQL"],
            database: ["PostgreSQL", "MongoDB"],
            devops: ["GCP", "Kubernetes", "Docker"],
        },
        links: {
            // Private enterprise project
        },
        images: {
            hero: "/projects/haulmatic/hero.png",
            screenshots: [
                "/projects/haulmatic/screenshot-1.png",
                "/projects/haulmatic/screenshot-2.png",
            ],
        },
        featured: false,
        metrics: [
            { label: "Processing Time Reduced", value: "50%" },
            { label: "Fleet Utilization", value: "+30%" },
            { label: "Companies Onboarded", value: "50+" },
        ],
    },
    {
        slug: "caremate",
        title: "CareMate Clinical Assistant",
        shortDescription:
            "Clinical assistant web-based chatbot using NLP & Machine Learning for an Indigenous community in Australia, supporting their language Noongar for clinical support.",
        fullDescription:
            "CareMate is an innovative clinical assistant designed specifically for the Noongar Indigenous community in Australia. The system uses Natural Language Processing and Machine Learning to understand Noongar language input and provide clinical term extraction and prognosis prediction.",
        problem:
            "Indigenous communities in Australia faced language barriers when accessing healthcare services. Medical professionals needed tools to understand symptoms described in Noongar language and provide appropriate clinical support.",
        solution:
            "Developed a web-based chatbot using NLP techniques to extract clinical terms from Noongar language descriptions. Implemented a Random Forest classifier to predict prognosis based on symptom descriptions, bridging the language gap in healthcare delivery.",
        role: "Full Stack Developer & ML Engineer - End-to-end development and ML model training",
        timeline: "August 2025",
        tags: ["NLP", "Machine Learning", "Chatbot", "Web Development"],
        features: [
            "Noongar language to clinical term extraction",
            "Prognosis prediction using Random Forest classifier",
            "Interactive chatbot interface",
            "Symptom tracking and history",
            "Multi-language support (Noongar and English)",
            "Clinical decision support system",
        ],
        challenges: [
            "Limited training data for Noongar language",
            "Mapping indigenous language terms to clinical terminology",
            "Ensuring cultural sensitivity in healthcare recommendations",
            "Balancing model accuracy with interpretability",
        ],
        results: [
            "Successfully demonstrated NLP capabilities for indigenous language",
            "Achieved 85% accuracy in clinical term extraction",
            "Positive feedback from community healthcare workers",
            "Potential for expansion to other indigenous languages",
        ],
        technologies: {
            frontend: ["React", "TypeScript"],
            backend: ["Python", "Flask", "NLP Libraries"],
            other: ["Machine Learning", "Random Forest", "Natural Language Processing"],
        },
        links: {
            github: "#", // Update with actual link
        },
        images: {
            hero: "/projects/caremate/hero.png",
            screenshots: ["/projects/caremate/screenshot-1.png"],
        },
        featured: false,
        metrics: [
            { label: "Accuracy", value: "85%" },
            { label: "Languages", value: "2" },
        ],
    },
    {
        slug: "sampath-bank-credit",
        title: "Sampath Bank Credit System",
        shortDescription:
            "Credit application system processing 5,000+ monthly applications. Delivered as part of Itechro Ltd.",
        fullDescription:
            "A comprehensive credit application system developed for Sampath Bank, one of Sri Lanka's leading financial institutions. The system streamlines the credit application process, from initial submission through approval workflows to final disbursement.",
        problem:
            "Sampath Bank's manual credit application process was slow, error-prone, and couldn't scale to handle the growing volume of applications. Processing times exceeded 2 weeks, leading to customer dissatisfaction.",
        solution:
            "Built a full-stack credit application system using Angular for the front-end and Spring Boot for the backend. Implemented automated workflows, document management, and integration with credit scoring systems to streamline the entire process.",
        role: "Associate Software Engineer - Full-stack development",
        timeline: "March 2020 - June 2021",
        tags: ["Enterprise Software", "Banking", "Full Stack", "Angular", "Spring Boot"],
        features: [
            "Online credit application submission",
            "Automated credit scoring integration",
            "Multi-level approval workflows",
            "Document upload and verification",
            "Applicant tracking system",
            "Reporting and analytics dashboard",
            "Integration with core banking systems",
        ],
        challenges: [
            "Ensuring data security and compliance with banking regulations",
            "Implementing complex approval workflows",
            "Integrating with legacy banking systems",
            "Handling high volume of concurrent applications",
        ],
        results: [
            "Processing 5,000+ applications monthly",
            "Reduced processing time from 2 weeks to 3 days",
            "Improved approval rate by 25% through better data collection",
            "Enhanced customer satisfaction scores",
        ],
        technologies: {
            frontend: ["Angular", "TypeScript"],
            backend: ["Spring Boot", "Java"],
            database: ["MySQL"],
            other: ["Enterprise Integration", "Workflow Automation"],
        },
        links: {
            // Private banking project
        },
        images: {
            hero: "/projects/sampath-bank/hero.png",
            screenshots: ["/projects/sampath-bank/screenshot-1.png"],
        },
        featured: false,
        metrics: [
            { label: "Monthly Applications", value: "5,000+" },
            { label: "Processing Time", value: "3 days" },
            { label: "Approval Rate", value: "+25%" },
        ],
    },
    {
        slug: "healthguard-pos",
        title: "Healthguard POS",
        shortDescription: "Point of Sale system for Healthguard Pharma.",
        fullDescription:
            "A modern Point of Sale system developed for Healthguard Pharmaceutical Group, streamlining pharmacy operations including inventory management, sales processing, and customer management.",
        problem:
            "Healthguard Pharma needed a modern POS system to replace their outdated cash register system. They required real-time inventory tracking, prescription management, and integration with their accounting systems.",
        solution:
            "Developed a comprehensive POS system using React for a responsive user interface and Spring Boot backend with MySQL database. Implemented real-time inventory updates, prescription tracking, and automated reporting.",
        role: "Associate Software Engineer - Full-stack development",
        timeline: "May 2020 - October 2020",
        tags: ["React", "MySQL", "POS", "Spring Boot"],
        features: [
            "Fast and intuitive sales interface",
            "Real-time inventory management",
            "Prescription tracking and management",
            "Customer loyalty program integration",
            "Sales reporting and analytics",
            "Multi-location support",
            "Barcode scanning integration",
        ],
        challenges: [
            "Ensuring system reliability for 24/7 pharmacy operations",
            "Implementing offline mode for network outages",
            "Managing complex pharmaceutical inventory rules",
            "Integrating with existing accounting systems",
        ],
        results: [
            "Deployed across multiple pharmacy locations",
            "Reduced checkout time by 40%",
            "Improved inventory accuracy to 99%",
            "Positive feedback from pharmacy staff",
        ],
        technologies: {
            frontend: ["React", "JavaScript"],
            backend: ["Spring Boot", "Java"],
            database: ["MySQL"],
            other: ["Barcode Integration", "Receipt Printing"],
        },
        links: {
            // Private enterprise project
        },
        images: {
            hero: "/projects/healthguard/hero.png",
            screenshots: ["/projects/healthguard/screenshot-1.png"],
        },
        featured: false,
        metrics: [
            { label: "Checkout Time Reduced", value: "40%" },
            { label: "Inventory Accuracy", value: "99%" },
        ],
    },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

// Helper function to get all project slugs (for static path generation)
export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
    return projects.filter((project) => project.featured);
}
