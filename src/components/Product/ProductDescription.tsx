import React from 'react';

export const ProductDescription: React.FC<{description: string, subDescription: string, disclaimer: string, faq: {question: string, answer: string}[]}> = ({description, subDescription, disclaimer, faq}) => {

    
    return (
        <div className="mt-12 md:ml-8 lg:ml-16 bg-linear-to-b from-[#cbf1fa] via-[#dcf6fc]/50 to-white/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-medium">
                <p>
                    {description}
                </p>
                <p>
                    {subDescription}
                </p>
            </div>

            <div className="mt-12 space-y-12">
                {/* FAQ */}
                <div>
                    <h3 className="font-serif font-bold text-lg mb-6 text-black">FAQ</h3>
                    <div className="space-y-6">
                        {faq.map((item, index) => (
                            <div key={index} className="space-y-2">
                                <p className="text-sm font-serif font-bold text-gray-800">{item.question}</p>
                                <p className="text-sm font-serif text-gray-800">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-black">Disclaimer</h3>
                    <p className="text-sm text-gray-800">
                        {disclaimer}
                    </p>
                </div>
            </div>
        </div>
    );
};
