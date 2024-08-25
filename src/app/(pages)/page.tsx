// import PageHeader from "@/components/PageHeader";
import { PageHeader } from "@/components";
import { Separator } from "@/components/ui";
import { homePage } from "@/constants/staticData";

export default function Home() {
    const { header, services, workedWith, testimonial, works } = homePage;
    return (
        <div className="flex flex-col gap-y-16 xl:gap-y-24">
            {/* header */}
            <PageHeader
                pageHeaderTitle={header.title}
                pageHeaderSubtitle={header.subtitle}
                pageHeaderDescription={header.description}
            />
            {/* we have worked with */}
            <section className="my-16 w-full space-y-4 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-800 p-6 text-white sm:p-12">
                <h2 className="text-center font-semibold">
                    We have worked with hundreds of amazing people
                </h2>
                <Separator className="bg-white/30" />
                <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {workedWith.clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-6 md:gap-4"
                        >
                            <div className="h-[44px] w-[44px] rounded-full bg-white md:h-[40px] md:w-[40px]" />
                            <div className="text-lg font-medium italic md:text-base">
                                {client.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* some works */}
            <section className="my-16">
                <PageHeader
                    pageHeaderTitle={works.title}
                    pageHeaderSubtitle={works.subtitle}
                    pageHeaderDescription={works.description}
                />
                <div className="grid grid-cols-1 place-items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
            </section>
            {/* testimonial */}
            <section className="my-16" id="testimonial">
                <article className="w-full space-y-12 rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-800 p-12 text-white">
                    <blockquote className="text-3xl font-light italic">
                        {testimonial.quote}
                    </blockquote>
                    <cite className="flex items-center gap-4">
                        <div className="h-[48px] w-[48px] rounded-full bg-purple-600" />
                        <span className="font-semibold">
                            {testimonial.companyName}
                        </span>
                    </cite>
                </article>
            </section>
            {/* Services */}
            <section className="my-16" id="services">
                <PageHeader
                    pageHeaderTitle={services.title}
                    pageHeaderSubtitle={services.subtitle}
                    pageHeaderDescription={services.description}
                />
                <div className="flex flex-col items-center md:flex-row">
                    <div className="h-[400px] w-full rounded-3xl bg-purple-700 p-4 md:w-1/2">
                        {/* <Image src={"/placeholder.jpeg"}/> */}
                    </div>
                    <div className="w-full space-y-8 p-8 md:w-1/2">
                        {services.serviceDetails.map((service) => (
                            <div
                                key={service.id}
                                className="w-full max-w-xl space-y-4"
                            >
                                <div>
                                    <p>
                                        <strong>{service.title}. </strong>
                                        {service.description}
                                    </p>
                                </div>

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

const WorkCard = () => {
    return (
        <div className="h-96 w-full max-w-sm rounded-lg bg-purple-100 dark:bg-purple-50/20"></div>
    );
};
