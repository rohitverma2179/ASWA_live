import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/shopData';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col group">
            {/* Image Container */}
            <div className="relative aspect-square bg-white rounded-lg mb-6 flex items-center justify-center p-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.badges.map((badge, index) => (
                        <span key={index} className="w-12 h-20 py-6 bg-sky-200/50  backdrop-blur-sm rounded flex items-center justify-center text-[16px] font-bold text-black border border-sky-100">
                            <div className="flex flex-col items-center leading-none">
                                {badge.includes('ml') ? (
                                    <>
                                        <span>{badge.replace('ml', '').trim()}</span>
                                        <span className="text-[10px] uppercase font-medium mt-0.5">ml</span>
                                    </>
                                ) : (
                                    <span className="whitespace-nowrap">{badge}</span>
                                )}
                            </div>
                        </span>
                    ))}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 ml-7 items-start">
                <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                     {product.author}
                </span>
                <h3 className="text-lg font-serif text-black leading-tight group-hover:text-blue-900 transition-colors">
                    {product.title}
                </h3>

                {product.price.includes(' | ') ? <div className="flex items-center gap-2 text-[16px] text-gray-500 font-medium"><s className="opacity-60 text-[13px]">{product.price.split(' | ')[0]}</s>{product.price.split(' | ')[1]}</div> : <span className="text-[12px] text-gray-500 font-medium">{product.price}</span>}
                <Link
                    to={`/product/${product.id}`}
                    className="mt-2 text-[16px] font-bold text-black border-b border-white pb-0.5 hover:border-black uppercase tracking-widest transition-colors"
                >
                    Shop
                </Link>
            </div>
        </div>
    );
};
