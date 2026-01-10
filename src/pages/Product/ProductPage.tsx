import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { ProductGallery } from '../../components/Product/ProductGallery';
import { ProductInfo } from '../../components/Product/ProductInfo';
import { ProductDescription } from '../../components/Product/ProductDescription';
import { PRODUCTS } from '../../data/shopData';

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Default to first product if not found or no ID
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column: Gallery */}
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <div className="lg:sticky lg:top-32">
                            <ProductGallery image={product.image} />
                        </div>
                    </div>
                    {/* Right Column: Info & Description */}
                    <div className="w-full lg:w-1/2">
                        <ProductInfo title={product.title} price={product.price || "₹99.95"} />
                        <ProductDescription />
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};