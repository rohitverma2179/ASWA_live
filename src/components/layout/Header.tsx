


import React, { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgAsva from "../../assets/ASVA_Logo.png";
import { LuShoppingCart } from 'react-icons/lu';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

export const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setOpen(prev => !prev);
    };

    const handleOpenSearch = () => {
        console.log("openSearch", openSearch);
        setOpenSearch(prev => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (


        <>
            <header className={`fixed top-0 left-0 right-0 z-50    ${scrolled ? 'bg-white/50 bg-blend-saturation backdrop-blur-xl' : 'bg-transparent'}`}>
                <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between relative">

                    {/* Menu Button */}

                    <button
                        onClick={handleToggleMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    {/* Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link to='/'>
                            <img
                                src={imgAsva}
                                alt="ASVA"
                                className="h-[5rem] w-[5rem] object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            aria-label="Search"
                        >
                            <Search onClick={handleOpenSearch} className="w-6 h-6" />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${openSearch ? 'max-w-[200px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'}`}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-b border-black outline-none py-1 w-full text-sm"
                                autoFocus={openSearch}
                            />
                        </div>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            aria-label="User"
                        >
                            <Link to={"/shop"}>
                                <LuShoppingCart className="w-6 h-6" />
                            </Link>
                        </button>
                    </div>
                </div>
            </header>

            {/* Slide Down Menu */}
            <div
                className={`fixed inset-0 z-40 bg-white transition-transform duration-500
               ${open ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Close */}
                <button
                    onClick={handleToggleMenu}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    aria-label="Toggle menu"
                >
                    {/* {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />} */}
                    {open ? "" : ""}
                </button>

                {/* Menu Links */}
                <nav className="h-[60%] flex flex-col pt-20 xl:pl-24  sm:pl-16 items-center sm:items-start justify-start gap-10 text-3xl font-medium">
                    <Link to="/" onClick={() => setOpen(false)} className="hover:opacity-60">
                        Home
                    </Link>

                    <Link to="/ProductPage" onClick={() => setOpen(false)} className="hover:opacity-60">
                        Shop
                    </Link>

                    <Link to="/blog" onClick={() => setOpen(false)} className="hover:opacity-60">
                        Blog
                    </Link>

                    <Link
                        to="/subscription"
                        onClick={() => setOpen(false)}
                        className="hover:opacity-60"
                    >
                        Subscribe
                    </Link>
                    <div className="flex gap-6 mt-2 mb-4">
                        <AiFillInstagram size={34} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        <FaFacebook size={30} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                    </div>
                </nav>
            </div>
        </>
    );
};