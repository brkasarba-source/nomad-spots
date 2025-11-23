import { MapPin, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SpotCardProps {
    id?: number;
    title: string;
    category: string;
    rating: number;
    location: string;
    imageUrl: string;
    author: string;
}

export default function SpotCard({ id = 1, title, category, rating, location, imageUrl, author }: SpotCardProps) {
    return (
        <Link href={`/spot/${id}`} className="block">
            <div className="group relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mb-6 transition-transform active:scale-[0.98] duration-200 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
                <div className="relative h-64 w-full">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-medium text-white shadow-sm">
                            {category}
                        </span>
                    </div>

                    <div className="absolute top-4 right-4">
                        <button className="p-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                            <Heart size={18} />
                        </button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <div className="flex justify-between items-end mb-1">
                            <h3 className="font-bold text-2xl tracking-tight leading-tight">{title}</h3>
                            <div className="flex items-center gap-1 bg-yellow-400/90 text-black px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                                <Star size={12} className="fill-black" />
                                <span>{rating}</span>
                            </div>
                        </div>

                        <div className="flex items-center text-white/90 text-sm font-medium">
                            <MapPin size={16} className="mr-1.5 text-white/80" />
                            {location}
                        </div>
                    </div>
                </div>

                <div className="px-5 py-3 flex items-center justify-between bg-white border-t border-gray-50">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-brand p-[2px]">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <span className="text-[10px] font-bold text-gray-600">{author.charAt(0)}</span>
                            </div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">Recommended by <span className="text-gray-900">{author}</span></span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
