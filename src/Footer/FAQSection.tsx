import React from 'react';

const FAQSection: React.FC = () => {
    return (
        <section className="flex flex-col ml-0.5 rounded-none">
            <div className="flex flex-col justify-center items-center px-20 py-32 w-full bg-gray-200 max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div className="flex flex-col -mb-6 w-full max-w-[1120px] max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex flex-col justify-start flex-wrap gap-10 w-full max-md:max-w-full">
                        <h2 className="grow shrink text-4xl font-semibold tracking-tight leading-none text-slate-900 w-[322px]">
                            Despejamos tus dudas
                        </h2>
                        <div>
                            <h2 className="text-black text-lg font-semibold mb-5 text-center">
                                ¿Tienes alguna duda? Contáctanos!
                            </h2>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Escribe tu mensaje..."
                                    rows={4}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                        {/* Sección de enlaces y derechos de autor */}
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-600 text-sm">© 2024 NotToday</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href="#" className="text-gray-600 text-sm hover:underline">
                                    Términos y condiciones
                                </a>
                                <a href="#" className="text-gray-600 text-sm hover:underline">
                                    Política de privacidad
                                </a>
                                <a href="#" className="text-gray-600 text-sm hover:underline">
                                    Política de cookies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;