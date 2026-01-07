import React from 'react';

export const BrandStory: React.FC = () => {
    return (
        <section className="container mx-auto px-6 pb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-start relative">

                {/* Left Column (Small Cards) */}
                <div className="w-full lg:w-[20%] flex flex-col gap-16 items-center lg:items-center pt-20">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center">
                        <img src="/assets/hero-bottles.png" className="h-32 object-contain grayscale opacity-80" alt="Small Bottle" />
                        <p className="mt-4 text-[10px] font-bold text-gray-800 tracking-wider">PREMIUM GLASS WATER</p>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-lg border border-gray-100 p-2">
                            {/* Placeholder for the box image - using a small water splash or bottle part */}
                            <div className="w-full h-full bg-linear-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center text-blue-800 text-xs text-center font-serif">
                                ASVA
                            </div>
                        </div>
                        <p className="mt-4 text-[10px] font-bold text-gray-800 text-center uppercase tracking-wider">Sustainable <br /> Glass Bottles</p>
                    </div>
                </div>

                {/* Center Column (Composite Image) */}
                <div className="w-full lg:w-[50%] relative h-[600px] flex items-center justify-center">
                    {/* Background Blob/Shape for the image */}
                    <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl opacity-50 transform scale-75"></div>

                    {/* Woman Image */}
                    <div className="relative z-10 ">
                        <img
                            src="/assets/brand-woman.png"
                            className="h-[500px] w-auto object-cover rounded-2xl shadow-sm"
                            alt="Woman"
                            style={{ clipPath: 'inset(0 0 0 0 round 20px)' }}
                        />
                    </div>
                    {/* Big Bottle Overlap */}
                    {/* <div className="absolute right-10 bottom-10 z-20">
                        <img src="/assets/hero-bottles.png" className="h-[450px] w-auto drop-shadow-2xl" alt="Big Bottle" />
                    </div> */}
                </div>

                {/* Right Column (Text Content) */}
                <div className="w-full lg:w-[30%] flex flex-col gap-16 pt-10 pl-0">

                    {/* Text Block 1 */}
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-semibold">SUSTAINABLE & PURE</p>
                        <h3 className="text-3xl font-serif text-black mb-4 leading-tight">Our brands, <br /> your trust</h3>
                        <p className="text-xs text-gray-500 leading-6 mb-6 font-medium">
                            A beautiful name for Arctic pure. Bottled at source under the strict environmental laws of Svalbard. A beautiful name for Arctic pure. Bottled at source.
                            <br /><br />
                            A beautiful name for Arctic pure. Bottled at source under the strict environmental laws.
                        </p>
                        <a href="#" className="inline-block text-[10px] font-bold text-black border-b border-gray-300 pb-1 hover:border-black uppercase tracking-widest transition-colors">Learn More</a>
                    </div>

                    {/* Text Block 2 */}
                    <div>
                        <h3 className="text-3xl font-serif text-black mb-4 leading-tight">Our brands, <br /> your trust</h3>
                        <p className="text-xs text-gray-500 leading-6 mb-6 font-medium">
                            A beautiful name for Arctic pure. For decades to come, experience the taste of the Arctic. Purest water on earth.
                        </p>
                        <a href="#" className="inline-block text-[10px] font-bold text-black border-b border-gray-300 pb-1 hover:border-black uppercase tracking-widest transition-colors">Shop</a>
                    </div>

                </div>

            </div>
        </section>
    );
};
