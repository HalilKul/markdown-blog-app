import { useState } from 'react';

export default function FilterModal({ isOpen, onClose }) {
    // Filtre modalı için kullanılan state değişkenleri
    const [selectedCategory, setSelectedCategory] = useState('Tours');
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState([0, 1000]);
    const [startTime, setStartTime] = useState([9, 17]);
    const [groupSize, setGroupSize] = useState([1, 40]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);


    // Tema seçimini yönetiyor

    const handleThemeSelect = (theme) => {
        if (selectedThemes.includes(theme)) {
            setSelectedThemes(selectedThemes.filter(t => t !== theme));
        } else {
            setSelectedThemes([...selectedThemes, theme]);
        }
    };
    // Aktivite seçimi
    const handleActivitySelect = (activity) => {
        if (selectedActivities.includes(activity)) {
            setSelectedActivities(selectedActivities.filter(a => a !== activity));
        } else {
            setSelectedActivities([...selectedActivities, activity]);
        }
    };
        // Araç seçimini yönetir
    const handleVehicleSelect = (vehicle) => {
        if (selectedVehicles.includes(vehicle)) {
            setSelectedVehicles(selectedVehicles.filter(v => v !== vehicle));
        } else {
            setSelectedVehicles([...selectedVehicles, vehicle]);
        }
    };
    // Özellik seçimini yönetir
    const handleFeatureSelect = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };
// Filtreleri varsayılan değerlere sıfırlar
    const handleReset = () => {
        setSelectedCategory('Tours');
        setSelectedThemes([]);
        setSelectedActivities([]);
        setLocation('');
        setPrice([0, 1000]);
        setStartTime([9, 17]);
        setGroupSize([1, 40]);
        setSelectedVehicles([]);
        setSelectedFeatures([]);
    };
    // Modal kapalıysa null döndürerek içeriği render etmez
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Filter</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 mb-6">
                        {['Tours', 'Tickets', 'Rent', 'Transfer'].map(category => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full ${
                                    selectedCategory === category
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <input
                            type="text"
                            placeholder="Where do you want to visit?"
                            className="w-full p-3 border rounded-lg"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Theme */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Theme</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'Island Tour', count: 43 },
                                { name: 'Land tour', count: 43 },
                                { name: 'Safari', count: 43 }
                            ].map(theme => (
                                <button
                                    key={theme.name}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedThemes.includes(theme.name)
                                            ? 'bg-primary-500 text-white border-primary-500'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary-500'
                                    }`}
                                    onClick={() => handleThemeSelect(theme.name)}
                                >
                                    {theme.name} ({theme.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Activity</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'Swimming', count: 43 },
                                { name: 'Running', count: 43 },
                                { name: 'Elephant care', count: 43 },
                                { name: 'Snorkelling', count: 43 }
                            ].map(activity => (
                                <button
                                    key={activity.name}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedActivities.includes(activity.name)
                                            ? 'bg-primary-500 text-white border-primary-500'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary-500'
                                    }`}
                                    onClick={() => handleActivitySelect(activity.name)}
                                >
                                    {activity.name} ({activity.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Price</h3>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={price[1]}
                            onChange={(e) => setPrice([0, parseInt(e.target.value)])}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>${price[0]}</span>
                            <span>${price[1]}</span>
                        </div>
                    </div>

                    {/* Start Time */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Start time</h3>
                        <input
                            type="range"
                            min="0"
                            max="24"
                            value={startTime[1]}
                            onChange={(e) => setStartTime([9, parseInt(e.target.value)])}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>{startTime[0]}:00</span>
                            <span>{startTime[1]}:00</span>
                        </div>
                    </div>

                    {/* Group Size */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Group size</h3>
                        <input
                            type="range"
                            min="1"
                            max="40"
                            value={groupSize[1]}
                            onChange={(e) => setGroupSize([1, parseInt(e.target.value)])}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>{groupSize[0]} person</span>
                            <span>{groupSize[1]} persons</span>
                        </div>
                    </div>

                    {/* Vehicle */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Vehicle</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'Yacht', count: 43 },
                                { name: 'Speedboat', count: 43 },
                                { name: 'Safari', count: 43 },
                                { name: 'Catamaran', count: 43 },
                                { name: 'Speedcatamaran', count: 43 }
                            ].map(vehicle => (
                                <button
                                    key={vehicle.name}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedVehicles.includes(vehicle.name)
                                            ? 'bg-primary-500 text-white border-primary-500'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary-500'
                                    }`}
                                    onClick={() => handleVehicleSelect(vehicle.name)}
                                >
                                    {vehicle.name} ({vehicle.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Features</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'Transfer', count: 43 },
                                { name: 'Halal Food', count: 43 },
                                { name: 'Vegetarian food', count: 43 }
                            ].map(feature => (
                                <button
                                    key={feature.name}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedFeatures.includes(feature.name)
                                            ? 'bg-primary-500 text-white border-primary-500'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary-500'
                                    }`}
                                    onClick={() => handleFeatureSelect(feature.name)}
                                >
                                    {feature.name} ({feature.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={handleReset}
                            className="flex-1 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => {
                                // Handle search logic here
                                console.log('Search with filters:', {
                                    category: selectedCategory,
                                    themes: selectedThemes,
                                    activities: selectedActivities,
                                    location,
                                    price,
                                    startTime,
                                    groupSize,
                                    vehicles: selectedVehicles,
                                    features: selectedFeatures
                                });
                            }}
                            className="flex-1 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}