"use client"

import { useState } from "react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    emoji: string
    price: number
    colors: string[]
    description: string
    categoryBg: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className={`${product.categoryBg} rounded-lg p-6 flex flex-col transition-all hover:shadow-md`}>
      {/* Icon */}
      <div className="text-5xl mb-4 text-center">{product.emoji}</div>

      {/* Product Name */}
      <h3 className="font-mono font-bold text-lg mb-2 text-foreground">{product.name}</h3>

      {/* Description */}
      <p className="font-mono text-sm text-foreground/70 mb-4 flex-grow">{product.description}</p>

      {/* Colors */}
      {product.colors[0] !== "multicolor" && product.colors[0] !== "mixed" && (
        <div className="flex gap-2 mb-4">
          {product.colors.map((color, idx) => (
            <button
              key={color}
              onClick={() => setSelectedColor(idx)}
              className={`w-5 h-5 rounded-full transition-all ${
                color === "black"
                  ? "bg-black"
                  : color === "white"
                    ? "bg-white border border-border"
                    : color === "navy"
                      ? "bg-blue-900"
                      : color === "tan"
                        ? "bg-amber-100"
                        : color === "cream"
                          ? "bg-yellow-50"
                          : color === "blue"
                            ? "bg-blue-500"
                            : "bg-gray-300"
              } ${selectedColor === idx ? "ring-2 ring-offset-2 ring-foreground" : ""}`}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>
      )}

      {/* Price */}
      <div className="mb-4">
        <p className="font-mono font-bold text-xl text-foreground">${product.price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddCart}
        className={`w-full font-mono text-sm font-semibold py-2 rounded transition-all ${
          isAdded ? "bg-green-500 text-white" : "bg-foreground text-background hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  )
}
