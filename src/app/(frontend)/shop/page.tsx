import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

// Define product type
type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
}

// Product data
const products: Product[] = [
  { id: '1', name: 'Moretologa Juice 330ml', price: 10.00, image: '/images/products/p1.png', category: 'Juice' },
  { id: '2', name: 'Moretologa Juice 1L', price: 30.00, image: '/images/products/p2.png', category: 'Juice' },
  { id: '3', name: 'Moringa Teabags', price: 70.00, image: '/images/products/p3.png', category: 'Tea' },
  { id: '4', name: 'Moretologa Seed Oil', price: 120.00, image: '/images/products/p4.png', category: 'Oil' }
]

export const metadata: Metadata = {
  title: 'Shop | Organic Products',
  description: 'Browse our collection of organic juices, oils, teas, and skincare.',
}

export default function ShopPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Collection
          </h1>
          <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
            Handcrafted organic products made with love and nature&apos;s finest ingredients.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-square bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-body font-medium px-2 py-1 rounded-full text-slate-700">
          {product.category}
        </span>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-slate-800 text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="font-display text-brand-600 font-bold text-xl mb-3">
          P{product.price.toFixed(2)}
        </p>
        <button className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-body font-medium py-2.5 rounded-xl transition-colors">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}