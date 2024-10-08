import React from 'react';

const RegisterButton: React.FC = () => {
    return (
        <button onClick={() => window.location.href = "https://tally.so/r/w7VZg0" } className="gap-2.5 px-4 py-2 mt-12 max-w-full text-sm font-medium leading-6 text-white whitespace-nowrap bg-black rounded-md w-[217px] max-md:mt-10">
            Registrarse
        </button>
    );
};

export default RegisterButton;