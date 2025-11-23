"use client";

import { Search, MoreVertical } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Messages() {
    const [messageText, setMessageText] = useState("");

    const conversations = [
        {
            id: 1,
            name: "Mike Thompson",
            avatar: "MT",
            lastMessage: "Hey! How's Bali treating you?",
            time: "2m ago",
            unread: 2,
            online: true,
        },
        {
            id: 2,
            name: "Elena Rodriguez",
            avatar: "ER",
            lastMessage: "That cafe was amazing, thanks!",
            time: "1h ago",
            unread: 0,
            online: true,
        },
        {
            id: 3,
            name: "Alex Chen",
            avatar: "AC",
            lastMessage: "Are you going to the meetup?",
            time: "3h ago",
            unread: 1,
            online: false,
        },
        {
            id: 4,
            name: "Sarah Kim",
            avatar: "SK",
            lastMessage: "Perfect! See you there 👋",
            time: "Yesterday",
            unread: 0,
            online: false,
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Messages</h1>

                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full bg-gray-100/80 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                </div>
            </header>

            <div className="px-5 pt-4 space-y-3">
                {conversations.map((conv) => (
                    <Link
                        key={conv.id}
                        href={`/chat/${conv.id}`}
                        className="block bg-white rounded-3xl p-4 shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-700">{conv.avatar}</span>
                                    </div>
                                </div>
                                {conv.online && (
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-gray-900 truncate">{conv.name}</h3>
                                    <span className="text-xs text-gray-500 font-medium whitespace-nowrap ml-2">{conv.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                                    {conv.unread > 0 && (
                                        <span className="ml-2 min-w-[20px] h-5 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center px-1.5">
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <MoreVertical size={18} className="text-gray-400" />
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="px-5 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
                    <div className="text-5xl mb-4">💬</div>
                    <h3 className="font-bold text-xl mb-2">Connect with Nomads</h3>
                    <p className="text-sm text-white/90 mb-4">
                        Chat with fellow travelers and share experiences
                    </p>
                    <button className="bg-white text-purple-600 px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Start Chatting
                    </button>
                </div>
            </div>
        </main>
    );
}
