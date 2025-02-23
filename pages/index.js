// Navbar, TourCard ve Footer bileşenlerini içe aktarır
import Navbar from '../components/Navbar';
import TourCard from '../components/TourCard';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

// Turların verilerini içeren dizi
const tours = [
    {
        id: 1,
        title: "Island Paradise Tour",
        location: "Maldives",
        price: 299,
        rating: 4.8,
        duration: "8 hours",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 2,
        title: "Historical City Walk",
        location: "Rome",
        price: 149,
        rating: 4.9,
        duration: "4 hours",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 3,
        title: "Mountain Hiking Adventure",
        location: "Swiss Alps",
        price: 199,
        rating: 4.7,
        duration: "6 hours",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 4,
        title: "Local Food Tour",
        location: "Bangkok",
        price: 89,
        rating: 3.7,
        duration: "3 hours",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 5,
        title: "Desert Safari Adventure",
        location: "Dubai",
        price: 179,
        rating: 4.8,
        duration: "5 hours",
        image: "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 6,
        title: "Northern Lights Tour",
        location: "Iceland",
        price: 249,
        rating: 4.9,
        duration: "4 hours",
        image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 7,
        title: "Scuba Diving Experience",
        location: "Great Barrier Reef",
        price: 159,
        rating: 4.7,
        duration: "6 hours",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        id: 8,
        title: "Amazon River Cruise",
        location: "Brazil",
        price: 329,
        rating: 4.8,
        duration: "12 hours",
        image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    }
];
        //Home bileşenini tanımlar
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
// useEffect ile bileşen yüklendiğinde yüklenme durumunu günceller
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
// Kategorilere kaydırma işlevi
    const scrollToCategories = () => {
        const categoriesSection = document.getElementById('categories');
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTours = () => {
        const toursSection = document.getElementById('tours');
        toursSection.scrollIntoView({ behavior: 'smooth' });
    };
// Yüklenme durumu devam ediyorsa yüklenme animasyonu döndürür
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
            </div>
        );
    }
// Bileşen yüklenmişse ana içeriği döndürür
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="bg-white shadow-lg rounded-lg p-8 mb-12 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-10"
                         style={{
                             backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80")'
                         }}
                    />
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4 max-w-2xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                            Find Your Perfect Travel Experience
                        </h1>
                        <p className="text-gray-600 mb-8 text-xl max-w-3xl leading-relaxed">
                            Discover unforgettable tours, exclusive tickets, comfortable rentals and reliable transfers in your dream destination
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={scrollToTours}
                                className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Explore Tours
                            </button>
                            <button
                                onClick={scrollToCategories}
                                className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors hover:border-primary-500"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Categories */}
                <div id="categories" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-8">
                    {/* Tours Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">Tours</h3>
                            <span className="text-primary-500 bg-primary-50 px-3 py-1 rounded-full text-sm font-medium">
                43 activities
              </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Explore local experiences and guided tours
                        </p>
                        <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                            <span className="text-sm font-medium">Explore tours</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Tickets Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">Tickets</h3>
                            <span className="text-primary-500 bg-primary-50 px-3 py-1 rounded-full text-sm font-medium">
                25 options
              </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Book tickets for attractions and events
                        </p>
                        <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                            <span className="text-sm font-medium">View tickets</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Rent Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">Rent</h3>
                            <span className="text-primary-500 bg-primary-50 px-3 py-1 rounded-full text-sm font-medium">
                56 vehicles
              </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Rent vehicles for your journey
                        </p>
                        <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                            <span className="text-sm font-medium">Browse rentals</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Transfer Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">Transfer</h3>
                            <span className="text-primary-500 bg-primary-50 px-3 py-1 rounded-full text-sm font-medium">
                67 services
              </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Book reliable transfer services
                        </p>
                        <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                            <span className="text-sm font-medium">Find transfers</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Popular Tours */}
                <div id="tours" className="mt-12 scroll-mt-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Popular Tours
                            <div className="h-1 w-20 bg-primary-500 mt-2 rounded-full"></div>
                        </h2>
                        <button className="text-primary-500 hover:text-primary-600 transition-colors flex items-center gap-1 group">
                            View all tours
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tours.map(tour => (
                            <TourCard key={tour.id} {...tour} />
                        ))}
                    </div>
                    {tours.length > 8 && (
                        <div className="text-center mt-8">
                            <button className="px-8 py-3 bg-white border border-primary-500 text-primary-500 rounded-full font-medium hover:bg-primary-50 transition-colors">
                                Load More Tours
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}