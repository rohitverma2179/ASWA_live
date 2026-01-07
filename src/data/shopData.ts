
import aswaImg from '../assets/bottle png_.png';
export interface Product {
    id: string;
    title: string;
    type: string;
    image: string;
    badges: string[];
    date?: string;
    author?: string;
    price?: string;
}


export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'Asva 750ml Glass Bottle',
        type: 'Bottle',
        image: aswaImg,
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    },
    {
        id: '2',
        title: 'Asva 1L Glass Bottle',
        type: 'Bottle',
        image: aswaImg,
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    },
    {
        id: '3',
        title: 'Asva Sparking Water',
        type: 'Bottle',
        image: aswaImg,
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    },
    {
        id: '4',
        title: 'Asva Mineral Water',
        type: 'Bottle',
        image: aswaImg,
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    },
    {
        id: '5',
        title: 'Asva Premium Water',
        type: 'Machine',
        image: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/social/asva5.jpg",
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    },
    {
        id: '6',
        title: 'Asva Natural Water',
        type: 'Machine',
        image: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/social/asva6.jpg",
        badges: ['1L'],
        date: 'Oct 15, 2023',
        author: 'Admin',
        price: '₹ 99.95'
    }
];
