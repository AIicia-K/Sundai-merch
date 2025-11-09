"use client"

import Link from "next/link"

export default function ShopHeader({ activeTab, setActiveTab }) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setActiveTab("shop")}>
          <span className="text-2xl">🍨</span>
          <span className="font-mono font-bold text-lg">Sundai</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setActiveTab("shop")}
            className={`font-mono text-sm transition ${
              activeTab === "shop"
                ? "font-bold text-foreground border-b-2 border-foreground pb-1"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`font-mono text-sm transition ${
              activeTab === "about"
                ? "font-bold text-foreground border-b-2 border-foreground pb-1"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            About
          </button>
        </nav>

        <button className="font-mono text-sm font-semibold bg-foreground text-background px-4 py-2 rounded hover:opacity-90 transition">
          Cart (0)
        </button>
      </div>
    </header>
  )
}
