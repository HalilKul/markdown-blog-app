const TourCard = ({ title, location, price, rating, image, duration }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            {/* Resim alanı */}
            <div className="relative h-48 rounded-t-xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Süre bilgisi */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                    {duration}
                </div>
            </div>

            {/* İçerik alanı */}
            <div className="p-4">
                {/* Lokasyon bilgisi */}
                <div className="flex items-center gap-1 mb-2">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">{location}</span>
                </div>

                {/* Başlık */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
                    {title}
                </h3>

                {/* Derece ve fiyat bilgisi */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {/* Derece simgesi */}
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{rating}</span>
                    </div>
                    {/* Fiyat bilgisi */}
                    <div className="text-primary-500 font-semibold">
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
