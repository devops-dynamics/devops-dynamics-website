import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/staticData";

const ServicesPage = () => {
    const { header, servicesDetails, faq = [] } = services;

    return (
        <div className="flex flex-col gap-y-16">
            {/* Header */}
            <div className="max-w-lg space-y-12">
                <h1 className="text-md font-bold">{header.title}</h1>
                <h2 className="text-5xl">{header.description}</h2>
                <p className="text-base font-semibold text-muted-foreground">
                    We can&apos;t wait to hear from you.
                </p>
            </div>

            {/* Services */}
            <ul className="space-y-16 self-end">
                {servicesDetails.map((item) => (
                    <li key={item.id} className="space-y-2">
                        <p className="font-bold text-muted-foreground">
                            0{item.id}
                        </p>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="max-w-lg text-base font-semibold text-muted-foreground xl:max-w-2xl">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>

            {/* FAQ */}
            <section>
                <h2 className="text-4xl font-bold">FAQ</h2>
                <div className="mt-8">
                    {faq && faq.length > 0 ? (
                        faq.map((item) => (
                            <Accordion
                                key={item.id}
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value={`item-${item.id}`}>
                                    <AccordionTrigger className="font-bold">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-medium text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    ) : (
                        <p>No FAQ items available</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;