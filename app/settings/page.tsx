"use client";

import { ArrowLeft, User, Bell, Lock, Globe, Moon, HelpCircle, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ToastProvider";

export default function Settings() {
    const router = useRouter();
    const { user, signOut } = useAuth();
    const { showToast } = useToast();

    const handleSignOut = async () => {
        try {
            await signOut();
            showToast("Signed out successfully", "success");
            router.push("/auth");
        } catch (error) {
            showToast("Failed to sign out", "error");
        }
    };

    const settingsSections = [
        {
            title: "Account",
            items: [
                { icon: User, label: "Edit Profile", action: () => showToast("Edit profile coming soon!", "info") },
                { icon: Lock, label: "Privacy", action: () => showToast("Privacy settings coming soon!", "info") },
            ]
        },
        {
            title: "Preferences",
            items: [
                { icon: Bell, label: "Notifications", action: () => router.push("/notifications") },
                { icon: Globe, label: "Language", action: () => showToast("Language settings coming soon!", "info") },
                { icon: Moon, label: "Dark Mode", action: () => showToast("Dark mode coming soon!", "info") },
            ]
        },
        {
            title: "Support",
            items: [
                { icon: HelpCircle, label: "Help & FAQ", action: () => showToast("Help center coming soon!", "info") },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 pb-28">
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
                <div className="px-5 pt-14 pb-4 flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
                </div>
            </header>

            <div className="px-5 pt-6 space-y-6">
                {/* User Info */}
                {user && (
                    <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                {user.email?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{user.user_metadata?.username || "User"}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Settings Sections */}
                {settingsSections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
                            {section.title}
                        </h2>
                        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                            {section.items.map((item, itemIdx) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={itemIdx}
                                        onClick={item.action}
                                        className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                                    >
                                        <Icon size={20} className="text-gray-600" />
                                        <span className="flex-1 text-left font-medium text-gray-900">{item.label}</span>
                                        <ArrowLeft size={16} className="text-gray-400 rotate-180" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Sign Out */}
                {user && (
                    <button
                        onClick={handleSignOut}
                        className="w-full bg-white rounded-3xl px-6 py-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex items-center gap-4 hover:bg-red-50 transition-colors group"
                    >
                        <LogOut size={20} className="text-gray-600 group-hover:text-red-600 transition-colors" />
                        <span className="flex-1 text-left font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                            Sign Out
                        </span>
                    </button>
                )}

                {/* App Info */}
                <div className="text-center text-sm text-gray-500 py-4">
                    <p>Wander v1.0.0</p>
                    <p className="mt-1">Made with ❤️ for digital nomads</p>
                </div>
            </div>
        </main>
    );
}
