import React, { useState } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { ShopBanner } from '../../components/Shop/ShopBanner';
import { ProductFilters } from '../../components/Shop/ProductFilters';
import { ProductCard } from '../../components/Shop/ProductCard';
import { InfoSection } from '../../components/Shop/InfoSection';
import { FAQSection } from '../../components/Shop/FAQSection';
import { FeaturedBanner } from '../../components/HomeSection/FeaturedBanner';
import { PRODUCTS } from '../../data/shopData';

export const ShopPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Products');

    const filteredProducts = PRODUCTS.filter((product) => {
        if (activeFilter === 'All Products') return true;
        if (activeFilter === 'Asva') return product.type === 'Bottle';
        return product.type === activeFilter;
    });

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main>
                <ShopBanner />
                <ProductFilters
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <div className="container mx-auto px-6 md:px-12 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <InfoSection />
                <FAQSection />
                <FeaturedBanner />
            </main>

            <Footer />
        </div>
    );
};
