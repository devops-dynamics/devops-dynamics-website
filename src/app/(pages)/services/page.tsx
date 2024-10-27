'use client';

import React from 'react';

const SimpleAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-semibold hover:text-purple-600"
      >
        <span>{question}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="pb-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "DevOps & Solutions Architecture",
      description: "Whether you're running an enterprise or just starting out, our DevOps solutions keep your operations efficient, reliable, and scalable. We use tools like Docker, Kubernetes, Jenkins, and Terraform to ensure that your infrastructure supports your business goals"
    },
    {
      id: 2,
      title: "Web Development for Local Businesses",
      description: "From shop owners to real estate agents, we build user-friendly, modern websites that attract customers and grow your business. Using the latest technologies like React, Next.js, and Node.js, we create tailored websites that work for you."
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Make sure your business gets found by the right customers. Our SEO services boost your website's ranking on search engines like Google, helping you attract more clients in your local area."
    },
    {
      id: 4,
      title: "Network & System Administration",
      description: "Whether it's a local server or a cloud solution, we manage your IT infrastructure so it's secure, efficient, and always up and running. We handle everything from system setup to performance optimization, giving you peace of mind."
    },
    {
      id: 5,
      title: "Custom Content Management",
      description: "We provide easy-to-manage, secure content management systems (CMS) for your business. Whether it's a basic site or a custom platform, we make updating your content simple and stress-free."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is your refund policy?",
      answer: "Refunds are handled on a case-by-case basis, depending on the project's terms and conditions."
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on scope and complexity. We work closely with clients to meet agreed deadlines."
    },
    {
      id: 3,
      question: "Do you offer custom packages?",
      answer: "Yes, we tailor our services to fit the unique needs and goals of each client."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept payments via Wise and bank transfers."
    },
    {
      id: 5,
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide ongoing support to ensure your systems and applications run smoothly."
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-sm font-medium mb-7">Services</h1>
        <h2 className="text-5xl font-semibold mb-4">
          We help you identify, explore and respond to new opportunities.
        </h2>
        <p className="text-base mb-16 text-gray-600">
          As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.
        </p>

        {/* Main Content Area */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:gap-x-8">
            {/* Left Side - Image */}
            <div className="relative lg:w-[655px]">
              <svg viewBox="0 0 655 680" fill="none" className="h-full w-full">
                <defs>
                  <clipPath id="curved-clip">
                    <path d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#curved-clip)" className="group">
                  <foreignObject width="655" height="680" className="overflow-hidden">
                    <div className="h-full w-full transform transition-transform duration-500 group-hover:scale-105">
                      <img
                        src="/services.jpeg"
                        alt="Development workspace"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>

            {/* Right Side - Services */}
            <div className="lg:w-1/2">
              <div className="space-y-8">
                {services.map((service) => (
                  <div key={service.id}>
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-1">
            {faqs.map((faq) => (
              <SimpleAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}