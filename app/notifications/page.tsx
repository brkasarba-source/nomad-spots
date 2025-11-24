"use client";

import { ArrowLeft, Heart, MessageCircle, UserPlus, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Notifications() {
    const router = useRouter();

    const notifications = [
        {
            id: 1,
            type: "like",
            user: "Sarah Kim",
            avatar: "SK",
            action: "liked your spot",
            spot: "Nomad Coffee Club",
            time: "2m ago",
            read: false,
        },
        {
            id: 2,
            type: "comment",
            user: "Mike Thompson",
            avatar: "MT",
            action: "commented on",
            spot: "Sunset Beach Bar",
            time: "1h ago",
            read: false,
        },
        {
            id: 3,
            type: "follow",
            user: "Elena Rodriguez",
            avatar: "ER",
            action: "started following you",
            time: "3h ago",
            read: true,
        },
        {
            id: 4,
            type: "spot",
            user: "Alex Chen",
            avatar: "AC",
            action: "added a new spot in",
            spot: "Bali, Indonesia",
            time: "Yesterday",
            read: true,
        },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case "like":
                return <Heart size={20} className="text-red-500" />;
            case "comment":
                return <MessageCircle size={20} className="text-blue-500" />;
            case "follow":
                return <UserPlus size={20} className="text-green-500" />;
            case "spot":
                return <MapPin size={20} className="text-purple-500" />;
            default:
                return null;
        }
    };

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4 flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft size={24} className="text-gray-900" />
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Notifications</h1>
                </div>
            </header>

            <div className="px-5 pt-6 space-y-3">
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        className={`bg-white rounded-3xl p-4 shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all cursor-pointer ${!notif.read ? "border-l-4 border-black" : ""
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-bold text-white">{notif.avatar}</span>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <p className="text-sm text-gray-900">
                                        <span className="font-bold">{notif.user}</span>{" "}
                                        <span className="text-gray-600">{notif.action}</span>{" "}
                                        {notif.spot && <span className="font-semibold">{notif.spot}</span>}
                                    </p>
                                    <div className="flex-shrink-0">{getIcon(notif.type)}</div>
                                </div>
                                <p className="text-xs text-gray-500">{notif.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-5 mt-8 mb-6">
                <div className="text-center py-8">
                    <p className="text-sm text-gray-500">You're all caught up! 🎉</p>
                </div>
            </div>
        </main>
    );
}
