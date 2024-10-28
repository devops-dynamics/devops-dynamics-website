import React from "react";
import Image from "next/image";
import { PageHeader, VerticalSeparator } from "@/components";
import { Separator } from "@/components/ui/separator";
import { about } from "@/constants/staticData";

const AboutPage = () => {
    const { header } = about;

    const teamMembers = [
        {
            name: "Suyash Bhawsar",
            position: "DevOps Engineer",
            imageSrc: "/team/Suyash.jpg"
        },
        {
            name: "Vrushali Kudande",
            position: "Linux SysAdmin",
            imageSrc: "/team/Vrushali.jpg"
        },
        {
            name: "Sairaj Jawalikar",
            position: "Cybersecurity & SysAdmin",
            imageSrc: "/team/sairaj.jpg"
        },
        {
            name: "Sanchari Mandal",
            position: "Full Stack Developer",
            imageSrc: "/team/Sanchari.jpg",
        },
        {
            name: "Rutuja Kolate",
            position: "Frontend Developer",
            imageSrc: "/team/rutuja.jpg"
        },
    ];

    const ourCulture = [
        {
            heading: "Loyalty",
            description:
                "Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles.",
        },
        {
            heading: "Innovation",
            description:
                "We are constantly innovating, which is why we have a new logo every month.",
        },
        {
            heading: "Diversity",
            description:
                "We have a diverse team, which is why we have a different team for every project.",
        },
    ];

    return (
        <div className="space-y-24">
            <PageHeader
                pageHeaderTitle="About Us"
                pageHeaderSubtitle={about.header.title}
                pageHeaderDescription={about.header.description}
            >
                <div className="flex max-w-5xl flex-wrap justify-between gap-8">
                    <BlockQuote heading="5" subheading="Underpaid Employees" />
                    <BlockQuote heading="$7K+" subheading="Invoices billed" />
                    <BlockQuote heading="26" subheading="Placated clients" />
                </div>
            </PageHeader>

            <div className="my-16 min-h-96 w-full space-y-4 rounded-xl bg-[#4B4EFC] p-10 text-white outline outline-8 outline-[#4B4EFC]">
                <h4 className="font-bold">Our culture</h4>
                <h1 className="text-3xl font-semibold">
                    Balance your passion <br /> with your passion for life.
                </h1>
                <p className="font-semibold text-white/80">
                    We are a group of like-minded people who share the same core values.
                </p>
                <div className="flex max-w-5xl flex-col justify-between space-y-8 py-12 lg:flex-row lg:space-y-0">
                    {ourCulture.map((culture, index) => (
                        <div
                            className="flex space-x-4 lg:space-y-0"
                            key={index}
                        >
                            <div className="h-full space-y-1 overflow-hidden">
                                <Separator
                                    orientation="vertical"
                                    className="h-10 w-[2px] bg-white dark:bg-black"
                                />
                                <Separator
                                    orientation="vertical"
                                    className="h-14 w-[2px] bg-white/50"
                                />
                            </div>
                            <p className="text-medium max-w-64 text-wrap">
                                <strong>{culture.heading}.</strong>
                                {culture.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Separator orientation="horizontal" className="my-14" />
            
            {/* Team Members */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div className="text-xl font-bold">Our Team</div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative h-64 w-52 overflow-hidden rounded-lg bg-card lg:h-80 lg:w-64"
                        >
                            <div className="absolute inset-0 h-full w-full">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    width={256}
                                    height={320}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority={index < 2}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                <div className="absolute bottom-0 p-4 text-white">
                                    <h2 className="font-semibold">
                                        {member.name}
                                    </h2>
                                    <h2 className="text-sm font-medium text-white/80">
                                        {member.position}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlockQuote = ({
    heading,
    subheading,
    date,
}: {
    heading: string;
    subheading: string;
    date?: string;
}) => {
    return (
        <div className="m-2 flex gap-x-6">
            <VerticalSeparator />
            <blockquote className="space-y-2">
                <p className="text-3xl font-bold">{heading}</p>
                <p className="font-medium text-muted-foreground">
                    {subheading}
                </p>
            </blockquote>
        </div>
    );
};

export default AboutPage;
