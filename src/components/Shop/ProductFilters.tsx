// import React from 'react';

// interface ProductFiltersProps {
//     activeFilter: string;
//     onFilterChange: (filter: string) => void;
// }

// export const ProductFilters: React.FC<ProductFiltersProps> = ({ activeFilter, onFilterChange }) => {
//     const filters = ['All Products', 'Asva', 'Machine'];

//     return (
//         <div className="flex justify-start md:justify-center gap-4 py-8 overflow-x-auto px-6 scrollbar-hide">
//             {filters.map((filter) => (
//                 <button
//                     key={filter}
//                     onClick={() => onFilterChange(filter)}
//                     className={`px-[1.9rem]  py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap
//             ${activeFilter === filter
//                             ? 'border-gray-800 text-black bg-white'
//                             : 'border-gray-200 text-gray-500 hover:border-gray-400 bg-white'
//                         }`}
//                 >
//                     {filter}
//                 </button>
//             ))}
//         </div>
//     );
// };


import React from "react";

interface ProductFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters = ["All Products", "Asva", "Machine"];

  return (
    <div
      className="
        flex items-center gap-3
        px-4 py-4
        overflow-x-auto
        scrollbar-hide

        sm:justify-center
        sm:px-6
        sm:py-6

        md:gap-4
        md:py-8
      "
    >
      {filters.map((filter) => {
        console.log(activeFilter);

        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`
            whitespace-nowrap
            rounded-full border
            transition-all duration-200
            px-4 py-2 text-xs
            sm:px-6 sm:py-2.5 sm:text-sm
            md:px-8 md:text-sm

            ${activeFilter === filter
                ? "border-gray-800 text-black bg-white"
                : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
              }
          `}
          >
            {filter}
          </button>
        )
      })}
    </div>
  );
};
