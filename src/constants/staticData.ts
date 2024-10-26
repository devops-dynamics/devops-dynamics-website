// Define all data objects first
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
        {
            title: "Company Review",
            link: "#",
        },
        {
            title: "Accounts Review",
            link: "#",
        },
        {
            title: "HR Consulting",
            link: "#",
        },
        {
            title: "SEO Optimisation",
            link: "#",
        },
    ],
    company: [
        {
            title: "About",
            link: "#",
        },
        {
            title: "Meet the Team",
            link: "#",
        },
    ],
    helpfulLinks: [
        {
            title: "Contact",
            link: "#",
        },
        {
            title: "FAQs",
            link: "#",
        },
    ],
    legal: [
        {
            title: "Accessibility",
            link: "#",
        },
        {
            title: "Returns Policy",
            link: "#",
        },
        {
            title: "Refund Policy",
            link: "#",
        },
        {
            title: "Hiring Statistics",
            link: "#",
        },
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
    // ... rest of about data
};

const services = {
    header: {
        title: "Our Services",
        description: "A One-Stop Solution for Your Digital Needs",
    },
    servicesDetails: [
        {
            id: 1,
            title: "DevOps & Solutions Architecture :",
            description:
                "Our team specializes in designing and implementing scalable DevOps solutions that align with your business goals. We leverage tools like Docker, Kubernetes, Jenkins, Terraform, and Ansible to ensure your infrastructure is resilient and adaptable.",
        },
        
        {
            id: 2,
            title: "Web Development:",
            description:
                "We craft beautiful, functional websites and applications using the latest technologies such as React, Next.js, and Node.js. Whether it's a marketing site or a complex web application, we have the expertise to deliver exceptional results.",
        },
        {
            id: 3,
            title: "Network & System Administration:",
            description:
                "From configuring high-performance servers to managing complex cloud environments, our system administration services ensure your IT infrastructure is secure, reliable, and efficient.",
        },
        {
            id: 4,
            title: "Custom Content Management:",
            description:
                "Tailored solutions for managing your digital content, ensuring it’s accessible, secure, and easy to update. We integrate with popular CMS platforms and build custom solutions when needed.",
        },
        // ... rest of your services
    ],
    faq: [
        {
            id: 1,
            question: "What is your refund policy?",
            answer: "Refunds are handled on a case-by-case basis, depending on the project's terms and conditions."
        },
        {
            id: 2,
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary based on scope and complexity. We work closely with clients to meet agreed deadlines."
        },
        {
            id: 3,
            question: "Do you offer custom packages?",
            answer: "Yes, we tailor our services to fit the unique needs and goals of each client."
        },
        {
            id: 4,
            question: "What payment methods do you accept?",
            answer: "We accept payments via Wise and bank transfers."
        },
        {
            id: 5,
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide ongoing support to ensure your systems and applications run smoothly."
        }
    ]
};

const works = {
    header: {
        title: "Our Works",
        subTitle: "Proven solutions for real-world problems",
        description:
            "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
    },
    workDetails: [
        // ... work details
    ],
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

const homePage = {
    header: {
        
        subtitle: "DevOps & Web Development Agency based in Pune, India.",
        description:
            "At DevOps Dynamics, we are committed to transforming your business with cutting-edge DevOps practices, infrastructure management, and web development solutions.",
    },
    workedWith: {
        title: "We have worked with numerous amazing people",
        clients: [
            "Voog Signage OÜ",
            "Fady Heiba",
            "Erium",
            "Liberatum Solutions Ltd",
            "Ah Scaffolding Pte. Ltd.",
            "Calnera LLC",
            "Keith Nezner",
            "Urick Ladonis",
            "Ahmad Alm",
            "Roster Metrics",
            "Thomas Reilly",
            "Atoz S",
            "Jatin Jasoliya",
            "Software Assemblies",
            "MojoCore",
            "Rony Joseph",
            "Diwank Tomer",
            "FSCL",
            "Idea 2 Collective GmbH",
            "Steve Taylor",
        ]
    },
    works: {
        title: "Some of our works",
        subtitle: "Transforming businesses with DevOps and web solutions for seamless performance.",
        description:
            "We harness technology to deliver impactful solutions, keeping your business competitive in an ever-changing digital landscape.",
    },
    testimonial: {
        quote: "Harnessing TechnologAt DevOps Dynamics, we are committed to transforming your business with cutting-edge DevOps practices, infrastructure management, and web development solutions. Our mission is to bridge the gap between development and operations, ensuring seamless deployments, scalable infrastructures, and optimized performance for your projects.y for Business Excellence.",
        companyName: "DevOps Dynamics"
    },
    services: {
        title: "Services",
        subtitle: "We help you innovate, optimize, and succeed in a fast-paced digital world.",
        description:
            "As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.",
        serviceDetails: services.servicesDetails,
    },
};

// Single export statement for all data
export {
    header,
    footer,
    about,
    services,
    works,
    contact,
    homePage,
};