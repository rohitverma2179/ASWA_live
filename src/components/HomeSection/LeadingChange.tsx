import React from 'react';
// import { ImpactCard } from './ImpactCard';
import imgBackground from "../../assets/HomeImg/Leading_bg.png"

export const LeadingChange: React.FC = () => {
    return (
        // <section className="pt-20 pb-20">

        //     <div className="text-center mb-16 px-6">
        //         <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Leading through Change</h2>
        //         <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
        //             A BEAUTIFUL NAME FOR ARCTIC PURE. BOTTLED AT SOURCE.
        //         </p>
        //     </div>

        //     {/* Background Image Area */}
        //     <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden">
        //         <div className="absolute inset-0 bg-[#0c2e4e]"
        //             style={{
        //                 backgroundImage: `
        //             repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px),
        //             repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)
        //           `,
        //                 backgroundSize: '100% 100%'
        //             }}
        //         >
        //             {/* Gradient overlay to add depth */}
        //             <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        //         </div>
        //     </div>

        //     {/* Floating Card */}
        //     <div className="px-6">
        //         <ImpactCard />
        //     </div>
        // </section>
        
        <section className="relative py-6 sm:py-24 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="font-['Kalnia'] font-medium text-5xl lg:text-6xl mb-4">
                        Leading through Change
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A household name for decades gone, decades to come.
                    </p>
                </div>

                {/* Background Image Section */}
                <div className="relative min-h-[715px]  rounded-3xl overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={imgBackground}
                            alt="Sustainability"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* White Card Overlay */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] bg-gradient-to-b from-white to-[#ACE3F1] mb-6 rounded-t-3xl shadow-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left - Text Content */}
                            <div className="space-y-6">
                                <h3 className="font-['Kalnia'] font-medium text-2xl lg:text-4xl leading-tight">
                                    Bottles for Change aims to create awareness that
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-base lg:text-lg font-medium">
                                        USED PLASTIC IS NOT WASTE.
                                    </p>
                                    <p className="text-base lg:text-lg font-medium">
                                        IT HAS VALUE. IT IS RECYCLABLE.
                                    </p>
                                </div>
                                <button className="font-['Kaisei_Decol'] font-medium text-lg lg:text-xl hover:underline mt-0 sm:mt-4">
                                    Learn More
                                </button>
                            </div>

                            {/* Right - Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                {/* Metric Cells */}
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">USED PLASTIC</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">Citizens</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">USED PLASTIC</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">Citizens</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">Citizens</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">USED PLASTIC</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">USED PLASTIC</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-['Kalnia'] font-medium text-3xl lg:text-4xl">45</p>
                                    <p className="text-xs lg:text-sm">Citizens</p>
                                </div>
                            </div>
                        </div>

                        {/* Shop Button */}
                        <div className="text-center mt-8">
                            <button className="font-['Kaisei_Decol'] font-medium text-lg lg:text-xl hover:underline">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
