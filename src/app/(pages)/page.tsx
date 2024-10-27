import { PageHeader } from "@/components";
import { Separator } from "@/components/ui";
import { homePage } from "@/constants/staticData";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const { header, services, workedWith, testimonial, works } = homePage;

    const projects = [
        {
            year: "2024",
            title: "Fleet Management System Automation",
            description:
                "Faced with a complex infrastructure challenge, we implemented a tailored Puppet infrastructure to streamline fleet management. By developing custom scripts and CI/CD integration, we ensured reliable and scalable operations across diverse environments.",
        },
        {
            year: "2023",
            title: "Custom Ubuntu ISO for Blockchain Nodes",
            description:
                "We led the customization of an Ubuntu ISO, optimized for seamless blockchain node deployment. Our solution reduced deployment time and improved node performance, enhancing overall operational efficiency.",
        },
        {
            year: "2024",
            title: "Dotfiles Management & SSH Key Automation",
            description:
                "Developed a secure and efficient system for managing dotfiles and SSH keys using Ansible. This project standardized development environments, improving security and reducing setup errors across macOS and Linux systems.",
        },
    ];

    return (
        <div className="flex flex-col gap-y-16 xl:gap-y-24">
            {/* Header Section */}
            <PageHeader
                pageHeaderTitle={header.title}
                pageHeaderSubtitle={header.subtitle}
                pageHeaderDescription={header.description}
            />

            {/* Worked With Section */}
            <section className="my-16 w-full space-y-4 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-800 p-6 text-white sm:p-12">
                <h2 className="text-center font-semibold">
                    We have worked with numerous amazing people
                </h2>
                <Separator className="bg-white/30" />
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {workedWith.clients.map((client, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-white">•</span>
                            <span className="text-lg font-medium italic md:text-base">
                                {client}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Works Section */}
            <section className="my-16">
                <PageHeader
                    pageHeaderTitle={works.title}
                    pageHeaderSubtitle={works.subtitle}
                    pageHeaderDescription={works.description}
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="w-full rounded-lg bg-gray-800/50 p-6 hover:bg-gray-700/50 transition-colors duration-300 backdrop-blur-sm"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Calendar size={20} className="text-blue-400" />
                                <span className="text-blue-400 font-medium">
                                    {project.year}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="my-16" id="testimonial">
                <article className="w-full space-y-12 rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-800 p-12 text-white">
                    <blockquote className="text-3xl font-light italic">
                        {testimonial.review}
                    </blockquote>
                    <cite className="flex items-center gap-4">
                        <Image
                            src={testimonial.clientImage}
                            alt={testimonial.companyName}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold">
                                {testimonial.companyName}
                            </span>
                            <span className="text-sm text-gray-300">
                                {testimonial.company}
                            </span>
                        </div>
                    </cite>
                </article>
            </section>

            {/* Services Section */}
            <section className="my-16" id="services">
                <PageHeader
                    pageHeaderTitle={services.title}
                    pageHeaderSubtitle={services.subtitle}
                    pageHeaderDescription={services.description}
                />
                <div className="flex flex-col items-center md:flex-row">
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden md:w-1/2">
                        <Image
                            src="/serviceplaceholder.jpeg"
                            alt="Services illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full space-y-8 p-8 md:w-1/2">
                        {services.serviceDetails.map((service) => (
                            <div
                                key={service.id}
                                className="w-full max-w-xl space-y-4"
                            >
                                <p>
                                    <strong>{service.title}</strong> {service.description}
                                </p>
                                <div>
                                    <Separator className="w-[30px] bg-foreground" />
                                    <Separator className="w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}