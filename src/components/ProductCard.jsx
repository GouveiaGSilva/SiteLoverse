import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
        >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                {product.tag && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#262626]">
                        {product.tag}
                    </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-3 text-sm font-medium shadow-lg hover:bg-neutral-100 uppercase tracking-wide">
                        Selecionar Opções
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-500 mt-1 font-medium">{product.price}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
