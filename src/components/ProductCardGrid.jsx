import React from 'react';

const ProductCardGrid = ({ product }) => {
    return (
        <div className="group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full aspect-[0.8] overflow-hidden bg-gray-100">
                {product.tag && (
                    <div className={`absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${product.tagColor === 'red' ? 'bg-[#b02724]' : 'bg-[#262626]'}`}>
                        {product.tag}
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <button className="w-full bg-white text-black py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-100 shadow-md">
                        Selecionar Opções
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-1">
                <h3 className="text-lg font-semibold text-neutral-900">{product.name}</h3>
                <div className="flex items-center gap-3">
                    {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through font-medium">{product.originalPrice}</span>
                    )}
                    <span className="text-sm font-medium text-neutral-600">{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCardGrid;
