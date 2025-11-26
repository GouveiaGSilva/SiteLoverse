import React from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import FAQItem from '../components/FAQItem';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                <div>
                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">(Contato)</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">Fale Conosco</h1>
                    <p className="text-xl text-neutral-500 mb-12 max-w-md">
                        Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos o mais breve possível.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h4 className="font-bold text-lg mb-2">Email</h4>
                            <p className="text-neutral-600 text-lg">suporte@loverse.com</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Horário de Atendimento</h4>
                            <p className="text-neutral-600 text-lg">Segunda a Sexta: 9h - 18h</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-50 p-8 md:p-12">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Nome</label>
                            <input type="text" className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Seu nome completo" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors" placeholder="seu@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Mensagem</label>
                            <textarea rows="4" className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
                        </div>
                        <button className="bg-black text-white px-10 py-4 w-full text-sm font-bold tracking-wide hover:bg-neutral-800 transition-colors uppercase mt-4">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mb-32" id="faq">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
                    <div className="space-y-2">
                        {FAQ_ITEMS.map((item, idx) => (
                            <FAQItem key={idx} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
