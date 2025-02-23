import { useState } from 'react';
import FilterModal from './FilterModal';

const Navbar = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        // Ana navigasyon barı - sabit pozisyonda ve üstte kalır
        <nav className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo bölümü - mobilde küçük, masaüstünde büyük yazı */}
                    <div className="flex items-center">
                        <h1 className="text-lg md:text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors">
                            Traveler's local market
                        </h1>
                    </div>

                    {/* Filtre butonu - mobilde küçük, masaüstünde büyük ikon */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Open filters"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6 text-gray-600 hover:text-primary-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filtre Modal Bileşeni */}
            <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
            />
        </nav>
    );
};

export default Navbar;