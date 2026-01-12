import React from 'react';

export const FeaturedBanner: React.FC = () => {
    return (
        <section className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#1a2e25]">
                {/* Abstract Pattern to simulate image texture */}
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                    }}>
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                <div className="max-w-2xl text-white pl-0 md:pl-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Bottles for Change. Built for India.
                    </h2>
                    <p className="text-[16px] md:text-sm text-gray-300 mb-10 max-w-md font-medium tracking-wide leading-relaxed">
                        When you choose ASVA, you choose more than premium hydration, you support a future where safe water, healthy living and sustainability go together.

                    </p>
                    <button className="inline-block text-[16px]  font-bold text-white border-b border-white/50 pb-1 hover:border-white uppercase tracking-[0.2em] transition-colors">
                        Shop
                    </button>
                </div>
            </div>
        </section>
    )
};
