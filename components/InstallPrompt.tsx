"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

export default function InstallPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);

            // Show prompt after 3 seconds
            setTimeout(() => {
                setShowPrompt(true);
            }, 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === "accepted") {
            setDeferredPrompt(null);
        }

        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-24 left-4 right-4 z-50 animate-slideUp">
            <div className="bg-black text-white rounded-3xl p-5 shadow-2xl">
                <button
                    onClick={() => setShowPrompt(false)}
                    className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Download size={24} />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Install Nomad Spots</h3>
                        <p className="text-sm text-white/80 mb-4">
                            Add to your home screen for quick access and offline use
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={handleInstall}
                                className="flex-1 bg-white text-black py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                            >
                                Install
                            </button>
                            <button
                                onClick={() => setShowPrompt(false)}
                                className="px-4 py-2.5 text-sm font-semibold hover:bg-white/10 rounded-xl transition-colors"
                            >
                                Not Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
