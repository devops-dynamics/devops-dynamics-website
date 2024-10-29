// Interfaces for type safety
interface WorkDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    service: string | string[];
    link?: string;
    date: string;
    testimonial?: {
        name: string;
        position: string;
        testimonial: string;
    };
}

interface Works {
    header: {
        title: string;
        subTitle: string;
        description: string;
    };
    workDetails: WorkDetail[];
}

interface ServiceDetail {
    id: number;
    title: string;
    description: string;
}

interface Project {
    year: string;
    title: string;
    description: string;
}

interface NavigationLink {
    id: number;
    title: string;
    path: string;
}

interface FooterLink {
    title: string;
    link: string;
}

interface HomePage {
    header: {
        subtitle: string;
        description: string;
    };
    workedWith: {
        title: string;
        clients: string[];
    };
    works: {
        title: string;
        subtitle: string;
        description: string;
        projects: Project[];
    };
    testimonial: {
        review: string;
        companyName: string;
        company: string;
        clientImage: string;
    };
    services: {
        title: string;
        subtitle: string;
        description: string;
        serviceDetails: ServiceDetail[];
    };
}

// Define all data objects
const header = {
    navigation: {
        links: [
            {
                id: 1,
                title: "Services",
                path: "/services",
            },
            {
                id: 2,
                title: "Work",
                path: "/works",
            },
            {
                id: 3,
                title: "Blogs",
                path: "/blogs",
            },
            {
                id: 4,
                title: "About",
                path: "/about",
            },
        ],
    },
};

const footer = {
    services: [
        { title: "DevOps", link: "#" },
        { title: "Web Development", link: "#" },
        { title: "System Administration", link: "#" },
        { title: "SEO Optimisation", link: "#" },
    ],
    company: [
        { title: "About", link: "#" },
        { title: "Meet the Team", link: "#" },
    ],
    helpfulLinks: [
        { title: "Contact", link: "#" },
        { title: "FAQs", link: "#" },
    ],
    legal: [
        { title: "Accessibility", link: "#" },
        { title: "Returns Policy", link: "#" },
        { title: "Refund Policy", link: "#" },
        { title: "Hiring Statistics", link: "#" },
    ],
};

const about = {
    header: {
        title: "Our strength is collaboration",
        description:
            "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do. At DevOps Dynamics, we work closely with our clients to understand their needs and deliver tailored solutions that drive success.",
    },
    impact: {
        title: "Our Impact",
        stats: {
            employees: "5",
            clients: "100+ satisfied clients",
            projects: "Over 16 successful projects",
            revenue: "Over $6k in revenue",
        },
    },
};

const services = {
    header: {
        title: "Our Services",
        description: "A One-Stop Solution for Your Digital Needs",
    },
    servicesDetails: [
        {
            id: 1,
            title: "DevOps & Solutions Architecture",
            description:
                "We streamline your operations with tools like Docker, Kubernetes, and Jenkins, ensuring your systems are efficient, reliable, and scalable.",
        },
        {
            id: 2,
            title: "Web Development for Local Businesses",
            description:
                "Our modern, user-friendly websites attract more customers to your business. We build tailored sites using the latest technologies.",
        },
        {
            id: 3,
            title: "SEO Optimization",
            description:
                "Boost your visibility on search engines like Google to help local customers find you and drive more traffic to your site.",
        },
        {
            id: 4,
            title: "Network & System Administration",
            description:
                "We manage your IT infrastructure, ensuring it’s secure, efficient, and always running, whether it’s on-premises or in the cloud.",
        },
        {
            id: 5,
            title: "Custom Content Management",
            description:
                "Our CMS solutions make it easy to update your site, providing a secure, manageable platform tailored to your business needs.",
        },
    ],
    faq: [
        {
            id: 1,
            question: "What is your refund policy?",
            answer: "Refunds are handled on a case-by-case basis, depending on the project's terms and conditions.",
        },
        {
            id: 2,
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary based on scope and complexity. We work closely with clients to meet agreed deadlines.",
        },
        {
            id: 3,
            question: "Do you offer custom packages?",
            answer: "Yes, we tailor our services to fit the unique needs and goals of each client.",
        },
        {
            id: 4,
            question: "What payment methods do you accept?",
            answer: "We accept payments via Wise and bank transfers.",
        },
        {
            id: 5,
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide ongoing support to ensure your systems and applications run smoothly.",
        },
    ],
};

