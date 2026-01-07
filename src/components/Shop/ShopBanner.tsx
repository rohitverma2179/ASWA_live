import React, { useState, useEffect } from 'react';

const BANNER_IMAGES = [
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2500&auto=format&fit=crop"
];

export const ShopBanner: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-8">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm">
                {BANNER_IMAGES.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Shop Banner ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 gap-2">
                {BANNER_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-1.5 h-1.5 cursor-pointer rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-black w-4' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
               
            </div>
        </div>
    );
};