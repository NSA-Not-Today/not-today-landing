import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center mb-0 w-full max-w-[1120px] max-md:mb-2.5 max-md:max-w-full">
            <h1 className="mt-28 text-5xl font-bold tracking-tight leading-none text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Hoy no caerá un asteroide ☄️
            </h1>
            <p className="mt-6 text-xl leading-loose text-white max-md:max-w-full">
                Pero te contamos sobre los que se acercan a la Tierra
            </p>
            <Button variant="primary">
                Descubre si mañana
            </Button>
        </section>
    );
};

export default Hero;