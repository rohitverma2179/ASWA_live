import React from 'react';

export const ProductDescription: React.FC = () => {
    
    return (
        <div className="mt-12 md:ml-8 lg:ml-16 bg-linear-to-b from-[#cbf1fa] via-[#dcf6fc]/50 to-white/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-medium">
                <p>
                    Here is more than just a packaged drinking water brand. We have a range of products to suit your needs and preferences. Whether you want to quench your thirst, enjoy a fizzy drink, or buy some cool merchandise, Bisleri has something for you. Here are some of the products you can explore:
                </p>
                <p>
                    asva is more than just a packaged drinking water brand. We have a range of products to suit your needs and preferences. Whether you want to quench your thirst, enjoy a fizzy drink, or buy some cool merchandise, Bisleri has something for you. Here are some of the products you can explore:
                </p>
            </div>

            <div className="mt-12 space-y-12">
                {/* FAQ */}
                <div>
                    <h3 className="font-serif font-bold text-lg mb-6 text-black">FAQ</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map(i => (
                            <p key={i} className="text-sm font-serif text-gray-800">Also Frequently Asked Questions</p>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-black">Disclaimer</h3>
                    <p className="text-sm text-gray-800">
                        Asva is more than just a packaged drinking water brand.
                    </p>
                </div>
            </div>
        </div>
    );
};
