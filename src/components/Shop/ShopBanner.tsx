import React, { useState, useEffect } from 'react';

const BANNER_IMAGES = [
    "https://cdn.fstoppers.com/styles/full/s3/media/2020/12/21/nando-vertical-horizontal-11.jpg",
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
        <div className="w-full max-w-[1090px] mx-auto px-4 md:px-8 pt-24 pb-8">
            <div className="relative w-full bg-white rounded-[0.5rem] border border-zinc-800 p-6  shadow-xs">
                {/* Camera/Home Button Dot */}
                {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-900 rounded-full z-10"></div> */}

                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[0.5rem] overflow-hidden bg-gray-100">
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