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
            imageSrc: "/team/suyash.jpg"
        },
        {
            name: "Vrushali Kudande",
            position: "Linux SysAdmin",
            imageSrc: "/team/vrushali.jpg"
        },
        {
            name: "Sairaj Jawalikar",
            position: "Cybersecurity & SysAdmin",
            imageSrc: "/team/sairaj.jpg"
        },
        {
            name: "Sanchari Mandal",
            position: "Full Stack Developer",
            imageSrc: "/team/sanchari.jpg",
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
                "Our team has been with us since the beginning (no LinkedIn allowed—just kidding!).",
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
        <div className="container mx-auto min-h-screen px-4 py-6 space-y-12 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:space-y-24">
            <PageHeader
                pageHeaderTitle="About Us"
                pageHeaderSubtitle={about.header.title}
                pageHeaderDescription={about.header.description}
                className="text-center sm:text-left"
            >
                <div className="flex flex-col w-full items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-8 md:items-start">
                    <BlockQuote heading="5" subheading="Underpaid Employees" />
                    <BlockQuote heading="$7K+" subheading="Invoices billed" />
                    <BlockQuote heading="26" subheading="Placated clients" />
                </div>
            </PageHeader>

            <div className="relative w-full space-y-6 rounded-xl bg-foreground p-4 text-background outline outline-4 sm:outline-8 outline-foreground sm:p-6 md:p-8 lg:p-10">
                <div className="space-y-4">
                    <h4 className="text-base font-bold sm:text-lg md:text-xl">Our culture</h4>
                    <h1 className="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                        Balance your passion with your passion for life.
                    </h1>
                    <p className="text-sm font-semibold text-muted/90 sm:text-base md:text-lg">
                        We are a group of like-minded people who share the same core values.
                    </p>
                </div>
                
                <div className="grid gap-8 py-6 sm:grid-cols-2 sm:py-8 lg:grid-cols-3 lg:py-10">
                    {ourCulture.map((culture, index) => (
                        <div
                            className="flex space-x-4"
                            key={index}
                        >
                            <div className="flex-shrink-0">
                                <Separator
                                    orientation="vertical"
                                    className="h-8 w-[2px] bg-white dark:bg-black sm:h-10"
                                />
                                <Separator
                                    orientation="vertical"
                                    className="h-12 w-[2px] bg-muted-foreground sm:h-14"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm sm:text-base">
                                    <strong className="block mb-1.5 sm:mb-2">{culture.heading}</strong>
                                    {culture.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Separator orientation="horizontal" className="my-6 sm:my-8 md:my-12" />
            
            {/* Team Members */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                <h2 className="text-lg font-bold text-center sm:text-xl md:text-2xl sm:text-left">Our Team</h2>
                <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative mx-auto h-[280px] w-full max-w-[260px] overflow-hidden rounded-lg bg-card transition-transform duration-300 hover:scale-[1.02] sm:h-[300px] md:h-[320px] sm:max-w-[280px]"
                        >
                            <div className="absolute inset-0 h-full w-full">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    width={280}
                                    height={320}
                                    className="h-full w-full object-cover"
                                    priority={index < 2}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                <div className="absolute bottom-0 p-3 sm:p-4 text-white">
                                    <h2 className="text-base font-semibold sm:text-lg md:text-xl">
                                        {member.name}
                                    </h2>
                                    <h3 className="text-sm font-medium text-white/80 sm:text-base">
                                        {member.position}
                                    </h3>
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
        <div className="m-1 sm:m-2 flex gap-x-3 sm:gap-x-4 md:gap-x-6">
            <VerticalSeparator />
            <blockquote className="space-y-1.5 sm:space-y-2">
                <p className="text-xl font-bold sm:text-2xl md:text-3xl">{heading}</p>
                <p className="text-xs font-medium text-muted-foreground sm:text-sm md:text-base">
                    {subheading}
                </p>
            </blockquote>
        </div>
    );
};

export default AboutPage;