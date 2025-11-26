import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MEN_CATEGORIES, MENS_PRODUCTS } from '../data/mockData';
import ProductCardGrid from '../components/ProductCardGrid';

import { IMAGES } from '../data/images';

const HeroMen = () => {
    return (
        <header className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img
                    src={IMAGES.img34}
                    alt="Men's Collection"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 container mx-auto">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter"
                >
                    Para Eles
                </motion.h1>
            </div>
        </header>
    );
};

const Men = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProducts = activeCategory === "Todos"
        ? MENS_PRODUCTS
        : activeCategory === "Novidades"
            ? MENS_PRODUCTS.filter(p => p.tag === "NOVO")
            : activeCategory === "Ofertas"
                ? MENS_PRODUCTS.filter(p => p.tag === "SALE")
                : MENS_PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="bg-white min-h-screen">
            <HeroMen />

            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-32">
                        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 hidden lg:block">(Categorias)</h3>
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-8 lg:gap-4 pb-4 lg:pb-0 no-scrollbar items-center lg:items-start">
                            {MEN_CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-lg lg:text-2xl font-bold tracking-tight whitespace-nowrap text-left transition-colors ${activeCategory === cat ? 'text-neutral-900 underline decoration-2 underline-offset-4' : 'text-neutral-300 hover:text-neutral-500'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                        {filteredProducts.map(product => (
                            <ProductCardGrid key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="py-20 text-center text-neutral-400">
                            Nenhum produto encontrado nesta categoria.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Men;
