import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
    const baseClasses = "gap-2.5 self-stretch px-4 py-2 my-auto rounded-md";
    const variantClasses = {
        primary: "text-white bg-cyan-600",
        secondary: "bg-white text-slate-900 border border-solid border-slate-200"
    };

    return (
        <button onClick={() => window.location.href = 'https://app.nottoday.earth' } className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </button>
    );
};

export default Button;