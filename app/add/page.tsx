"use client";

import { Camera, MapPin, Star, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ToastProvider";
import { useRouter } from "next/navigation";

export default function AddSpot() {
    const { showToast } = useToast();
    const router = useRouter();
    const [spotName, setSpotName] = useState("");
    const [category, setCategory] = useState("Cafe & Work");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState(5);
    const [description, setDescription] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const categories = ["Cafe & Work", "Coworking", "Restaurant", "Bar", "Gym", "Shopping", "Event Space"];

    const amenities = [
        { id: "wifi", label: "WiFi", icon: "📶" },
        { id: "power", label: "Power Outlets", icon: "🔌" },
        { id: "coffee", label: "Coffee", icon: "☕" },
        { id: "food", label: "Food", icon: "🍽️" },
        { id: "quiet", label: "Quiet", icon: "🤫" },
        { id: "ac", label: "AC", icon: "❄️" },
        { id: "parking", label: "Parking", icon: "🅿️" },
        { id: "outdoor", label: "Outdoor", icon: "🌳" },
    ];

    const toggleAmenity = (id: string) => {
        setSelectedAmenities(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        showToast("Spot added successfully! 🎉", "success");

        setSpotName("");
        setLocation("");
        setDescription("");

        setTimeout(() => {
            router.push("/");
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Add New Spot</h1>
                    <button onClick={() => router.push("/")} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="px-5 pt-6 space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Photo</label>
                    <div className="relative h-48 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
                        <Camera size={40} className="text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 font-medium">Tap to upload photo</p>
                        <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Spot Name</label>
                    <input
                        type="text"
                        value={spotName}
                        onChange={(e) => setSpotName(e.target.value)}
                        placeholder="e.g., Nomad Coffee Club"
                        className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-black/5 transition-all"
                        required
                    />
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${category === cat ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g., Canggu, Bali"
                            className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Amenities</label>
                    <div className="grid grid-cols-2 gap-3">
                        {amenities.map((amenity) => (
                            <button
                                key={amenity.id}
                                type="button"
                                onClick={() => toggleAmenity(amenity.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${selectedAmenities.includes(amenity.id)
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <span>{amenity.icon}</span>
                                <span>{amenity.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Your Rating</label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="transition-transform hover:scale-110"
                            >
                                <Star size={32} className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                            </button>
                        ))}
                        <span className="ml-2 text-lg font-bold text-gray-900">{rating}.0</span>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Description (Optional)</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Share your experience..."
                        rows={4}
                        className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-black/5 transition-all resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-black/20 hover:bg-gray-800 transition-all active:scale-[0.98]"
                >
                    Add Spot
                </button>
            </form>
        </main>
    );
}
