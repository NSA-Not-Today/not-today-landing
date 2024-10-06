import React from 'react';

type InfoSectionProps = {
    title: string;
    description: string;
    imagePosition: 'left' | 'right';
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, imagePosition }) => {
    const contentOrder = imagePosition === 'left' ? 'order-2' : 'order-1';
    const imageOrder = imagePosition === 'left' ? 'order-1' : 'order-2';

    return (
        <section className="mt-28 ml-8 max-w-full w-[854px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
                <div className={`flex flex-col w-[39%] max-md:ml-0 max-md:w-full ${imageOrder}`}>
                    <div className="flex shrink-0 mx-auto mt-2 max-w-full rounded-xl bg-zinc-300 h-[197px] w-[282px] max-md:mt-10" />
                </div>
                <div className={`flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full ${contentOrder}`}>
                    <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-xl font-medium tracking-normal leading-7 text-slate-900 max-md:max-w-full">
                            {title}
                        </h2>
                        <p className="mt-3.5 text-base leading-6 text-zinc-600 max-md:max-w-full">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;