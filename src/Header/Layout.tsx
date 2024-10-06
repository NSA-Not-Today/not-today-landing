import React from 'react';
import Header from './Header';
import Hero from './Hero';

const Layout: React.FC = () => {
    return (
        <main className="flex flex-col text-sm font-medium leading-6 rounded-none"> 
            <div className="flex flex-col items-center px-20 pt-6 pb-28 w-full bg-[url('/foreground.png')] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <Header logoText="NotToday" />
                <Hero />
            </div>
        </main>
    );
};

export default Layout;