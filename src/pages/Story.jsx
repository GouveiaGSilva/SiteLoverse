import React from 'react';
import { IMAGES } from '../data/images';

const Story = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className="pt-32 pb-20 px-6 md:px-12 container mx-auto text-center">
                <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">(Sobre Nós)</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Nossa História</h1>
                <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto font-light leading-relaxed">
                    Nascemos da necessidade de simplificar. Acreditamos que o verdadeiro estilo não grita, ele sussurra através da qualidade, do corte e da atemporalidade.
                </p>
            </header>

            <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden mb-24">
                <img
                    src={IMAGES.img40}
                    alt="Atelier"
                    className="w-full h-full object-cover"
                />
            </section>

            <section className="container mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-3xl font-bold mb-6">Design Consciente</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                        Cada peça da Loverse é desenhada com um propósito. Fugimos das tendências passageiras para criar um guarda-roupa que dura anos, não apenas uma estação.
                    </p>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        Trabalhamos diretamente com fabricantes éticos para garantir que cada costura conte uma história de respeito: pelo meio ambiente e pelas pessoas que fazem nossas roupas.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={IMAGES.img41} className="w-full aspect-[3/4] object-cover bg-gray-100" alt="Detail 1" />
                    <img src={IMAGES.img42} className="w-full aspect-[3/4] object-cover bg-gray-100 mt-8" alt="Detail 2" />
                </div>
            </section>
        </div>
    );
};

export default Story;
