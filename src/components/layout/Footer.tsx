import React from 'react';
import { Droplets, Instagram, Twitter, Facebook } from 'lucide-react';
// import imgAsva from "../../assets/logo.png";
import imgAsva from "../../assets/ASVA_Logo.png";
export const Footer: React.FC = () => {
    return (
        <footer className="w-full h-1/2 bg-linear-to-b from-[#cbf1fa] to-white pt-20 pb-10">
            <div className="container mx-auto px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start">

                    {/* Left: Navigation */}
                    <nav className="flex flex-col gap-6 text-[16px] uppercase font-bold tracking-widest text-black mb-12 md:mb-0 w-full md:w-1/3">
                        <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Shop</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
                        {/* <a href="#" className="hover:text-blue-600 transition-colors">Subscribe</a> */}
                    </nav>

                    {/* Center: Logo */}
                    <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
                        <div className="flex flex-col items-center">
                            <img className='h-48 w-48' src={imgAsva} alt="Logo" />
                            {/* <Droplets size={40} className="text-[#1a3b5c] fill-current opacity-80" />
                            <span className="text-[10px] tracking-[0.4em] uppercase mt-2 text-[#1a3b5c] font-bold">ASVA</span> */}
                        </div>
                    </div>

                    {/* Right: Contact & Address */}
                    <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-[12px] text-zinc-800 font-medium leading-relaxed">
                        <div className="mb-8 flex flex-col items-start md:items-end">
                            <p className="uppercase font-bold tracking-widest mb-3 text-[14px] text-black">Contact</p>
                            <p className="hover:text-blue-600 cursor-pointer pb-1">CONTACT@ASVA.ART</p>
                            <p>+00 000 000 000</p>
                        </div>

                        <div className="mb-8 flex flex-col items-start md:items-end">
                            <p className="uppercase font-bold tracking-widest mb-3 text-[14px] text-black">Office Address</p>
                            <p className="md:text-right text-gray-600">
                                LONGYEARBYEN, SVALBARD, <br />
                                London, 9170
                            </p>
                        </div>

                        <div className="flex gap-6 mt-2">
                            <Twitter size={16} className="text-gray-800 hover:text-blue-500 cursor-pointer transition-colors" />
                            <Instagram size={16} className="text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
                            <Facebook size={16} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
