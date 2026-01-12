// // Swap Two Numbers
// // Last Updated : 23 Jul, 2025

// // Given two numbers a and b, the task is to swap them.



// import React, { useEffect } from 'react';
// import imgAsva from "../../assets/ASVA_Logo.png";
// import { Link } from 'react-router-dom';
// import { BsTwitterX } from 'react-icons/bs';
// import { FaFacebook } from 'react-icons/fa';
// import { AiFillInstagram } from 'react-icons/ai';
// export const Footer: React.FC = () => {


//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [])

//     return (
//         <footer className="w-full h-[50vh] bg-linear-to-b from-[#cbf1fa] to-white pt-20 ">
//             <div className='container mx-auto px-16'>
//                 <h2 className='text-3xl md:text-5xl font-serif text-black mb-6 leading-tight'>Bottles for Change. Built for India.
//                 </h2>
//                 <p className='text-sm md:text-base text-gray-800 leading-relaxed mb-16 max-w-xl'>When you choose ASVA, you choose more than premium hydration, you support a future where safe water, healthy living and sustainability go together.
//                 </p>
//             </div>
//             <div className="container mx-auto px-16">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-start">

//                     {/* Left: Navigation */}
//                     <nav className="flex flex-col gap-6 text-[16px] uppercase font-bold tracking-widest text-black mb-12 md:mb-0 w-full md:w-1/3">
//                         <Link to="/" className="hover:text-blue-600  transition-colors">Home</Link>
//                         <Link to="/shop" className="hover:text-blue-600  transition-colors">Shop</Link>
//                         <Link to="/blog" className="hover:text-blue-600  transition-colors">Blog</Link>
//                         <Link to="/subscribe" className="hover:text-blue-600  transition-colors">Subscribe</Link>
//                     </nav>

//                     {/* Center: Logo */}
//                     <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
//                         <div className="flex flex-col items-center">
//                             <img className='h-48 w-48' src={imgAsva} alt="Logo" />
//                             {/* <Droplets size={40} className="text-[#1a3b5c] fill-current opacity-80" />
//                             <span className="text-[10px] tracking-[0.4em] uppercase mt-2 text-[#1a3b5c] font-bold">ASVA</span> */}
//                         </div>
//                     </div>

//                     {/* Right: Contact & Address */}
//                     <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-[12px] text-zinc-800 font-medium leading-relaxed">
//                         <div className="mb-8 flex flex-col items-start md:items-end">
//                             <p className="uppercase font-bold tracking-widest mb-3 text-[14px] text-black">Contact</p>
//                             <p className="hover:text-blue-600 cursor-pointer pb-1">CONTACT@ASVA.ART</p>
//                             <p>+00 000 000 000</p>
//                         </div>

//                         <div className="mb-8 flex flex-col items-start md:items-end">
//                             <p className="uppercase font-bold tracking-widest mb-3 text-[14px] text-black">Office Address</p>
//                             <p className="md:text-right text-gray-600">
//                                 LONGYEARBYEN, SVALBARD, <br />
//                                 London, 9170
//                             </p>
//                         </div>

                       
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

























// import React, { useState } from 'react';

// interface ProductInfoProps {
//     title: string;
//     price: string;
//     description?: string;
// }

// export const ProductInfo: React.FC<ProductInfoProps> = ({ title, price }) => {
//     const [quantity, setQuantity] = useState(1);

//     return (
//         <div className="flex flex-col pt-0 lg:pt-8 md:pl-8 lg:pl-16">
//             <h1 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight">
//                 {title}
//             </h1>

//             <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10 max-w-md">
//                 A household name for decades gone, decades to come.
//                 A household name for decades .
//             </p>

//             <div className="flex items-start gap-8 mb-4">
//                 {/* Price Button */}
//                 <div className="flex flex-col items-center gap-2">
//                     <button className=" cursor-pointer px-8 py-2 rounded-full border border-gray-800 text-lg font-medium min-w-[140px]">
//                         {price}
//                     </button>
//                     <span className=" ">
//                         <button className=" cursor-pointer px-4 py-2 rounded-full border border-gray-800 text-lg font-medium min-w-[140px]">
//                             Add to Cart
//                         </button>
//                     </span>
//                 </div>

//                 {/* Quantity Selector */}
//                 <div className="flex items-center border border-gray-800 rounded-full px-4 py-2 gap-6">
//                     <button
//                         onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                         className=" cursor-pointer text-xl font-medium w-4 disabled:opacity-30"
//                         disabled={quantity <= 1}
//                     >
//                         -
//                     </button>

//                     <span className="text-lg font-medium w-4 text-center">{quantity}</span>
//                     <button
//                         onClick={() => setQuantity(q => q + 1)}
//                         className="text-xl font-medium w-4"
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };