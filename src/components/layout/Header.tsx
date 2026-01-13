


import React, { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgAsva from "../../assets/ASVA_Logo.png";
import { LuShoppingCart } from 'react-icons/lu';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { PRODUCTS } from '../../data/shopData';

export const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredProducts([]);
        } else {
            const results = PRODUCTS.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.type.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5); // Limit to 5 results for cleaner UI
            setFilteredProducts(results);
        }
    }, [searchQuery]);

    const handleToggleMenu = () => {
        setOpen(prev => !prev);
    };

    const handleOpenSearch = () => {
        setOpenSearch(prev => !prev);
        if (openSearch) {
            setSearchQuery('');
        }
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
                                className="h-20 w-20 object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4 relative">
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${openSearch ? 'max-w-[300px] opacity-100' : 'max-w-0 opacity-0'}`}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="bg-transparent border-b border-black outline-none py-1 w-full text-sm pr-8"
                                autoFocus={openSearch}
                            />
                        </div>

                        <button
                            onClick={handleOpenSearch}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            aria-label="Search"
                        >
                            {openSearch ? <X className="w-5 h-5 text-gray-500" /> : <Search className="w-6 h-6" />}
                        </button>

                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            aria-label="Cart"
                        >
                            <Link to={"/shop"}>
                                <LuShoppingCart className="w-6 h-6" />
                            </Link>
                        </button>

                        {/* Search Results Dropdown */}
                        {openSearch && searchQuery && (
                            <div className="absolute top-full right-0 mt-4 w-72 md:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                                {filteredProducts.length > 0 ? (
                                    <div className="py-2">
                                        <div className="px-4 py-2 border-b border-gray-50">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Products</span>
                                        </div>
                                        {filteredProducts.map(product => (
                                            <Link
                                                key={product.id}
                                                to={`/product/${product.id}`}
                                                onClick={() => {
                                                    setOpenSearch(false);
                                                    setSearchQuery('');
                                                }}
                                                className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-50 group"
                                            >
                                                <div className="w-12 h-12 bg-gray-50 rounded-lg shrink-0 p-1">
                                                    <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs font-bold text-gray-900 truncate">{product.title}</h4>
                                                    <p className="text-[10px] text-gray-500">{product.type}</p>
                                                    <span className="text-[10px] font-bold text-[#00659e]">{product.price.split('|')[1]?.trim() || product.price}</span>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="p-3 text-center bg-gray-50/50">
                                            <Link
                                                to="/shop"
                                                className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-black transition-colors"
                                                onClick={() => setOpenSearch(false)}
                                            >
                                                View all results
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 text-center">
                                        <p className="text-xs text-gray-500 italic">No products found matching "{searchQuery}"</p>
                                    </div>
                                )}
                            </div>
                        )}
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
                        Subscription
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