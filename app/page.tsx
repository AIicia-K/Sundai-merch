"use client"

import { useState } from "react"
import ShopHeader from "@/components/shop-header"
import ShopFooter from "@/components/shop-footer"
import ProductGrid from "@/components/product-grid"
import About from "@/components/about"

export default function Home() {
  const [activeTab, setActiveTab] = useState("shop")

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ShopHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {activeTab === "shop" && (
          <>
            <div className="mb-12">
              <h1 className="font-mono text-4xl sm:text-5xl font-bold text-center mb-3">Sundai Merch</h1>
              <p className="text-center text-foreground/70 font-mono text-sm sm:text-base max-w-2xl mx-auto">
                Wear the future. Support the mission. Shop exclusive Sundai apparel & gear designed for builders,
                hackers, and visionaries.
              </p>
            </div>
            <ProductGrid />
          </>
        )}
        {activeTab === "about" && <About />}
      </main>
      <ShopFooter />
    </div>
  )
}
