import React from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
    image: string
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
                <img src={`${image}`} className="flex object-scale-down shrink-0 rounded-xl h-[141px]" />
                <h3 className="self-start mt-5 text-xl font-medium tracking-normal leading-none text-slate-900">
                    {title}
                </h3>
                <p className="mt-5 text-base leading-6 text-zinc-600">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;