import React, { useState } from 'react';

interface ProductInfoProps {
    title: string;
    price: string;
    description?: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ title, price }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col pt-0 lg:pt-8 md:pl-8 lg:pl-16">
            <h1 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight">
                {title}
            </h1>

            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10 max-w-md">
                A household name for decades gone, decades to come.
                A household name for decades .
            </p>

            <div className="flex items-start gap-8 mb-4">
                {/* Price Button */}
                <div className="flex flex-col items-center gap-2">
                    <button className=" cursor-pointer px-8 py-3 rounded-full border border-gray-800 text-lg font-medium min-w-[140px]">
                        {price}
                    </button>
                    <span className=" ">
                        <button className=" cursor-pointer px-4 py-3 rounded-full border border-gray-800 text-lg font-medium min-w-[140px]">
                            Add to Cart
                        </button>
                    </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-800 rounded-full px-4 py-3 gap-6">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className=" cursor-pointer text-xl font-medium w-4 disabled:opacity-30"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>

                    <span className="text-lg font-medium w-4 text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="text-xl font-medium w-4"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};
