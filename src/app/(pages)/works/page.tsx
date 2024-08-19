import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerticalSeparator from "@/components/VerticalSeparator";
import { Facebook } from "@/constants/icons";
import { works } from "@/constants/staticData";
import React from "react";

const page = () => {
    const { header, workDetails } = works;
    return (
        <div>
            {/* page header */}
            <PageHeader
                pageHeaderTitle={header.title}
                pageHeaderSubtitle={header.subTitle}
                pageHeaderDescription={header.description}
            />
            {/* case studies */}
            <div className="space-y-16" id="caseStudies">
                <h1 className="text-4xl">Case Studies</h1>
                <div className="space-y-16">
                    {workDetails.map((workDetail) => (
                        <WorkCard key={workDetail.id} workDetail={workDetail} />
                    ))}
                </div>
            </div>
            {/* main testimonial */}
            {/* you are in good company (tech icons) */}
        </div>
    );
};

const WorkCard = ({
    workDetail,
}: {
    workDetail: {
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
    };
}) => {
    return (
        <>
            {/* Separator */}
            <div className="w-full">
                <Separator className="w-10 bg-slate-500" />
                <Separator className="w-full" />
            </div>
            <div className="flex w-full flex-col justify-between gap-y-8 p-6 md:flex-row md:gap-x-4">
                <div className="flex flex-row items-center justify-between gap-4 text-sm font-medium md:flex-col md:items-start md:justify-normal">
                    {/* icon */}
                    <div className="flex items-center gap-x-2">
                        <div className="h-[44px] w-[44px] rounded-full bg-purple-600">
                            {/* Icon */}
                        </div>
                        {/* company name */}
                        <p className="font-bold">{workDetail.company}</p>
                    </div>
                    {/* service */}
                    <p className="">{workDetail.service}</p>
                    {/* date */}
                    <p>{workDetail.date}</p>
                </div>
                <div className="space-y-12 self-end">
                    {/* title & description */}
                    <div className="max-w-lg space-y-8 text-right">
                        <h3 className="text-2xl font-semibold">
                            {workDetail.title}
                        </h3>
                        <p className="text-base font-semibold text-muted-foreground">
                            {workDetail.description}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non quia, repellendus nisi sit totam quasi
                            quibusdam velit odit porro eaque, architecto
                            asperiores distinctio! Accusamus, possimus ratione
                            nisi placeat laudantium saepe?
                        </p>
                        {workDetail.link && (
                            <Button className="float-end rounded-full">
                                Read Case Study
                            </Button>
                        )}

                        {/* testimonial */}
                        {workDetail.testimonial && (
                            <div className="flex w-full flex-col gap-y-4 self-end px-2 py-8">
                                <div className="flex flex-row items-center gap-x-2"></div>
                                <article className="prose">
                                    <blockquote className="text-sm text-muted-foreground">
                                        {workDetail.testimonial?.testimonial}
                                    </blockquote>
                                    <footer className="text-sm text-muted-foreground">
                                        <cite className="font-bold text-purple-400">
                                            {workDetail.testimonial?.name},{" "}
                                            {workDetail.testimonial?.position}
                                        </cite>
                                    </footer>
                                </article>
                            </div>
                        )}
                    </div>
                    {/* Read Case Study Button */}

                    {/* testimonial */}
                </div>
            </div>
        </>
    );
};

export default page;
