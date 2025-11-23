"use client";

import { useState, useEffect } from "react";
import SpotCard from "@/components/feed/SpotCard";
import SpotCardSkeleton from "@/components/feed/SpotCardSkeleton";
import { Search, Bell } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [spots, setSpots] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSpots([
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
          id: 2,
          title: "The Green Cowork",
          category: "Coworking",
          rating: 4.9,
          location: "Lisbon, Portugal",
          imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop",
          author: "Mike T.",
        },
        {
          id: 3,
          title: "Sunset Point",
          category: "Chill",
          rating: 4.7,
          location: "Cape Town, SA",
          imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
          author: "Elena R.",
        },
        {
          id: 4,
          title: "Healthy Bowl Cafe",
          category: "Food",
          rating: 4.6,
          location: "Ubud, Bali",
          imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
          author: "Alex K.",
        },
        {
          id: 5,
          title: "Fitness Hub",
          category: "Gym",
          rating: 4.9,
          location: "Bangkok, Thailand",
          imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
          author: "Tom R.",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredSpots = selectedCategory === "All"
    ? spots
    : spots.filter(spot => {
      const category = spot.category.toLowerCase();
      const selected = selectedCategory.toLowerCase();
      // Match "Cafes" with "Cafe & Work", "Coworking" with "Coworking", etc.
      if (selected === "cafes") return category.includes("cafe");
      if (selected === "coworking") return category.includes("cowork");
      if (selected === "food") return category.includes("food") || category.includes("restaurant");
      if (selected === "events") return category.includes("event");
      if (selected === "gyms") return category.includes("gym");
      return category.includes(selected);
    });

  return (
    <main className="min-h-screen bg-gray-50/50 pb-28">
      {/* Premium Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
        <div className="px-5 pt-14 pb-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Good Morning,</p>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Wander</h1>
            </div>
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>

          {/* Modern Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
            </div>
            <input
              type="text"
              placeholder="Find your next workspace..."
              className="w-full bg-gray-100/80 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-5 pb-4 flex gap-3 overflow-x-auto no-scrollbar">
          {["All", "Cafes", "Coworking", "Food", "Events", "Gyms"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform active:scale-95 ${selectedCategory === cat
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Feed */}
      <div className="px-5 pt-6 space-y-6">
        <div className="flex justify-between items-end px-1">
          <h2 className="font-bold text-xl text-gray-900">Trending Now</h2>
          <button className="text-sm font-medium text-gray-500 hover:text-black">See All</button>
        </div>

        {loading ? (
          <>
            <SpotCardSkeleton />
            <SpotCardSkeleton />
            <SpotCardSkeleton />
          </>
        ) : filteredSpots.length > 0 ? (
          filteredSpots.map((spot) => (
            <SpotCard key={spot.id} {...spot} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No spots found in this category</p>
          </div>
        )}
      </div>
    </main>
  );
}