const works: Works = {
    header: {
        title: "Our Works",
        subTitle: "Proven solutions for real-world problems",
        description:
            "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
    },
    workDetails: [
        {
            id: 1,
            title: "Fleet Management System Automation",
            description: "Faced with a complex infrastructure challenge, we implemented a tailored Puppet infrastructure to streamline fleet management. By developing custom scripts and CI/CD integration, we ensured reliable and scalable operations across diverse environments.",
            image: "/works/fleet.jpg",
            company: "Transport Co.",
            service: "DevOps Infrastructure",
            date: "2024",
            testimonial: {
                name: "John Smith",
                position: "CTO, Transport Co.",
                testimonial: "DevOps Dynamics delivered an exceptional fleet management solution that significantly improved our operations."
            }
        },
        // More work details can be added here
    ]
};

const contact = {
    email: "suyash@devops-dynamics.com",
    phone: "+91 9763030376",
    address: "Pune, India",
    social: {
        twitter: "",
        facebook: "",
        linkedin: "https://www.linkedin.com/company/devops-dynamics",
        instagram: "",
    },
};

const homePage: HomePage = {
    header: {
        subtitle: "DevOps & Web Development Agency based in Pune, India.",
        description:
            "At DevOps Dynamics, we are committed to transforming your business with cutting-edge DevOps practices, infrastructure management, and web development solutions.",
    },
    workedWith: {
        title: "We have worked with numerous amazing people",
        clients: [
            "Voog Signage OÜ",
            "Erium",
            "Liberatum Solutions Ltd",
            "Ah Scaffolding Pte. Ltd.",
            "FSCL",
            "Roster Metrics",
            "Idea 2 Collective GmbH",
            "Software Assemblies",
            "MojoCore",
            "Calnera LLC",
            "Diwank Tomer",
            "Fady Heiba",
            "Keith Nezner",
            "Urick Ladonis",
            "Ahmad Alm",
            "Thomas Reilly",
            "Atoz S",
            "Jatin Jasoliya",
            "Rony Joseph",
        ],
    },
    works: {
        title: "Some of our works",
        subtitle: "Transforming businesses with DevOps and web solutions for seamless performance.",
        description: "We harness technology to deliver impactful solutions, keeping your business competitive in an ever-changing digital landscape.",
        projects: [
            {
                year: "2024",
                title: "Fleet Management System Automation",
                description: "Faced with a complex infrastructure challenge, we implemented a tailored Puppet infrastructure to streamline fleet management. By developing custom scripts and CI/CD integration, we ensured reliable and scalable operations across diverse environments.",
            },
            {
                year: "2023",
                title: "Custom Ubuntu ISO for Blockchain Nodes",
                description: "We led the customization of an Ubuntu ISO, optimized for seamless blockchain node deployment. Our solution reduced deployment time and improved node performance, enhancing overall operational efficiency.",
            },
            {
                year: "2024",
                title: "Dotfiles Management & SSH Key Automation",
                description: "Developed a secure and efficient system for managing dotfiles and SSH keys using Ansible. This project standardized development environments, improving security and reducing setup errors across macOS and Linux systems.",
            },
        ]
    },
    testimonial: {
        review: "An extremely cooperative and resourceful agency that consistently goes above and beyond to support their clients. Demonstrates impressive knowledge, adaptability, and professionalism, making them a trusted partner in any project. Has my full recommendation and endorsement.",
        companyName: "Kristo Kuuse",
        company: "(Voog Signage OÜ)",
        clientImage: "/clients/kristo.png"
    },
    services: {
        title: "Services",
        subtitle: "We help you innovate, optimize, and succeed in a fast-paced digital world.",
        description: "As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.",
        serviceDetails: services.servicesDetails,
    },
};

// Single export statement for all data and types
export type { ServiceDetail, Project, HomePage, NavigationLink, FooterLink, WorkDetail, Works};
export { header, footer, about, services, works, contact, homePage };
