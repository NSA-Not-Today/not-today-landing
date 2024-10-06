import React from 'react';
import RegisterButton from './RegisterButton';

type InfoSectionProps = {
    title: string;
    description: string;
    imagePosition: 'left' | 'right';
    image: string;
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, imagePosition, image }) => {
    const contentOrder = imagePosition === 'left' ? 'order-2' : 'order-1';
    const imageOrder = imagePosition === 'left' ? 'order-1' : 'order-2';
    const buttonOrder = imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse';
    return (
        <>
            <section className="mt-28 ml-8 max-w-full w-[854px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col">
                    <div className={`flex flex-col w-[39%] max-md:ml-0 max-md:w-full ${imageOrder}`}>
                        <img src={image} className="flex shrink-0 mx-auto object-contain mt-2 max-w-full rounded-xl h-[197px] w-[282px] max-md:mt-10" />
                    </div>
                    <div className={`flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full ${contentOrder}`}>
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            <h2 className="text-xl font-medium tracking-normal leading-7 text-slate-900 max-md:max-w-full">
                                {title}
                            </h2>
                            <p className="mt-3.5 text-base leading-6 text-zinc-600 max-md:max-w-full">
                                {description}
                            </p>
                            <div className={`flex ${buttonOrder}`}>
                                <RegisterButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfoSection;