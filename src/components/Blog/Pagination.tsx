import React from 'react';

export const Pagination: React.FC = () => {
    return (
        <div className="flex justify-center gap-4 py-12 md:py-20">
            <div className="w-3 h-3 rounded-full bg-black cursor-pointer hover:bg-gray-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-black cursor-pointer hover:bg-gray-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-black cursor-pointer hover:bg-gray-600 transition-colors"></div>
        </div>
    );
};
