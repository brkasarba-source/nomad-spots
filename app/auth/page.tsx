"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ToastProvider";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const { signIn, signUp } = useAuth();
    const router = useRouter();
    const { showToast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isLogin) {
                await signIn(email, password);
                showToast("Welcome back! 👋", "success");
            } else {
                await signUp(email, password, username);
                showToast("Account created! Check your email to verify. 📧", "success");
            }
            router.push("/");
        } catch (error: any) {
            showToast(error.message || "Something went wrong", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-5">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Wander</h1>
                    <p className="text-gray-600">Discover amazing spots for digital nomads</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${isLogin ? "bg-black text-white" : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${!isLogin ? "bg-black text-white" : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-black/5"
                                    required={!isLogin}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-black/5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-black/5"
                                required
                                minLength={6}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    By continuing, you agree to our Terms & Privacy Policy
                </p>
            </div>
        </main>
    );
}
