"use client";

import { ArrowLeft, Send, MoreVertical } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ToastProvider";

export default function ChatDetail() {
    const router = useRouter();
    const params = useParams();
    const [message, setMessage] = useState("");
    const { showToast } = useToast();
    const [showOptions, setShowOptions] = useState(false);

    const conversations: any = {
        "1": {
            name: "Mike Thompson",
            avatar: "MT",
            online: true,
            messages: [
                { id: 1, text: "Hey! How's Bali treating you?", sender: "them", time: "10:30 AM" },
                { id: 2, text: "It's amazing! Just found this great coworking space in Canggu", sender: "me", time: "10:32 AM" },
                { id: 3, text: "Oh nice! Is it the Nomad Coffee Club?", sender: "them", time: "10:33 AM" },
                { id: 4, text: "Yes! Fast WiFi and great vibes 🔥", sender: "me", time: "10:35 AM" },
                { id: 5, text: "Perfect! I'll check it out tomorrow", sender: "them", time: "10:36 AM" },
            ],
        },
    };

    const chatId = params.id as string;
    const chat = conversations[chatId] || conversations["1"];

    const handleSend = () => {
        if (message.trim()) {
            // In real app, send message here
            setMessage("");
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
                <div className="px-5 pt-14 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ArrowLeft size={24} className="text-gray-900" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <span className="text-sm font-bold text-white">{chat.avatar}</span>
                                </div>
                                {chat.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                                )}
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-900">{chat.name}</h2>
                                <p className="text-xs text-gray-500">{chat.online ? "Online" : "Offline"}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowOptions(true)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <MoreVertical size={20} className="text-gray-600" />
                    </button>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4 pb-32">
                {chat.messages.map((msg: any) => (
                    <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[75%] ${msg.sender === "me" ? "order-2" : "order-1"}`}>
                            <div
                                className={`rounded-3xl px-4 py-3 ${msg.sender === "me"
                                    ? "bg-black text-white rounded-br-sm"
                                    : "bg-white text-gray-900 rounded-bl-sm shadow-sm"
                                    }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                            </div>
                            <p className={`text-xs text-gray-500 mt-1 px-2 ${msg.sender === "me" ? "text-right" : "text-left"}`}>
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 pb-safe-area-inset-bottom z-[60]">
                <div className="flex items-center gap-3">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-100 border-none rounded-full py-3 px-5 text-sm font-medium focus:ring-2 focus:ring-black/5 transition-all"
                    />
                    <button
                        onClick={handleSend}
                        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors active:scale-95"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>

            {/* Chat Options Modal */}
            {showOptions && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-end"
                    onClick={() => setShowOptions(false)}
                >
                    <div
                        className="bg-white rounded-t-3xl w-full p-6 pb-safe-area-inset-bottom"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Chat Options</h3>

                        <div className="space-y-2">
                            <button
                                onClick={() => {
                                    showToast("View profile coming soon!", "info");
                                    setShowOptions(false);
                                }}
                                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                            >
                                View Profile
                            </button>
                            <button
                                onClick={() => {
                                    showToast("Mute notifications coming soon!", "info");
                                    setShowOptions(false);
                                }}
                                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                            >
                                Mute Notifications
                            </button>
                            <button
                                onClick={() => {
                                    showToast("Block user coming soon!", "info");
                                    setShowOptions(false);
                                }}
                                className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors font-medium"
                            >
                                Block User
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
