"use client";

import { ArrowLeft, MapPin, Star, Heart, Share2, Phone, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SpotDetail() {
    const router = useRouter();

    const spot = {
        title: "Nomad Coffee Club",
        category: "Cafe & Work",
        rating: 4.8,
        reviews: 124,
        location: "Canggu, Bali, Indonesia",
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
        author: "Sarah J.",
        description: "Perfect spot for digital nomads! Fast WiFi (100mbps), plenty of power outlets, and amazing coffee. The atmosphere is super chill and you'll meet lots of other nomads here.",
        hours: "7:00 AM - 10:00 PM",
        phone: "+62 812 3456 7890",
        website: "nomadcoffee.com",
        amenities: ["Fast WiFi", "Power Outlets", "Air Conditioning", "Quiet", "Great Coffee"],
    };

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            {/* Hero Image */}
            <div className="relative h-80 w-full">
                <Image
                    src={spot.imageUrl}
                    alt={spot.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-14 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Action Buttons */}
                <div className="absolute top-14 right-4 flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                        <Heart size={24} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                        <Share2 size={24} />
                    </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-2 inline-block">
                        {spot.category}
                    </span>
                    <h1 className="text-3xl font-bold mb-2">{spot.title}</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Star size={16} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-bold">{spot.rating}</span>
                            <span className="text-white/80 text-sm">({spot.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-5 py-6 space-y-6">
                {/* Location */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-gray-600 mt-1" />
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                            <p className="text-gray-600 text-sm">{spot.location}</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <h3 className="font-bold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{spot.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500">Recommended by <span className="font-semibold text-gray-900">{spot.author}</span></p>
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <h3 className="font-bold text-gray-900 mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {spot.amenities.map((amenity) => (
                            <span key={amenity} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                {amenity}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] space-y-4">
                    <h3 className="font-bold text-gray-900 mb-3">Contact</h3>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Phone size={18} className="text-gray-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Phone</p>
                            <p className="text-sm font-medium text-gray-900">{spot.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Globe size={18} className="text-gray-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Website</p>
                            <p className="text-sm font-medium text-gray-900">{spot.website}</p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => {
                        const query = encodeURIComponent(spot.location);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
                    }}
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-black/20 hover:bg-gray-800 transition-all active:scale-[0.98]"
                >
                    Get Directions
                </button>
            </div>
        </main>
    );
}
