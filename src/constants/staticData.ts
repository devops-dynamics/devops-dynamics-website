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
        { title: "Company Review", link: "#" },
        { title: "Accounts Review", link: "#" },
        { title: "HR Consulting", link: "#" },
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
            title: "DevOps & Solutions Architecture:",
            description:
                "Whether you’re running an enterprise or just starting out, our DevOps solutions keep your operations efficient, reliable, and scalable. We use tools like Docker, Kubernetes, Jenkins, and Terraform to ensure that your infrastructure supports your business goals",
        },
        {
            id: 2,
            title: "Web Development for Local Businesses:",
            description:
                "From shop owners to real estate agents, we build user-friendly, modern websites that attract customers and grow your business. Using the latest technologies like React, Next.js, and Node.js, we create tailored websites that work for you.",
        },
        {
            id: 3,
            title: "SEO Optimization",
            description:
                "Make sure your business gets found by the right customers. Our SEO services boost your website’s ranking on search engines like Google, helping you attract more clients in your local area.",
        },
        {
            id: 4,
            title: "Network & System Administration:",
            description:
                "Whether it's a local server or a cloud solution, we manage your IT infrastructure so it’s secure, efficient, and always up and running. We handle everything from system setup to performance optimization, giving you peace of mind.",
        },
        {
            id: 5,
            title: "Custom Content Management:",
            description:
                "We provide easy-to-manage, secure content management systems (CMS) for your business. Whether it’s a basic site or a custom platform, we make updating your content simple and stress-free.",
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

const works = {
    header: {
        title: "Our Works",
        subTitle: "Proven solutions for real-world problems",
        description:
            "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
    },
    workDetails: [],
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
        ],
    },
    works: {
        title: "Some of our works",
        subtitle: "Transforming businesses with DevOps and web solutions for seamless performance.",
        description:
            "We harness technology to deliver impactful solutions, keeping your business competitive in an ever-changing digital landscape.",
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