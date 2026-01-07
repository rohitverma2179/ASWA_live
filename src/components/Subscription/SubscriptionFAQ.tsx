import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const SubscriptionFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl pt-12 border-t border-gray-200">
                <h3 className="text-xl font-serif text-gray-800 mb-8">Frequently Asked Questions</h3>

                <div className="space-y-0">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="border-b border-gray-100">
                            <div
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex items-center justify-between py-6 cursor-pointer hover:bg-gray-50 px-4 transition-colors group"
                            >
                                <span className="text-xl md:text-3xl font-serif text-black group-hover:text-gray-600 transition-colors">
                                    Also Frequently Asked Questions
                                </span>
                                <ChevronRight
                                    className={`text-gray-400 w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-90 text-black' : ''}`}
                                />
                            </div>
                            {/* Accordion Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 py-4' : 'max-h-0'}`}>
                                <p className="text-sm text-gray-600 px-4">
                                    Here is the answer to this question. It provides details about the subscription plan, delivery, or product specifics.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
