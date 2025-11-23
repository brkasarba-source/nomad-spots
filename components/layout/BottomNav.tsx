import { Home, Compass, PlusCircle, User, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 glass pb-safe-area-inset-bottom z-50">
            <div className="relative flex justify-around items-center h-20 px-2">
                <Link href="/" className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-black transition-colors flex-1">
                    <Home size={24} />
                    <span className="text-[10px] font-medium mt-1">Home</span>
                </Link>

                <Link href="/explore" className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-black transition-colors flex-1">
                    <Compass size={24} />
                    <span className="text-[10px] font-medium mt-1">Explore</span>
                </Link>

                {/* Centered Floating Action Button */}
                <div className="flex-1 flex justify-center">
                    <Link href="/add" className="relative -top-6">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-xl shadow-black/30 active:scale-95 transition-transform">
                            <PlusCircle size={32} strokeWidth={2.5} />
                        </div>
                    </Link>
                </div>

                <Link href="/messages" className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-black transition-colors flex-1 relative">
                    <MessageCircle size={24} />
                    <span className="text-[10px] font-medium mt-1">Messages</span>
                    {/* Unread count badge */}
                    <span className="absolute top-0 right-2 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">3</span>
                </Link>

                <Link href="/profile" className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-black transition-colors flex-1">
                    <User size={24} />
                    <span className="text-[10px] font-medium mt-1">Profile</span>
                </Link>
            </div>
        </nav>
    );
}
