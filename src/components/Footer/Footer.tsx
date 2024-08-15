import { Facebook, GitHub, Instagram, Twitter } from "@/constants/icons";
import React from "react";

const services = [
    {
        title: "1on1 Coaching",
        link: "#",
    },
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
];

const company = [
    {
        title: "About",
        link: "#",
    },
    {
        title: "Meet the Team",
        link: "#",
    },
    {
        title: "Accounts Review",
        link: "#",
    },
];

const helpfulLinks = [
    {
        title: "Contact",
        link: "#",
    },
    {
        title: "FAQs",
        link: "#",
    },
    {
        title: "Live Chat",
        link: "#",
    },
];

const legal = [
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
];

const FooterLink = ({ title, link }: { title: string; link: string }) => {
    return (
        <li>
            <a
                href={link}
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
                {title}
            </a>
        </li>
    );
};

const FooterLinkColumn = ({
    columnTitle,
    linkArray,
}: {
    columnTitle: string;
    linkArray: { title: string; link: string }[];
}) => {
    return (
        <div>
            <p className="font-medium text-gray-900 dark:text-white">
                {columnTitle}
            </p>

            <ul className="mt-6 space-y-4 text-sm">
                {linkArray.map((link, index) => (
                    <FooterLink
                        title={link.title}
                        link={link.link}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-teal-600 dark:text-teal-300">
                            <h1 className="text-bold text-xl">
                                Devops Dynamics
                            </h1>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Esse non cupiditate quae nam molestias.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            {
                                // Social Media Icons
                            }
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <Facebook />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <Instagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <Twitter />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <GitHub />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <FooterLinkColumn
                            columnTitle="Services"
                            linkArray={services}
                        />

                        <FooterLinkColumn
                            columnTitle="Company"
                            linkArray={company}
                        />

                        <FooterLinkColumn
                            columnTitle="Helpful Links"
                            linkArray={helpfulLinks}
                        />

                        <FooterLinkColumn
                            columnTitle="Legal"
                            linkArray={legal}
                        />
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
