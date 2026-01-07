import React from 'react';

export const InfoSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-t from-white from-50% to-[#ACE3F1] py-6 sm:py-20 px-6 mt-10 rounded-3xl mx-4 md:mx-8">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 leading-tight text-center">
                    Explore the full range of Bisleri Products <br />
                    From Packaged Drinking Water to Asva
                </h2>

                <div className="text-xs md:text-base text-gray-600 leading-relaxed space-y-4 max-w-3xl mx-auto">
                    <p>
                        Asva is more than just a packaged drinking water brand. We have a range of products to suit your needs and preferences. Whether you want to quench your thirst, enjoy a fizzy drink, or buy some cool merchandise, Bisleri has something for you. Here are some of the products you can explore:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-left inline-block">
                        <li>
                            <span className="font-bold text-gray-800">Packaged Drinking Water:</span> The most trusted brand of packaged drinking water in India. Water is treated with an 11-step process to ensure purity and safety. You can choose from various pack sizes, from 250ml to 20 litres.
                        </li>
                        <li>
                            <span className="font-bold text-gray-800">Vedica:</span> Premium Spring Water is natural mountain water sourced from the Himalayas. It is rich in minerals and has a balanced pH level. It comes in elegant glass and PET bottles.
                        </li>
                    </ul>
                    <p className="pt-4 font-medium italic">
                        You can order these products online from the Bisleri @Doorstep platform.
                    </p>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl font-serif text-black mb-4">
                        Full range of Products Packaged Drinking
                    </h3>
                    <p className="text-xs md:text-base text-gray-500 max-w-3xl mx-auto">
                        Bisleri is more than just a packaged drinking water brand. We have a range of products to suit your needs and preferences. Whether you want to quench your thirst, enjoy a fizzy drink, or buy some cool merchandise, Bisleri has something for you. Here are some of the products you can explore:
                    </p>
                </div>
            </div>
        </section>
    );
};
