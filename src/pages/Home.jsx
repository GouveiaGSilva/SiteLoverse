import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { HERO_SLIDES, BESTSELLERS, NEW_ARRIVALS_HOME } from '../data/mockData';
import { IMAGES } from '../data/images';
import ProductCard from '../components/ProductCard';

const HeroHome = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="relative h-screen w-full overflow-hidden bg-black text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
                    <img src={HERO_SLIDES[currentSlide].image} alt="Hero" className="w-full h-full object-cover" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 container mx-auto">
                <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl"
                >
                    <div className="text-sm font-medium tracking-widest mb-6 flex items-center opacity-80">
                        {HERO_SLIDES[currentSlide].counter} <span className="mx-3">—</span> 03
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-2">
                        {HERO_SLIDES[currentSlide].title}
                    </h1>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight opacity-80 mb-12">
                        {HERO_SLIDES[currentSlide].subtitle}
                    </h2>

                    <button
                        onClick={() => { setPage('men'); window.scrollTo(0, 0); }}
                        className="bg-white text-black px-8 py-4 text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 uppercase"
                    >
                        Comprar Agora <ArrowRight size={14} />
                    </button>

                    <div className="flex space-x-3 mt-16">
                        {HERO_SLIDES.map((_, index) => (
                            <div key={index} className="h-[2px] w-16 relative bg-white/20 overflow-hidden rounded-full">
                                {index === currentSlide && (
                                    <motion.div
                                        layoutId="activeSlide"
                                        className="absolute inset-0 bg-white"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '0%' }}
                                        transition={{ duration: 6, ease: "linear" }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

const BestsellersSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 container mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">(Mais Vendidos)</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900">Nossas Peças Mais Populares</h2>
                <p className="text-gray-500 text-lg font-light">As escolhas da estação.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {BESTSELLERS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

const CollectionsSplit = ({ setPage }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 h-[90vh] w-full">
            {/* Men */}
            <div className="relative group overflow-hidden cursor-pointer" onClick={() => { setPage('men'); window.scrollTo(0, 0); }}>
                <img
                    src={IMAGES.img35}
                    alt="Men"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 text-white flex flex-col items-start">
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                        Coleção<br />Vestidos
                    </h3>
                    <button className="bg-white text-black px-8 py-4 text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 uppercase">
                        Comprar Agora <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* Women */}
            <div className="relative group overflow-hidden cursor-pointer" onClick={() => { setPage('women'); window.scrollTo(0, 0); }}>
                <img
                    src={IMAGES.img59}
                    alt="Women"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-red-900/30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

                <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 text-white flex flex-col items-start">
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                        Coleção<br />Conjuntos
                    </h3>
                    <button className="bg-white text-black px-8 py-4 text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 uppercase">
                        Comprar Agora <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

const NewArrivalsSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 container mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">(Novidades)</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900">Os Essenciais<br />Desta Estação</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {NEW_ARRIVALS_HOME.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

const AboutSection = ({ setPage }) => {
    return (
        <section className="py-12 container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[600px] md:h-[800px] overflow-hidden">
                    <img
                        src={IMAGES.img37}
                        alt="About Brand"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="order-1 lg:order-2 flex flex-col justify-center items-start lg:pl-12">
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-6">(Sobre a Loverse)</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-neutral-900">
                        Peças além das estações, criadas para adaptar e permanecer atemporais.
                    </h2>
                    <button
                        onClick={() => { setPage('story'); window.scrollTo(0, 0); }}
                        className="bg-black text-white px-10 py-4 text-sm font-bold tracking-wide hover:bg-neutral-800 transition-colors uppercase"
                    >
                        Nossa História
                    </button>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-neutral-900 text-white">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-8">(Avaliações)</p>
                    <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-12">
                        "Adoro a qualidade — o tecido parece premium e o caimento é perfeito. Recebi elogios e com certeza vou pedir novamente."
                    </h3>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neutral-700 rounded-full overflow-hidden">
                            <img src={IMAGES.img38} loading="lazy" className="w-full h-full object-cover" alt="User" />
                        </div>
                        <div>
                            <p className="font-bold">Emma Collins</p>
                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                <CheckCircle size={14} className="text-blue-500" /> Compra Verificada
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] relative bg-neutral-800 overflow-hidden">
                    <img
                        src={IMAGES.img39}
                        alt="Testimonial Context"
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
        </section>
    )
}

const Home = ({ setPage }) => {
    return (
        <>
            <HeroHome setPage={setPage} />
            <BestsellersSection />
            <CollectionsSplit setPage={setPage} />
            <NewArrivalsSection />
            <AboutSection setPage={setPage} />
            <TestimonialsSection />
        </>
    );
};

export default Home;
