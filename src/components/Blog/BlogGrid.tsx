import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import { Pagination } from './Pagination';

export const BlogGrid: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Calculate posts for current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="container mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {currentPosts.map((post) => (
                    <article
                        key={post.id}
                        className="flex flex-col group cursor-pointer"
                        onClick={() => navigate(`/blog/${post.id}`)}
                    >
                        {/* Image Container - Aspect Ratio Landscape */}
                        <div className="w-full aspect-video overflow-hidden mb-6 rounded-lg">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2 px-2">
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-widest">
                                <span>{post.author}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-gray-900 leading-snug group-hover:text-blue-900 transition-colors">
                                {post.title}
                            </h3>
                            <span className="text-sm font-bold underline decoration-1 underline-offset-4 text-gray-900 mt-2">
                                Read More
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={blogPosts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </section>
    );
};