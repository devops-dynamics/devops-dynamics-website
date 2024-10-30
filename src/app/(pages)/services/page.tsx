import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/staticData";
import Image from "next/image";

const page = () => {
  const { header, faq, servicesDetails } = services;
  return (
    <div className="flex flex-col gap-y-8 px-4 sm:gap-y-12 md:gap-y-16 container mx-auto">
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

      {/* Services with Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative">
        {/* Photo Section - Always first on mobile */}
        <div className="order-1 lg:sticky lg:top-8 w-full max-w-[655px] mx-auto">
          <svg viewBox="0 0 655 680" fill="none" className="w-full h-auto">
            <defs>
              <clipPath id="curved-clip">
                <path d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#curved-clip)" className="group">
              <foreignObject width="655" height="680" className="overflow-hidden">
                <div className="relative h-full w-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/services.jpeg"
                    alt="Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 655px"
                    className="object-cover"
                    priority
                  />
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        {/* Services List */}
        <ul className="order-2 space-y-8 sm:space-y-12 md:space-y-16">
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
      </div>

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