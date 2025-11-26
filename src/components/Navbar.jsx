import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ setPage, isScrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (page) => {
        setPage(page);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-black' : 'bg-transparent py-6 text-white'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => handleNav('men')} className="text-sm font-medium hover:opacity-70 transition-opacity">Homem</button>
                    <button onClick={() => handleNav('women')} className="text-sm font-medium hover:opacity-70 transition-opacity">Mulher</button>
                    <button onClick={() => handleNav('story')} className="text-sm font-medium hover:opacity-70 transition-opacity">Nossa História</button>
                    <button onClick={() => handleNav('contact')} className="text-sm font-medium hover:opacity-70 transition-opacity">Contato</button>
                </div>

                {/* Logo */}
                <div
                    className="text-2xl font-bold tracking-widest uppercase absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={() => handleNav('home')}
                >
                    Loverse
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
                    <div className="relative cursor-pointer hover:opacity-70 transition-opacity">
                        <ShoppingBag className="w-5 h-5" />
                        <span className={`absolute -top-2 -right-2 text-[10px] w-4 h-4 flex items-center justify-center rounded-full ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>2</span>
                    </div>
                    <Menu
                        className="w-6 h-6 md:hidden cursor-pointer"
                        onClick={() => setMobileMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="fixed inset-0 bg-white z-50 flex flex-col p-8 text-black"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-bold uppercase">Loverse</span>
                            <X className="w-6 h-6 cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
                        </div>
                        <div className="flex flex-col space-y-6">
                            <button onClick={() => handleNav('home')} className="text-3xl font-medium tracking-tight text-left">Início</button>
                            <button onClick={() => handleNav('men')} className="text-3xl font-medium tracking-tight text-left">Homem</button>
                            <button onClick={() => handleNav('women')} className="text-3xl font-medium tracking-tight text-left">Mulher</button>
                            <button onClick={() => handleNav('story')} className="text-3xl font-medium tracking-tight text-left">Nossa História</button>
                            <button onClick={() => handleNav('contact')} className="text-3xl font-medium tracking-tight text-left">Contato</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
