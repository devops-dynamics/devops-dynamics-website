import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/staticData";

const page = () => {
  const { header, faq, servicesDetails } = services;

  return (
    <div className="flex flex-col gap-y-8 px-4 sm:gap-y-12 md:gap-y-16">
      {/* Header */}
      <div className="max-w-lg space-y-6 sm:space-y-8 md:space-y-12">
        <h1 className="text-sm font-bold sm:text-base md:text-md">
          {header.title}
        </h1>
        <h2 className="w-full text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl lg:text-[3.75rem] lg:w-[800px]">
          {header.description}
        </h2>
        <p className="text-sm font-semibold text-muted-foreground sm:text-base">
          We can&apos;t wait to hear from you.
        </p>
      </div>

      {/* Services */}
      <ul className="space-y-8 self-end sm:space-y-12 md:space-y-16">
        {servicesDetails.map((item) => (
          <li key={item.id} className="space-y-2 sm:space-y-3">
            <p className="font-bold text-muted-foreground">
              0{item.id}
            </p>
            <h3 className="text-xl font-semibold sm:text-2xl md:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground sm:text-base max-w-lg xl:max-w-2xl">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">FAQ</h2>
      <div className="space-y-2 sm:space-y-4">
        {faq.map((item) => (
          <Accordion
            key={item.id}
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="text-sm font-bold sm:text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default page;