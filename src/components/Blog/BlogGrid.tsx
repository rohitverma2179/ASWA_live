import React from 'react';
import blog_1 from '../../assets/HomeImg/blog_1.png'
import blog_2 from '../../assets/HomeImg/blog_2.png'
import blog_3 from '../../assets/HomeImg/blog_3.png'
import blog_4 from '../../assets/HomeImg/blog_4.png'
import blog_5 from '../../assets/HomeImg/blog_5.png'
import blog_6 from '../../assets/HomeImg/blog_6.png'

const BLOG_POSTS = [
    { id: 1, title: 'The Best Bottled Water Brands of 2023', image: blog_1 },
    { id: 2, title: 'The Best Bottled Water Brands of 2023', image: blog_2 },
    { id: 3, title: 'The Best Bottled Water Brands of 2023', image: blog_3 },
    { id: 4, title: 'The Best Bottled Water Brands of 2023', image: blog_4 },
    { id: 5, title: 'The Best Bottled Water Brands of 2023', image: blog_5 },
    { id: 6, title: 'The Best Bottled Water Brands of 2023', image: blog_6 },
    { id: 7, title: 'The Best Bottled Water Brands of 2023', image: '/assets/hero-bottles.png' },
    { id: 8, title: 'The Best Bottled Water Brands of 2023', image: '/assets/hero-bottles.png' },
    { id: 9, title: 'The Best Bottled Water Brands of 2023', image: '/assets/hero-bottles.png' },
];

export const BlogGrid: React.FC = () => {
    return (
        <section className="container mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {BLOG_POSTS.map((post) => (
                    <div key={post.id} className="flex flex-col group cursor-pointer">
                        {/* Image Container - Aspect Ratio Landscape */}
                        <div className="w-full aspect-video overflow-hidden mb-6">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-serif text-center text-gray-800 leading-snug group-hover:text-blue-900 transition-colors px-4">
                            {post.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};