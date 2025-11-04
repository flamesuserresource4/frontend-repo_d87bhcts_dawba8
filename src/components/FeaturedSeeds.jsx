import React from 'react'
import { MapPin, Star } from 'lucide-react'

const seeds = [
  {
    id: 1,
    name: 'Bibit Tenera Premium',
    price: 25000,
    rating: 4.8,
    location: 'Riau',
    image:
      'https://images.unsplash.com/photo-1600357169227-9d0a5dc83904?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Bibit Dura Sehat',
    price: 18000,
    rating: 4.6,
    location: 'Sumatera Utara',
    image:
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Bibit Pisifera Unggul',
    price: 29000,
    rating: 4.9,
    location: 'Kalimantan Barat',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Varietas Super Tenera',
    price: 32000,
    rating: 5,
    location: 'Jambi',
    image:
      'https://images.unsplash.com/photo-1519683104544-61664aa2b32a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Bibit Sawit Organik',
    price: 28000,
    rating: 4.7,
    location: 'Sulawesi Selatan',
    image:
      'https://images.unsplash.com/photo-1543339494-b4cd0d2fdcdb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Bibit Tahan Hama',
    price: 30000,
    rating: 4.9,
    location: 'Aceh',
    image:
      'https://images.unsplash.com/photo-1559884743-74a57598c6dd?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function FeaturedSeeds() {
  return (
    <section id="bibit" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Bibit Unggulan</h2>
          <p className="mt-2 text-gray-600">Cuplikan bibit sawit terbaik dari distributor terpercaya.</p>
        </div>
        <a href="#semua-bibit" className="text-green-700 hover:text-green-800 font-semibold">
          Lihat semua
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {seeds.map((seed) => (
          <article
            key={seed.id}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={seed.image}
                alt={seed.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-semibold text-yellow-700">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" /> {seed.rating}
              </div>
            </div>
            <div className="p-5">
              <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">{seed.name}</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{seed.location}</span>
              </div>
              <p className="mt-3 text-xl font-extrabold text-green-700">Rp {seed.price.toLocaleString('id-ID')}</p>
              <button
                className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2.5 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => alert('Silakan login untuk memesan.')}
              >
                Login untuk memesan
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
