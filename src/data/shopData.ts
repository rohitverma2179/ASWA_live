
import aswaGlassBottle from '../assets/productimg/asva_glass_bottle.png';

import aswaPet200mlPack from '../assets/productimg/asva_pet_200ml_pack.png';
import aswaPet1lPack from '../assets/productimg/asva_pet_1l_pack.png';
import aswa5lCan from '../assets/productimg/asva_5l_can.png';
import aswa10lCan from '../assets/productimg/asva_10l_can.png';
import aswaMachine from '../assets/productimg/alkaline_water.jpg';

export interface Product {
    id: string;
    title: string;
    type: string;
    image: string;
    badges: string[];
    // date?: string;
    author?: string;
    price: string;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Gift Tube)',
        type: 'Bottle',
        image: aswaGlassBottle,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹299 | Offer ₹249'
    },
    {
        id: '2',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Single)',
        type: 'Bottle',
        image: aswaGlassBottle,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹199 | Offer ₹169'
    },
    {
        id: '3',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Pack of 6)',
        type: 'Bottle',
        image: aswaGlassBottle,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹1,099 | Offer ₹999'
    },
    {
        id: '4',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Pack of 12)',
        type: 'Bottle',
        image: aswaGlassBottle,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹1,999 | Offer ₹1,799'
    },
    // PET Bottles
    {
        id: '5',
        title: 'ASVA Alkaline Water – 200ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: aswaPet200mlPack,
        badges: ['200ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹499'
    },
    {
        id: '6',
        title: 'ASVA Alkaline Water – 250ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: aswaPet200mlPack, // Using small pack image for 250ml as well
        badges: ['250ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹649 | Offer ₹549'
    },
    {
        id: '7',
        title: 'ASVA Alkaline Water – 500ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: aswaPet200mlPack, // Using small pack image for 500ml as well to keep visual consistent
        badges: ['500ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹899 | Offer ₹799'
    },
    {
        id: '8',
        title: 'ASVA Alkaline Water – 1L Bottle (Pack of 12)',
        type: 'Bottle',
        image: aswaPet1lPack,
        badges: ['1L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹549'
    },
    // Jars & Cans
    {
        id: '9',
        title: 'ASVA Alkaline Water – 5L Can (Single)',
        type: 'Jar',
        image: aswa5lCan,
        badges: ['5L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹99 | Offer ₹89'
    },
    {
        id: '10',
        title: 'ASVA Alkaline Water – 10L Can (Single)',
        type: 'Jar',
        image: aswa10lCan,
        badges: ['10L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹149 | Offer ₹129'
    },
    {
        id: '11',
        title: 'ASVA Alkaline Water – 20L Refill Jar (Deposit System)',
        type: 'Jar',
        image: aswa10lCan, // Placeholder image
        badges: ['20L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹90 | Offer ₹80 (per refill)'
    },
    {
        id: '12',
        title: 'ASVA 20L Jar Deposit (Refundable Security)',
        type: 'Jar',
        image: aswa10lCan, // Placeholder image
        badges: ['20L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹300 | Offer ₹300'
    },
    // Machines
    {
        id: '13',
        title: 'ASVA Portable Alkaline Ionizer – HOME Series (Countertop)',
        type: 'Machine',
        image: aswaMachine,
        badges: ["Home"],
        author: 'ASVA Official Store',
        price: 'MRP ₹18,999 | Offer ₹16,999'
    },
    {
        id: '14',
        title: 'ASVA Portable Alkaline Ionizer – PRO Series (High Usage)',
        type: 'Machine',
        image: aswaMachine,
        badges: ['Pro'],
        author: 'ASVA Official Store',
        price: 'MRP ₹28,999 | Offer ₹25,999'
    },
    {
        id: '15',
        title: 'ASVA Portable Alkaline Ionizer – PRIME Series (Premium)',
        type: 'Machine',
        image: aswaMachine,
        badges: ['Prime'],
        author: 'ASVA Official Store',
        price: 'MRP ₹39,999 | Offer ₹34,999'
    },
    // Filter Replacement Sets
    {
        id: '16',
        title: 'ASVA Filter Set – HOME Series (Replacement Pack)',
        type: 'Filter',
        image: aswaMachine, // Placeholder: Machine image used for filters
        badges: ["Home"],
        author: 'ASVA Official Store',
        price: 'MRP ₹2,499 | Offer ₹2,199'
    },
    {
        id: '17',
        title: 'ASVA Filter Set – PRO Series (Replacement Pack)',
        type: 'Filter',
        image: aswaMachine, // Placeholder
        badges: ["Pro"],
        author: 'ASVA Official Store',
        price: 'MRP ₹3,499 | Offer ₹3,199'
    },
    {
        id: '18',
        title: 'ASVA Filter Set – PRIME Series (Replacement Pack)',
        type: 'Filter',
        image: aswaMachine, // Placeholder
        badges: ["Prime"],
        author: 'ASVA Official Store',
        price: 'MRP ₹4,499 | Offer ₹3,999'
    },
    // Accessories
    {
        id: '19',
        title: 'ASVA 20L Jar Stand (Steel)',
        type: 'Accessory',
        image: aswa10lCan, // Placeholder: Jar image used for accessories
        badges: ["Stand"],
        author: 'ASVA Official Store',
        price: 'MRP ₹999 | Offer ₹899'
    },
    {
        id: '20',
        title: 'ASVA Manual Pump for 20L Jar',
        type: 'Accessory',
        image: aswa10lCan, // Placeholder
        badges: ["Pump"],
        author: 'ASVA Official Store',
        price: 'MRP ₹399 | Offer ₹299'
    },
    {
        id: '21',
        title: 'ASVA Dispenser Tap for 20L Jar',
        type: 'Accessory',
        image: aswa10lCan, // Placeholder
        badges: ["Tap"],
        author: 'ASVA Official Store',
        price: 'MRP ₹249 | Offer ₹199'
    },
    // Corporate / Event Products
    {
        id: '22',
        title: 'ASVA Event Pack – 200ml Bottles (Pack of 24)',
        type: 'Corporate',
        image: aswaPet200mlPack,
        badges: ['200ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹499'
    },
    {
        id: '23',
        title: 'ASVA Corporate Pantry Pack – 1L Bottles (Pack of 12)',
        type: 'Corporate',
        image: aswaPet1lPack,
        badges: ['1L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹549'
    }
];

