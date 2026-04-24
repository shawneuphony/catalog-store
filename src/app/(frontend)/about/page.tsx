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
    <div className="bg-yellow-100">
      {/* Hero section with carousel */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Story
            </h1>
            <p className="font-body text-lg text-slate-600">
              Rooted in nature, driven by science.
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-4xl mx-auto">
            <ImageCarousel slides={aboutSlides} heightClass="h-80 md:h-96" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              What We Believe
            </h2>
            <p className="font-body text-slate-600 max-w-2xl mx-auto">
              We’re on a mission to bring nature’s purest benefits to your everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "100% Organic", desc: "No pesticides, no GMOs, no compromises." },
              { icon: Heart, title: "Handcrafted", desc: "Small batches made with love and care." },
              { icon: Users, title: "Community First", desc: "Supporting local farmers and artisans." },
              { icon: Award, title: "Quality Assured", desc: "Rigorous testing for purity and potency." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="font-body text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
    <h2 className="font-display text-3xl font-bold text-slate-900">The</h2> <Image
      src="/logo.png"
      alt="Phatsima Organic Logo"
      width={180}
      height={120}
      className="h-32 w-auto"
    />
    <h2 className="font-display text-3xl font-bold text-slate-900">
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
  );
}