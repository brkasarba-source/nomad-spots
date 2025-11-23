"use client";

import { MapPin, Search, Filter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Explore() {
    const [searchQuery, setSearchQuery] = useState("");

    const cities = [
        { name: "Bali, Indonesia", slug: "bali", spots: 234, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" },
        { name: "Lisbon, Portugal", slug: "lisbon", spots: 189, image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop" },
        { name: "Chiang Mai, Thailand", slug: "chiangmai", spots: 156, image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop" },
        { name: "Mexico City, Mexico", slug: "mexico", spots: 142, image: "https://images.unsplash.com/photo-1518659526054-e6c2e8f4e4c7?q=80&w=800&auto=format&fit=crop" },
        { name: "Barcelona, Spain", slug: "barcelona", spots: 201, image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop" },
        { name: "Cape Town, South Africa", slug: "capetown", spots: 98, image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800&auto=format&fit=crop" },
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Explore Cities</h1>

                    <div className="relative group mb-4">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search cities, countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-100/80 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 focus:bg-white transition-all shadow-sm"
                        />
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>
            </header>

            <div className="px-5 pt-6">
                <div className="grid grid-cols-2 gap-4">
                    {cities.map((city, index) => (
                        <Link
                            key={index}
                            href={`/city/${city.slug}`}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 active:scale-[0.98] cursor-pointer block"
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-bold text-base mb-1 leading-tight">{city.name}</h3>
                                    <div className="flex items-center text-white/90 text-xs">
                                        <MapPin size={12} className="mr-1" />
                                        {city.spots} spots
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="px-5 mt-8 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white text-center">
                    <h3 className="font-bold text-lg mb-2">🗺️ Map View</h3>
                    <p className="text-sm text-white/90 mb-4">See all spots on an interactive map</p>
                    <button className="bg-white text-blue-600 px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Coming Soon
                    </button>
                </div>
            </div>
        </main>
    );
}
