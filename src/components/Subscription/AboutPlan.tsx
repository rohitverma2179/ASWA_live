import React from 'react';
import Button from '../../assets/bottle_png_.png';

export const AboutAboutPlan: React.FC = () => {
    return (
        <section className="bg-linear-to-b from-[#cbf1fa] via-[#e0f7fc] to-white py-20 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                {/* Left: Info Card */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-serif text-black mb-12">About Subscription Plan</h2>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <ul className="space-y-4 text-xs md:text-sm text-gray-800 font-medium leading-relaxed">
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Opt for any day (Monday to Saturday) for delivery.</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Subscribe for a period of 1, 3, 6 or 12 months.</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Reschedule your delivery anytime within the subscription period or get an extension according to the extension limit to your plan.</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Avail multiple offers available for you according to your subscription plan.</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-center md:text-left">
                            <span className="text-[10px] font-bold text-black uppercase tracking-widest cursor-pointer border-b border-black pb-0.5">Subscription</span>
                        </div>
                    </div>
                </div>

                {/* Right: Bottle Image */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative h-80 md:h-[500px] w-auto">
                        <img
                            src={Button}
                            alt="Subscription Bottle"
                            className="h-full w-auto object-contain"
                        />
                        {/* Badges */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-8 flex flex-col gap-4">
                            <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="-rotate-90 text-xs font-bold whitespace-nowrap tracking-widest">20 L</span>
                            </div>
                            <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="-rotate-90 text-[10px] font-bold leading-tight text-center">
                                    <span className="block">Pure</span>
                                    <span className="block mt-1">Water</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
