import React from 'react';

type Step = {
    number: number;
    title: string;
    description: string;
};

const steps: Step[] = [
    {
        number: 1,
        title: "Crea tu cuenta",
        description: "Lorem ipsum dolor sit amet consectetur. Et vel amet enim ultricies placerat vulputate magna at sit."
    },
    {
        number: 2,
        title: "Recibe notificaciones",
        description: "Lorem ipsum dolor sit amet consectetur. Et vel amet enim ultricies placerat vulputate magna at sit."
    },
    {
        number: 3,
        title: "Aprende y juega",
        description: "Lorem ipsum dolor sit amet consectetur. Et vel amet enim ultricies placerat vulputate magna at sit."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="mt-24 w-full max-w-[1093px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-center mt-16 font-semibold text-center max-md:mt-10">
                            <div className="px-5 text-3xl tracking-tight leading-relaxed text-black whitespace-nowrap rounded-full bg-zinc-100 h-[52px] w-[52px]">
                                {step.number}
                            </div>
                            <h3 className="mt-8 text-3xl tracking-tight leading-loose text-slate-900">{step.title}</h3>
                            <p className="self-stretch mt-5 text-lg leading-7 text-zinc-900">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;