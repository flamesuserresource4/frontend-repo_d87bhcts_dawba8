import React from 'react'
import { BookOpen, Bookmark } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Panduan Merawat Bibit Sawit di Musim Hujan',
    category: 'Perawatan',
    excerpt:
      'Tips praktis menjaga bibit tetap sehat dan terhindar dari penyakit saat curah hujan tinggi.',
  },
  {
    id: 2,
    title: 'Memilih Varietas Sawit yang Tepat untuk Lahan Anda',
    category: 'Varietas',
    excerpt:
      'Kenali perbedaan Tenera, Dura, dan Pisifera untuk hasil panen optimal.',
  },
  {
    id: 3,
    title: 'Strategi Pemupukan Efektif untuk Tanaman Sawit Muda',
    category: 'Nutrisi',
    excerpt:
      'Rencana pemupukan yang efisien untuk mendorong pertumbuhan dan ketahanan bibit.',
  },
]

export default function ArticlesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Artikel & Edukasi</h2>
          <p className="mt-2 text-gray-600">Wawasan terbaru tentang budidaya kelapa sawit.</p>
        </div>
        <a href="#artikel" className="text-green-700 hover:text-green-800 font-semibold">
          Lihat semua
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
              <BookOpen className="h-4 w-4" /> {a.category}
            </div>
            <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-gray-900">{a.title}</h3>
            <p className="mt-2 line-clamp-3 text-gray-600">{a.excerpt}</p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#baca" className="font-semibold text-green-700 hover:text-green-800">Baca</a>
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 hover:ring-gray-300"
                onClick={() => alert('Silakan login untuk menyimpan artikel favorit.')}
              >
                <Bookmark className="h-4 w-4" /> Simpan
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
