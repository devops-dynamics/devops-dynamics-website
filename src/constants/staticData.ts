import { title } from "process";
import { date } from "zod";

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

// for about page
const about = {
    header: {
        title: "Our strength is collaboration",
        description:
            "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do. At DevOps Dynamics, we work closely with our clients to understand their needs and deliver tailored solutions that drive success.",
    },
    impact: {
        title: "Our Impact",
        stats: {
            employees: "100",
            clients: "15 satisfied clients",
            projects: "Over 16 successful projects",
            revenue: "Over $5k in revenue",
        },
    },
    introduction: {
        title: "Unlock your potential with DevOps Dynamics",
        description:
            "Founded by Suyash Bhawsar, DevOps Dynamics is committed to delivering top-notch DevOps and Web Development services. Our team of experts works diligently to ensure that every project is a success, from initial consultation to final deployment.",
    },
    leadership: [
        {
            name: "Suyash Bhawsar",
            position: "Founder & DevOps Engineer",
            link: "https://www.linkedin.com/in/suyashbhawsar",
            image: "/user.jpeg",
            description:
                "Suyash is a seasoned DevOps Engineer and Linux System Administrator with a passion for technology and innovation. He holds an AWS Certified Solutions Architect - Associate certification and a Bachelor of Engineering in Computer Engineering.",
        },
        {
            name: "Vrushali Kudande",
            position: "Linux SysAdmin",
            link: "https://www.linkedin.com/in/janedoe",
            image: "/user.jpeg",
            description:
                "Vrushali oversees the business operations and ensures that all client projects are managed efficiently and effectively.",
        },
        {
            name: "Sanchari Mandal",
            position: "Web Developer",
            link: "https://www.linkedin.com/in/johnsmith",
            image: "/user.jpeg",
            description:
                "Sanchari brings fresh ideas and innovative solutions to the team, helping to drive our projects forward.",
        },
    ],
    team: [
        {
            name: "Suyash Bhawsar",
            position: "Founder & DevOps Engineer",
            link: "https://www.linkedin.com/in/suyashbhawsar",
            image: "/user.jpeg",
            description:
                "Suyash is a seasoned DevOps Engineer and Linux System Administrator with a passion for technology and innovation. He holds an AWS Certified Solutions Architect - Associate certification and a Bachelor of Engineering in Computer Engineering.",
        },
        {
            name: "Vrushali Kudande",
            position: "Linux SysAdmin",
            link: "https://www.linkedin.com/in/janedoe",
            image: "/user.jpeg",
            description:
                "Vrushali oversees the business operations and ensures that all client projects are managed efficiently and effectively.",
        },
        {
            name: "Sanchari Mandal",
            position: "Web Developer",
            link: "https://www.linkedin.com/in/johnsmith",
            image: "/user.jpeg",
            description:
                "Sanchari brings fresh ideas and innovative solutions to the team, helping to drive our projects forward.",
        },
    ],
    values: {
        title: "Balance Your Passion with Our Passion for Life",
        description:
            "We are a group of like-minded people who share the same core values",
        coreValues: [
            {
                title: "loyalty",
                description: "Our team has been with us since the start.",
            },
            {
                title: "trust",
                description: "We don't have various human resources.",
            },
            {
                title: "compassion",
                description: "You never know what someone is going through.",
            },
        ],
    },
};

// for services page
const services = {
    header: {
        title: "Our Services",
        description:
            "Our enthusiasm is rooted in advancing our knowledge and mastery in the artistic domain",
    },

    servicesDetails: [
        {
            id: 1,
            title: "DevOps & Solutions Architecture",
            description:
                "We design and implement scalable, automated infrastructure tailored to your business.",
        },
        {
            id: 2,
            title: "Web Development",
            description:
                "Our developers create responsive, user-friendly web applications that meet your business needs.",
        },
        {
            id: 3,
            title: "Network & System Administration",
            description:
                "We optimize and manage server environments for maximum reliability and performance.",
        },
        {
            id: 4,
            title: "CI/CD Pipeline Implementation",
            description:
                "We streamline your development process with efficient CI/CD pipeline setups.",
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
            answer: "Yes, we tailor our services to fit the unique needs and goals of each client..",
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

// contact information
const contact = {
    email: "suyash@devops-dynamics.com",
    phone: "",
    address: "Pune, India",
    social: {
        twitter: "",
        facebook: "",
        linkedin: "https://www.linkedin.com/company/devops-dynamics",
        instagram: "",
    },
};

// for work page
const works = {
    header: {
        title: "Our Works",
        subTitle: "Proven solutions for real-world problems",
        description:
            "We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade.",
    },
    workDetails: [
        {
            id: 1,
            title: "Brand Identity",
            description:
                "We help you create a brand identity that resonates with your target audience.",
            image: "/brand-identity.jpg",
            company: "Company A",
            service: "Web Development",
            date: "January 2023",
            link: "#",
            testimonial: {
                name: "John Doe",
                position: "CEO, Company A",
                testimonial:
                    "DevOps Dynamics has been a valuable partner in helping us create a brand identity that resonates with our target audience. Their team of experts has been instrumental in helping us achieve our goals and drive results.",
            },
        },
        {
            id: 2,
            title: "Web Development",
            description:
                "Our team of expert web developers will bring your vision to life.",
            image: "/web-development.jpg",
            company: "Company B",
            service: "Web Development, CMS",
            date: "February 2023",
            testimonial: {
                name: "Jane Doe",
                position: "CEO, Company B",
                testimonial:
                    "DevOps Dynamics has been a valuable partner in helping us create a brand identity that resonates with our target audience. Their team of experts has been instrumental in helping us achieve our goals and drive results.",
            },
        },
    ],
};

const homePage = {
    header: {
        title: "Welcome to DevOps Dynamics",
        subtitle: "DevOps & Web Development Agency based in Pune, India.",
        description:
            "At DevOps Dynamics, we are committed to transforming your business with cutting-edge DevOps practices, infrastructure management, and web development solutions. Our mission is to bridge the gap between development and operations, ensuring seamless deployments, scalable infrastructures, and optimized performance for your projects.",
    },
    workedWith: {
        title: "We've worked with",
        clients: [
            {
                name: "Company A",
                image: "/company-a.jpg",
            },
            {
                name: "Company B",
                image: "/company-b.jpg",
            },
            {
                name: "Company C",
                image: "/company-c.jpg",
            },
            {
                name: "Company D",
                image: "/company-d.jpg",
            },
            {
                name: "Company E",
                image: "/company-d.jpg",
            },
            {
                name: "Company F",
                image: "/company-d.jpg",
            },
            {
                name: "Company D",
                image: "/company-d.jpg",
            },
            {
                name: "Company D",
                image: "/company-d.jpg",
            },
            {
                name: "Company D",
                image: "/company-d.jpg",
            },
        ],
    },
    works: {
        title: "Some of our works",
        subtitle: "Proven solutions for real-world problems",
        description:
            "We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation.",
        workDetails: works.workDetails,
    },
    testimonial: {
        quote: "The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.",
        companyName: "Phobia",
        companyLogo: "/company-a.jpg",
    },
    services: {
        title: "Services",
        subtitle:
            "We help you identify, explore and respond to new opportunities.",
        description:
            "As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.",
        serviceDetails: services.servicesDetails,
    },
};

export { header, footer, about, services, works, homePage, contact };
