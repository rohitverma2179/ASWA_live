import React from 'react';
import { MousePointerClick, CheckSquare, Truck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Select a product",
            desc: ["Go to the \"Shop Products\" tab.", "Select the product from different pack sizes suitable for every special occasion."],
            Icon: MousePointerClick,
            align: "right"
        },
        {
            id: 2,
            title: "Select a product",
            desc: ["Go to the \"Shop Products\" tab.", "Select the product from different pack sizes suitable for every special occasion."],
            Icon: CheckSquare,
            align: "left"
        },
        {
            id: 3,
            title: "Select a product",
            desc: ["Go to the \"Shop Products\" tab.", "Select the product from different pack sizes suitable for every special occasion."],
            Icon: Truck, // Truck for delivery logic
            align: "right"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">How it works</h2>
                    <p className="text-sm font-bold text-gray-900">Follow 3 easy and simple steps!</p>
                </div>

                <div className="flex flex-col gap-24 max-w-4xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                            {/* Text Side */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-serif text-black mb-6">
                                    {step.id}. {step.title}
                                </h3>
                            </div>

                            {/* Icon/Content Side */}
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="w-48 h-32 relative mb-6 flex items-center justify-center">
                                    {/* Using Lucide Icon as placeholder for the graphic illustration */}
                                    <step.Icon strokeWidth={1} className="w-32 h-32 text-[#00b5ad]" />
                                </div>
                                <div className="text-xs text-gray-600 space-y-1">
                                    {step.desc.map((line, idx) => (
                                        <p key={idx}>• {line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Shop</span>
                </div>
            </div>
        </section>
    );
};
