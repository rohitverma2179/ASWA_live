import React, { useState } from 'react';

interface ProductGalleryProps {
    image: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ image }) => {
    const images = [image, image, image, image];
    const [activeImage, setActiveImage] = useState(0);
    return (
        <div className="flex gap-4 md:gap-6 h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 w-16 md:w-20 lg:w-24 shrink-0">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`aspect-square w-full rounded-xl border p-2 cursor-pointer transition-all
                    ${activeImage === idx ? 'border-blue-300 shadow-sm' : 'border-gray-100 hover:border-gray-200'}
                `}
                        onClick={() => setActiveImage(idx)}
                    >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            {/* Main Image View */}
            <div className="flex-1 bg-white border border-gray-100 rounded-3xl relative flex items-center justify-center p-8 md:p-12 shadow-sm">
                <img src={images[activeImage]} alt="Product Main" className="h-full w-auto object-contain max-h-[90%]" />

                {/* Badges on the right inside main image container */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex flex-col gap-3">
                    <div className="w-8 h-24 md:w-10 md:h-32 bg-[#00659e] rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg">
                        <span className="-rotate-90 text-xs md:text-sm font-bold whitespace-nowrap tracking-widest">1 L</span>
                    </div>
                    <div className="w-8 h-24 md:w-10 md:h-32 bg-[#00659e] rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg">
                        <span className="-rotate-90 text-[10px] md:text-xs font-bold leading-tight text-center">
                            <span className="block">12</span>
                            <span className="block mt-1">Bottles</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};