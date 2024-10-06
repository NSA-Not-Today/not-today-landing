import React from 'react';
import QuestionItem from './QuestionItem';
import { FAQItem } from './types';

const faqData: FAQItem[] = [
    { question: 'Pregunta 1', id: 1 },
    { question: 'Pregunta 2', id: 2 },
    { question: 'Pregunta 3', id: 3 },
    { question: 'Pregunta 4', id: 4 },
    { question: 'Pregunta 5', id: 5 },
    { question: 'Pregunta 6', id: 6 },
];

const FAQSection: React.FC = () => {
    return (
        <section className="flex flex-col ml-0.5 rounded-none">
            <div className="flex flex-col justify-center items-center px-20 py-32 w-full bg-gray-200 max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div className="flex flex-col -mb-6 w-full max-w-[1120px] max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
                        <h2 className="grow shrink text-4xl font-semibold tracking-tight leading-none text-slate-900 w-[322px]">
                            Despejamos tus dudas
                        </h2>
                        <QuestionItem question={faqData[0].question} id={faqData[0].id} />
                    </div>
                    <div className="flex flex-wrap gap-10 mt-4 w-full max-md:max-w-full">
                        <p className="grow shrink my-auto text-lg leading-7 text-zinc-900 w-[352px] max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Et vel amet enim ultricies placerat vulputate magna at sit.
                        </p>
                        <QuestionItem question={faqData[1].question} id={faqData[1].id} />
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between items-start mt-4 w-full font-medium max-md:max-w-full">
                        <button className="gap-2.5 self-end px-4 py-2 mt-8 text-sm leading-6 text-white whitespace-nowrap bg-black rounded-md">
                            Registrarse
                        </button>
                        <QuestionItem question={faqData[2].question} id={faqData[2].id} />
                    </div>
                    <div className="flex flex-col self-end max-w-full text-base font-medium tracking-normal leading-loose text-slate-900 w-[536px]">
                        {faqData.slice(3).map((item) => (
                            <QuestionItem key={item.id} question={item.question} id={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;