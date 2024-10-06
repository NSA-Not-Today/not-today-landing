import React from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
                <div className="flex shrink-0 rounded-xl bg-zinc-300 h-[141px]" />
                <h3 className="self-start mt-5 text-xl font-medium tracking-normal leading-none text-slate-900">
                    {title}
                </h3>
                <p className="mt-5 text-base leading-6 text-zinc-600">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;