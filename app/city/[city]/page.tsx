"use client";

import { ArrowLeft, MapPin, Search } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import SpotCard from "@/components/feed/SpotCard";

export default function CityDetail() {
    const router = useRouter();
    const params = useParams();

    const cityData: any = {
        "bali": {
            name: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
            description: "Paradise for digital nomads with amazing coworking spaces, cafes, and beaches.",
            spots: [
                {
                    id: 1,
                    title: "Nomad Coffee Club",
                    category: "Cafe & Work",
                    rating: 4.8,
                    location: "Canggu, Bali",
                    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
                    author: "Sarah J.",
                },
                {
                    id: 4,
                    title: "Beachside Cowork",
                    category: "Coworking",
                    rating: 4.9,
                    location: "Seminyak, Bali",
                    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
                    author: "Mike T.",
                },
            ],
        },
        "lisbon": {
            name: "Lisbon, Portugal",
            image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200&auto=format&fit=crop",
            description: "Vibrant European hub with great weather, food, and nomad community.",
            spots: [
                {
                    id: 2,
                    title: "The Green Cowork",
                    category: "Coworking",
                    rating: 4.9,
                    location: "Lisbon, Portugal",
                    imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop",
                    author: "Mike T.",
                },
            ],
        },
    };

    const cityKey = params.city as string;
    const city = cityData[cityKey] || cityData["bali"];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            {/* Hero */}
            <div className="relative h-64 w-full">
                <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <button
                    onClick={() => router.back()}
                    className="absolute top-14 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h1 className="text-4xl font-bold mb-2">{city.name}</h1>
                    <p className="text-white/90 text-sm">{city.description}</p>
                </div>
            </div>

            {/* Search */}
            <div className="px-5 py-6">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="text-gray-400" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search spots in this city..."
                        className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Spots */}
            <div className="px-5 space-y-6">
                <div className="flex justify-between items-end">
                    <h2 className="font-bold text-xl text-gray-900">Popular Spots</h2>
                    <span className="text-sm text-gray-500">{city.spots.length} spots</span>
                </div>

                {city.spots.map((spot: any) => (
                    <SpotCard key={spot.id} {...spot} />
                ))}
            </div>
        </main>
    );
}
