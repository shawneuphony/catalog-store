import type { Metadata } from 'next'
import ImageCarousel from '@/components/ImageCarousel'
import { Leaf, Heart, Users, Award } from 'lucide-react'
import Image from 'next/image'

const aboutSlides = [
  {
    url: "/img1.jpg",
    alt: "Organic farm",
  },
  {
    url: "/img2.jpg",
    alt: "Harvesting moringa",
  },
  {
    url: "/img3.jpg",
    alt: "Natural products",
  },
  {
    url: "/img4.jpg",
    alt: "Community",
  },
];

export const metadata: Metadata = {
  title: 'About Us | Phatsima Organic',
  description: 'Learn about our journey, values, and commitment to organic wellness.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section – full width carousel with overlay text */}
      <section className="relative w-full pt-8 pb-0 px-4 md:px-8">
  <div className="relative w-full h-[calc(100vh-9rem)] min-h-[600px] rounded-[2rem] overflow-hidden">
    <ImageCarousel
      slides={aboutSlides}
      autoPlayInterval={5000}
      heightClass="h-full"
      className="rounded-none"
    />
    <div className="absolute inset-0 bg-black/40 z-10" />
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg px-4">
        Our Story
      </h1>
      <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl drop-shadow px-4">
        Rooted in nature, driven by science.
      </p>
    </div>
  </div>
</section>

      {/* Our Journey / Promise – unchanged except heading (already using logo) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <h2 className="font-display text-2xl text-slate-900">
                The
              </h2><Image
                src="/logo.png"
                alt="Phatsima Organic Logo"
                width={180}
                height={120}
                className="h-24 w-auto"
              />
              <h2 className="font-display text-2xl text-slate-900">
                Promise
              </h2>
            </div>
            <div className="space-y-4 font-body text-slate-600 leading-relaxed">
              <p>
                Born from a passion for traditional wellness and modern sustainability, Phatsima Organic brings you the finest moringa and Moretologa products. Our journey began in the fertile lands of Botswana, where we discovered the incredible benefits of the moringa tree – a natural superfood that has nourished communities for centuries.
              </p>
              <p>
                Today, we work directly with small‑scale farmers who use regenerative practices to grow our ingredients. From seed to shelf, every product is crafted with respect for the earth and for your wellbeing.
              </p>
              <p>
                Whether it’s our cold‑pressed oils, antioxidant‑rich teas, or nourishing skincare, we invite you to experience the purity of nature in every drop, leaf, and bar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}