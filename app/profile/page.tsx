"use client";

import { Settings, MapPin, Heart, Award, LogOut } from "lucide-react";

export default function Profile() {
    const user = {
        name: "Sarah Johnson",
        username: "@sarahj",
        bio: "Digital nomad • Coffee lover • Always exploring",
        location: "Currently in Bali, Indonesia",
        stats: {
            spots: 24,
            saved: 89,
            followers: 342,
        },
    };

    const mySpots = [
        {
            id: 1,
            name: "Nomad Coffee Club",
            location: "Canggu, Bali",
            image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Sunset Beach Bar",
            location: "Seminyak, Bali",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Green Bowl Cafe",
            location: "Ubud, Bali",
            image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=400&auto=format&fit=crop",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Profile</h1>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Settings size={24} className="text-gray-600" />
                    </button>
                </div>
            </header>

            {/* Profile Info */}
            <div className="px-5 pt-6">
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] mb-6">
                    {/* Avatar & Name */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 p-1">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                <span className="text-2xl font-bold text-gray-700">SJ</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500 mb-2">{user.username}</p>
                            <button className="bg-black text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-700 mb-3">{user.bio}</p>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-1" />
                        {user.location}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{user.stats.spots}</p>
                            <p className="text-xs text-gray-500 font-medium">Spots Added</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{user.stats.saved}</p>
                            <p className="text-xs text-gray-500 font-medium">Saved</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{user.stats.followers}</p>
                            <p className="text-xs text-gray-500 font-medium">Followers</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                    <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold text-sm">
                        My Spots
                    </button>
                    <button className="flex-1 bg-white text-gray-600 py-3 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 transition-colors">
                        Saved
                    </button>
                </div>

                {/* My Spots Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {mySpots.map((spot) => (
                        <div
                            key={spot.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={spot.image}
                                    alt={spot.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-bold text-sm mb-1 leading-tight">{spot.name}</h3>
                                    <p className="text-xs text-white/90">{spot.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="space-y-3 mb-6">
                    <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                                <Heart size={20} className="text-red-500" />
                            </div>
                            <span className="font-semibold text-gray-900">Saved Spots</span>
                        </div>
                        <span className="text-sm font-bold text-gray-400">{user.stats.saved}</span>
                    </button>

                    <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                                <Award size={20} className="text-yellow-500" />
                            </div>
                            <span className="font-semibold text-gray-900">Achievements</span>
                        </div>
                        <span className="text-sm font-bold text-gray-400">12</span>
                    </button>

                    <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                <LogOut size={20} className="text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-900">Log Out</span>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    );
}
