import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { INSTAGRAM_POSTS, FEATURES } from '../data/mockData';
import { IMAGES } from '../data/images';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-white pt-0 pb-12 overflow-hidden">
            {/* Social Ticker */}
            <div className="py-12 border-b border-neutral-800/50">
                <div className="mb-8 text-center px-4">
                    <p className="text-neutral-500 text-sm uppercase tracking-widest mb-2">(Social)</p>
                    <h3 className="text-2xl md:text-3xl font-bold">Siga-nos @loverse para novidades</h3>
                </div>
                <div className="flex gap-4 animate-scroll w-max hover:pause">
                    {[...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS].map((post, i) => (
                        <a
                            key={i}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-64 h-64 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer overflow-hidden relative group block"
                        >
                            <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Social" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full border-b border-neutral-800/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center py-16 px-6 border-r border-neutral-800/50 last:border-r-0 hover:bg-neutral-900/30 transition-colors duration-300 group cursor-default">
                            <feature.icon className="w-8 h-8 mb-6 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                            <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                            <p className="text-sm text-neutral-500">{feature.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="mb-6 select-none">
                                <img src={IMAGES.imglogo} alt="Loverse" className="h-24 md:h-32 w-auto brightness-0 invert" />
                            </h2>
                            <p className="text-neutral-500 max-w-md text-lg font-light">
                                © 2025 Loverse. Redefinindo a moda com essenciais atemporais.
                            </p>
                        </div>
                        <div className="flex gap-3 mt-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-8 bg-neutral-800 rounded px-2 flex items-center text-xs border border-neutral-700">VISA</div>
                            <div className="h-8 bg-neutral-800 rounded px-2 flex items-center text-xs border border-neutral-700">Mastercard</div>
                            <div className="h-8 bg-neutral-800 rounded px-2 flex items-center text-xs border border-neutral-700">PayPal</div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
                        <div>
                            <h4 className="text-neutral-500 font-medium mb-8 text-sm tracking-widest uppercase">(Navegação)</h4>
                            <ul className="space-y-4">
                                {['Início', 'Homem', 'Mulher', 'História', 'Contato'].map(item => (
                                    <li key={item}><a href="#" className="text-xl font-medium hover:text-neutral-400 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-neutral-500 font-medium mb-8 text-sm tracking-widest uppercase">(Legal)</h4>
                            <ul className="space-y-4">
                                {['Política de Privacidade', 'Termos de Serviço', 'Devoluções', 'FAQ'].map(item => (
                                    <li key={item}><a href="#" className="text-xl font-medium hover:text-neutral-400 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-1">
                            <h4 className="text-neutral-500 font-medium mb-8 text-sm tracking-widest uppercase">(Newsletter)</h4>
                            <p className="text-neutral-400 mb-6 font-light">Receba as últimas novidades.</p>
                            <div className="relative border-b border-neutral-700 focus-within:border-white transition-colors pb-2">
                                <input type="email" placeholder="Seu email" className="w-full bg-transparent text-white placeholder-neutral-600 focus:outline-none pb-2 text-lg" />
                                <button className="absolute right-0 bottom-4 text-sm font-bold uppercase tracking-wider hover:text-neutral-400">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm border-t border-neutral-900 pt-8">
                    <p>Desenvolvido no Brasil</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
