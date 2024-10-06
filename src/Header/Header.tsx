import React from 'react';
import Button from './Button';

interface HeaderProps {
    logoText: string;
}

const Header: React.FC<HeaderProps> = ({ logoText }) => {
    return (
        <header className="flex flex-wrap gap-10 justify-between items-center self-stretch py-2 w-full max-md:max-w-full">
            <div className="self-stretch my-auto text-black w-[229px]">
                <span className="font-bold text-4xl">{logoText}</span>
            </div>
            <div className="flex shrink-0 self-stretch my-auto h-[38px] w-[109px]" />
            <nav className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap w-[201px]">
                <Button variant="secondary">Login</Button>
                <Button variant="primary">Registrarse</Button>
            </nav>
        </header>
    );
};

export default Header;