import { PageHeader } from "@/components";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { homePage } from "@/constants/staticData";
import type { Project, ServiceDetail } from "@/constants/staticData";

interface ProjectCardProps {
    project: {
        year: string;
        title: string;
        description: string;
    };
}

interface ServiceCardProps {
    service: ServiceDetail;
}

function ProjectCard({ project }: ProjectCardProps) {
    const { year, title, description } = project;

    return (
        <div className="w-full rounded-lg bg-card p-6 border border-muted hover:border-muted-foreground/50 hover:bg-muted transition-all duration-300 backdrop-blur-sm">
            <div className="mb-4 flex items-center space-x-2">
                <Calendar size={20} className="text-muted-foreground" />
                <span className="text-muted-foreground font-medium">
                    {year}
                </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-foreground">
                {title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>
        </div>
    );
}


function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="w-full max-w-xl space-y-4">
            <p>
                <strong>{service.title}</strong>{" "}
                {service.description}
            </p>
            <div>
                <Separator className="w-[30px] bg-foreground" />
                <Separator className="w-full" />
            </div>
        </div>
    );
}

function HomePage() {
    const { header, services, workedWith, testimonial, works } = homePage;

    return (
        <div className="flex flex-col gap-y-16 xl:gap-y-24">
            {/* Header Section */}
            <PageHeader
                pageHeaderSubtitle={header.subtitle}
                pageHeaderDescription={header.description}
            />
            {/* Worked With Section */}
            <section className="my-16 w-full space-y-4 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-800 p-6 text-white sm:p-12">
                <h2 className="text-center font-semibold">
                    {workedWith.title}
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
                    {works.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="my-16" id="testimonial">
            <article className="w-full space-y-12 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-800 p-12 text-white">
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
                    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl md:w-1/2">
                        <Image
                            src="/home-services.png"
                            alt="Services illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full space-y-8 p-8 md:w-1/2">
                        {services.serviceDetails.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;