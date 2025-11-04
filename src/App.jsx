import React from 'react'
import Hero from './components/Hero'
import FeaturedSeeds from './components/FeaturedSeeds'
import StatsTestimonials from './components/StatsTestimonials'
import ArticlesPreview from './components/ArticlesPreview'
import { Leaf, LogIn } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple navbar */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center gap-2 font-extrabold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white shadow">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg">SawitConnect</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#bibit" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Bibit</a>
            <a href="#artikel" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Artikel</a>
            <a href="#kontak" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Kontak</a>
          </nav>
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
          >
            <LogIn className="h-4 w-4" /> Login
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturedSeeds />
        <StatsTestimonials />
        <ArticlesPreview />
      </main>

      <footer id="kontak" className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-bold">Tentang Kami</h4>
              <p className="mt-2 max-w-prose text-gray-600">
                SawitConnect adalah platform yang menjembatani petani dan distributor bibit sawit untuk transaksi yang
                lebih mudah, cepat, dan tepercaya.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Kontak</h4>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Email: admin@sawitconnect.id</li>
                <li>WhatsApp: +62 811-2222-3333</li>
              </ul>
              <form
                className="mt-4 flex max-w-md items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Pesan terkirim! Terima kasih atas saran Anda.')
                }}
              >
                <input
                  type="text"
                  placeholder="Tulis pesan atau saran..."
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} SawitConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
