import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';
import { IMAGES } from '../data/images';

const ComingSoon = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'familiaribeiro') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-neutral-900 text-white overflow-hidden">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12 relative z-10">
                <div className="max-w-md mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            Em Breve
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                            Loverse<br />
                            <span className="text-neutral-500">Store</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                            Estamos preparando uma nova experiência de compra para você.
                            Qualidade, estilo e atemporalidade em cada detalhe.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-neutral-800/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
                            <div className="flex items-center gap-3 mb-6 text-neutral-300">
                                <Lock size={18} />
                                <span className="text-sm font-medium uppercase tracking-wide">Acesso Antecipado</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Digite a senha de acesso"
                                        className={`w-full bg-neutral-900 border ${error ? 'border-red-500' : 'border-neutral-700'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors`}
                                    />
                                    {error && (
                                        <p className="text-red-500 text-xs mt-2 ml-1">Senha incorreta. Tente novamente.</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    Entrar no Site <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Images */}
            <div className="hidden lg:block w-1/2 relative bg-black">
                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4 opacity-60">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <img src={IMAGES.img20} alt="Model 1" className="w-full h-[40vh] object-cover rounded-2xl" />
                        <img src={IMAGES.img39} alt="Model 2" className="w-full h-[50vh] object-cover rounded-2xl" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="space-y-4 pt-12"
                    >
                        <img src={IMAGES.img46} alt="Model 3" className="w-full h-[50vh] object-cover rounded-2xl" />
                        <img src={IMAGES.img51} alt="Model 4" className="w-full h-[40vh] object-cover rounded-2xl" />
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900" />
            </div>
        </div>
    );
};

export default ComingSoon;
