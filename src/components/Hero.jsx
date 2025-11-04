import React from 'react'
import { Leaf, Store, UserPlus } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8pTL3c3cH1vJXrA9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-green-700 ring-1 ring-green-200">
            <Leaf className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wide">Palm Seedling Marketplace</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Hubungkan Petani dengan Distributor Bibit Sawit
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Temukan bibit unggulan, pesan dengan mudah, dan bangun jejaring dengan distributor tepercaya di seluruh Indonesia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <UserPlus className="h-5 w-5" />
              Login / Daftar
            </a>
            <a
              href="#bibit"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-gray-800 ring-1 ring-gray-200 hover:ring-gray-300"
            >
              <Store className="h-5 w-5" />
              Lihat Bibit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
