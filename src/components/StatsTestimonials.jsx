import React from 'react'
import { Users, Factory, Sprout, MessageCircle } from 'lucide-react'

const stats = [
  { id: 1, label: 'Petani Terdaftar', value: '12.5k+', icon: Users },
  { id: 2, label: 'Distributor', value: '1.2k+', icon: Factory },
  { id: 3, label: 'Bibit Tersedia', value: '35k+', icon: Sprout },
  { id: 4, label: 'Umpan Balik', value: '9.8k+', icon: MessageCircle },
]

const testimonials = [
  {
    name: 'Budi - Petani Riau',
    text: 'Platform ini memudahkan saya menemukan bibit berkualitas dengan cepat. Prosesnya simpel dan aman.',
  },
  {
    name: 'Sari - Distributor Medan',
    text: 'Permintaan meningkat sejak bergabung. Fitur filter lokasi sangat membantu menjangkau petani terdekat.',
  },
  {
    name: 'Andi - Petani Kaltim',
    text: 'Transaksi jadi transparan dan harga kompetitif. Sangat direkomendasikan.',
  },
]

export default function StatsTestimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-4">
          {stats.map(({ id, label, value, icon: Icon }) => (
            <div key={id} className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">Testimoni</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-gray-700">“{t.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-gray-900">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
