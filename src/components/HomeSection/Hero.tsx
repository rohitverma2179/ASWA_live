import React, { useEffect, useState } from 'react';
import imgBottle from "../../assets/HomeImg/hero_1.png";
import shape from "../../assets/HomeImg/shap.png";
import { motion, AnimatePresence } from "framer-motion";

type HeroSlide = {
    title: string;
    description: string;
    image: string;
};

const heroSlides: HeroSlide[] = [

    {
        title: "Taste the Arctic\nto Save the Arctic",
        description:
            "Ultra-premium iceberg water from Svalbard helping fight climate change",
        image: imgBottle,
    },
    {
        title: "Pure Iceberg\nPure Future",
        description:
            "Sustainably harvested Arctic iceberg water from the Arctic",
        image: imgBottle,
    },
    {
        title: "From Ice\nTo Impact",
        description:
            "Every bottle supports Arctic and climate preservation",
        image: imgBottle,
    },

];

export const Hero: React.FC = () => {


    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 10000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    };

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 overflow-hidden">
            {/* CLIP PATH BACKGROUND */}
            <div
                className="absolute inset-0 overflow-hidden lg:mt-14 "
                style={{
                    // clipPath: `path('${svgPaths.p39b5b700}')`,
                    // background:
                    //   "linear-gradient(to bottom, #ffffff 40%, #ACE3F1 100%)",
                    background: `url(${shape})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                }}
            />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="relative space-y-6 lg:space-y-8">
                        {/* Vertical Text */}
                        <div className="absolute left-4 lg:left-[-4rem] top-1/3 hidden lg:block">
                            <p className="text-3xl lg:text-4xl tracking-[0.08em] rotate-[-90deg] origin-left font-['Kalnia'] font-medium whitespace-nowrap">
                                ASVA
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4 lg:space-y-0"
                            >
                                <h1 className="font-['Kalnia'] font-medium text-5xl lg:text-7xl leading-tight whitespace-pre-line">
                                    {heroSlides[activeSlide].title}
                                </h1>

                                <p className="text-lg lg:text-xl max-w-md text-gray-700">
                                    {heroSlides[activeSlide].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>


                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center lg:justify-end min-h-[400px] lg:min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -60 }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                {/* Large Bottle */}
                                <img
                                    src={heroSlides[activeSlide].image}
                                    alt="ASVA Water Bottle"
                                    className="w-64 lg:w-[400px] h-auto object-contain drop-shadow-2xl"
                                />

                                {/* Small Bottle */}
                                <img
                                    src={heroSlides[activeSlide].image}
                                    alt="ASVA Water Bottle Small"
                                    className="absolute bottom-0 -left-4 lg:-left-8 w-32 lg:w-44 h-auto object-contain drop-shadow-xl"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* CAROUSEL BUTTON */}
                    <div className="flex justify-center lg:justify-end  pt-4 lg:pt-0 z-1">
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="w-5 h-5 rounded-full bg-black/25 hover:bg-black flex items-center justify-center hover:scale-110 transition" >
                            <div className="w-3 h-0.5 bg-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// import { useEffect, useState } from "react";
// import svgPaths from "../../imports/svg-ili4v5rljh";

// type HeroSlide = {
//   title: string;
//   description: string;
//   image: string;
// };

// const heroSlides: HeroSlide[] = [
//   {
//     title: "Taste the Arctic\nto Save the Arctic",
//     description:
//       "Ultra-premium iceberg water from Svalbard helping fight climate change",
//     image: imgBottle,
//   },
//   {
//     title: "Pure Iceberg\nPure Future",
//     description:
//       "Sustainably harvested Arctic iceberg water from the Arctic",
//     image: imgBottle,
//   },
//   {
//     title: "From Ice\nTo Impact",
//     description:
//       "Every bottle supports Arctic and climate preservation",
//     image: imgBottle,
//   },
// ];

// export default function Hero(): JSX.Element {
//   const [activeSlide, setActiveSlide] = useState<number>(0);

//   useEffect(() => {
//   const interval = setInterval(() => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   }, 10000); // 5 seconds

//   return () => clearInterval(interval);
// }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   return (
//     <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 overflow-hidden">
//       {/* CLIP PATH BACKGROUND */}
//       <div
//         className="absolute inset-0 overflow-hidden "
//         style={{
//           // clipPath: `path('${svgPaths.p39b5b700}')`,
//           // background:
//           //   "linear-gradient(to bottom, #ffffff 40%, #ACE3F1 100%)",
//           background: `url(${shape})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           // display: "flex",
//           // alignItems: "center",
//           // justifyContent: "center",
//           marginTop: "2rem",
//         }}
//       />

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div className="relative space-y-6 lg:space-y-8">
//             {/* Vertical Text */}
//             <div className="absolute left-4 lg:left-[-4rem] top-1/3 hidden lg:block">
//               <p className="text-3xl lg:text-4xl tracking-[0.08em] rotate-[-90deg] origin-left font-['Kalnia'] font-medium whitespace-nowrap">
//                 ASVA
//               </p>
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSlide}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40 }}
//                 transition={{ duration: 0.6 }}
//                 className="space-y-4 lg:space-y-6"
//               >
//                 <h1 className="font-['Kalnia'] font-medium text-5xl lg:text-7xl leading-tight whitespace-pre-line">
//                   {heroSlides[activeSlide].title}
//                 </h1>

//                 <p className="text-lg lg:text-xl max-w-md text-gray-700">
//                   {heroSlides[activeSlide].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             {/* CAROUSEL BUTTON */}
//             <div className="flex justify-center lg:justify-end pt-4 lg:pt-8">
//               <button
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//                 className="w-5 h-5 rounded-full bg-black flex items-center justify-center hover:scale-110 transition"
//               >
//                 <div className="w-3 h-0.5 bg-white" />
//               </button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center items-center lg:justify-end min-h-[400px] lg:min-h-[600px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSlide}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -60 }}
//                 transition={{ duration: 0.7 }}
//                 className="relative"
//               >
//                 {/* Large Bottle */}
//                 <img
//                   src={heroSlides[activeSlide].image}
//                   alt="ASVA Water Bottle"
//                   className="w-64 lg:w-[400px] h-auto object-contain drop-shadow-2xl"
//                 />

//                 {/* Small Bottle */}
//                 <img
//                   src={heroSlides[activeSlide].image}
//                   alt="ASVA Water Bottle Small"
//                   className="absolute bottom-0 -left-4 lg:-left-8 w-32 lg:w-44 h-auto object-contain drop-shadow-xl"
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }