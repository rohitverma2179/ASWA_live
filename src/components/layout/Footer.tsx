import React, { useEffect } from 'react';
import { Droplets, Instagram, Twitter, Facebook, X } from 'lucide-react';
// import imgAsva from "../../assets/logo.png";
import imgAsva from "../../assets/ASVA_Logo.png";
import { Link } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';
export const Footer: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <footer className="w-full h-1/2 bg-linear-to-b from-[#cbf1fa] to-white pt-20 pb-10">
            <div className="container mx-auto px-16">
                <h2 className="text-4xl md:text-6xl font-serif text-black mb-0 leading-tight">
                    ASVA by Kevvali
                </h2>
                <p className="text-xs md:text-sm text-gray-600 mb-10 max-w-md font-medium tracking-wide leading-relaxed">
                    Pure Water, Better India. 

                </p>
                
 

                <div className="flex flex-col md:flex-row justify-between items-start md:items-start">

                    {/* Left: Navigation */}
                    <nav className="flex flex-col gap-6 text-[16px] uppercase font-bold tracking-widest text-black mb-12 md:mb-0 w-full md:w-1/3">
                        <Link to="/" className="hover:text-blue-600  transition-colors">Home</Link>
                        <Link to="/shop" className="hover:text-blue-600  transition-colors">Shop</Link>
                        <Link to="/blog" className="hover:text-blue-600  transition-colors">Blog</Link>
                        <Link to="/subscribe" className="hover:text-blue-600  transition-colors">Subscribe</Link>
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
                                Plot No. 2-A, Kh. No. 51/1, Third Floor,
                                <br />
                                Jai Vihar, Najafgarh Road,
                                <br />
                                Near Sant Haridas School,
                                <br />
                                Delhi - 110043
                            </p>
                        </div>

                        {/* <div className="flex gap-6 mt-2">
                            <BsTwitterX  size={30} className="text-gray-800 hover:text-black cursor-pointer transition-colors" />
                            <Instagram size={30} className="text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
                            <Facebook size={30} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div> */}

                        {/* <div className="flex gap-6 mt-2">
                            <BsTwitterX  size={30} className="text-gray-800 hover:text-black cursor-pointer transition-colors" />
                            <Instagram size={30} className="text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
                            <Facebook size={30} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
