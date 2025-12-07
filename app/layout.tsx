"use client";

import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import InstallPrompt from "@/components/InstallPrompt";
import { ToastProvider } from "@/components/ToastProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideBottomNav = pathname?.startsWith("/chat");

  return (
    <html lang="en">
      <head>
        <title>Wander</title>
        <meta name="description" content="Discover and share the best spots for digital nomads." />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${outfit.className} bg-gray-50 text-gray-900`}>
        <AuthProvider>
          <ToastProvider>
            {children}
            {!hideBottomNav && <BottomNav />}
            <InstallPrompt />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
