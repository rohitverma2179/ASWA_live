import React from 'react';
import { Link } from 'react-router-dom';

export const SubscribeBanner: React.FC = () => {
    return (
        <section className="bg-linear-to-b from-white to-[#cbf1fa] pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                {/* Left: Bottles */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0 relative">
                    <div className="relative w-64 md:w-80 h-80 md:h-96">
                        {/* Placeholder for bottles - using hero bottles again as proxy */}
                        <img
                            src="/assets/hero-bottles.png"
                            alt="Subscription Bottles"
                            className="w-full h-full object-contain drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-serif text-black mb-6 leading-tight">
                        Subscribe Now
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
                        For great savings everyday, subscribe to the product of your choice for a period of 1, 3, 6, or 12 months.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block text-xs font-bold text-black border-b border-black pb-0.5 uppercase tracking-widest hover:text-gray-600 hover:border-gray-600 transition-colors"
                    >
                        Shop
                    </Link>
                </div>
            </div>
        </section>
    );
};
