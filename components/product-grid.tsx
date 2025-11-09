"use client"

import { useState } from "react"
import ProductCard from "./product-card"

interface Product {
  id: string
  name: string
  emoji: string
  price: number
  colors: string[]
  description: string
  categoryBg: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Hacker Hoodie",
    emoji: "💻",
    price: 59.99,
    colors: ["black", "navy", "white"],
    description: "Essential gear for builders and creators",
    categoryBg: "bg-blue-50",
  },
  {
    id: "2",
    name: "AI First T-Shirt",
    emoji: "🤖",
    price: 34.99,
    colors: ["black", "white", "navy"],
    description: "Celebrate the future of development",
    categoryBg: "bg-orange-50",
  },
  {
    id: "3",
    name: "Summit Cap",
    emoji: "⛰️",
    price: 29.99,
    colors: ["black", "white", "tan"],
    description: "Reach new heights with Sundai",
    categoryBg: "bg-red-50",
  },
  {
    id: "4",
    name: "Community Tee",
    emoji: "👥",
    price: 34.99,
    colors: ["navy", "white", "cream"],
    description: "Built by developers, for developers",
    categoryBg: "bg-cyan-50",
  },
  {
    id: "5",
    name: "Starter Pack",
    emoji: "🚀",
    price: 79.99,
    colors: ["mixed"],
    description: "Hoodie + T-Shirt bundle",
    categoryBg: "bg-yellow-50",
  },
  {
    id: "6",
    name: "Water Bottle",
    emoji: "💧",
    price: 24.99,
    colors: ["blue", "white", "black"],
    description: "Stay hydrated while you code",
    categoryBg: "bg-blue-50",
  },
  {
    id: "7",
    name: "Sundai Stickers",
    emoji: "✨",
    price: 4.99,
    colors: ["multicolor"],
    description: "Decorate your laptop or journal",
    categoryBg: "bg-purple-50",
  },
  {
    id: "8",
    name: "Developer Socks",
    emoji: "🧦",
    price: 14.99,
    colors: ["black", "navy", "white"],
    description: "Premium comfort for long coding sessions",
    categoryBg: "bg-pink-50",
  },
]

export default function ProductGrid() {
  const [selectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory ? products.filter((p) => p.categoryBg.includes(selectedCategory)) : products

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
