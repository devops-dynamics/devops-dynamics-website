import React from "react";
import { PageHeader, VerticalSeparator } from "@/components";
import { Separator } from "@/components/ui/separator";
import { about } from "@/constants/staticData";

// Static Page
const AboutPage = () => {
    const { header, impact, introduction, leadership, values, team } = about;

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
            {/*  */}

            <PageHeader
                pageHeaderTitle="About Us"
                pageHeaderSubtitle={about.header.title}
                pageHeaderDescription={about.header.description}
            >
                <div className="flex max-w-5xl flex-wrap justify-between gap-8">
                    <BlockQuote heading="32" subheading="Underpaid Employees" />
                    <BlockQuote heading="$25M" subheading="Invoices billed" />
                    <BlockQuote heading="52" subheading="Placated clients" />
                </div>
            </PageHeader>
            <div className="my-16 min-h-96 w-full space-y-4 rounded-xl bg-foreground p-10 text-background outline outline-8 outline-foreground">
                <h4 className="font-bold">Our culture</h4>
                <h1 className="text-3xl font-semibold">
                    Balance your passion <br /> with your passion for life.
                </h1>
                <p className="font-semibold text-muted">
                    We are a group of like-minded people who share the same core
                    values.
                </p>
                {/* Our Culture */}
                <div className="flex max-w-5xl flex-col justify-between space-y-8 py-12 lg:flex-row lg:space-y-0">
                    {ourCulture.map((culture, index) => {
                        return (
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
                                        className="h-14 w-[2px] bg-muted-foreground"
                                    />
                                </div>
                                <p className="text-medium max-w-64 text-wrap">
                                    <strong>{culture.heading}.</strong>
                                    {culture.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Separator orientation="horizontal" className="my-14" />
            {/* LeaderShip & Team */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div className="text-xl font-bold">Leadership</div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {leadership.map((leader, index) => {
                        return (
                            <div
                                key={index}
                                className={`h-64 w-52 overflow-hidden rounded-lg bg-black/50 bg-[url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center bg-no-repeat p-4 bg-blend-overlay hover:cursor-pointer hover:bg-black/40 lg:h-80 lg:w-64`}
                            >
                                <div className="text-white">
                                    <h2 className="font-semibold">
                                        {leader.name}
                                    </h2>
                                    <h2 className="text-sm font-medium">
                                        {leader.position}
                                    </h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Separator orientation="horizontal" className="my-14" />

            <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div className="text-xl font-bold">Team</div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {team.length > 0 &&
                        team.map((member, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`h-64 w-52 overflow-hidden rounded-lg bg-black/50 bg-[url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center bg-no-repeat p-4 bg-blend-overlay hover:cursor-pointer hover:bg-black/40 lg:h-80 lg:w-64`}
                                >
                                    <div className="text-white">
                                        <h2 className="font-semibold">
                                            {member?.name}
                                        </h2>
                                        <h2 className="text-sm font-medium">
                                            {member?.position}
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
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
            {/* <div className="">
                <Separator
                    orientation="vertical"
                    className="h-1/2 bg-black dark:bg-white"
                />
                <Separator orientation="vertical" className="h-1/2" />
            </div> */}
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
