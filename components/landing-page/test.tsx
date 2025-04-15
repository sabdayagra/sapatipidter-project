// components/HomeNewsLayout.tsx

import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Test() {
  return (
    <div className="max-w-[1545px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Berita Terkini */}
        <div className="lg:w-[25%] w-full bg-white p-4 border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Berita Terkini</h2>
            <div className="flex gap-2 text-xs text-gray-600">
              <span className="cursor-pointer">ALL</span>
              <span className="cursor-pointer">SUBDIT I</span>
              <span className="cursor-pointer">⋮</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Pengungkapan Penyelundupan Satwa Dilindungi di Sunda Kelapa oleh Ditpolair Polri",
                img: "/sample1.jpg",
              },
              {
                title: "Pesta Sepak Bola Nusantara: Indonesia Juara AFF U19, Kiprah Garuda Muda yang Mengukir Sejarah",
                img: "/sample2.jpg",
              },
              {
                title: "Dukungan Masyarakat Indonesia Untuk Kemenangan Atlet di Olimpiade Paris 2024 Lewat #IndonesiaOlimpiadeParis",
                img: "/sample3.jpg",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <Image src={item.img} alt={item.title} width={100} height={100} className="w-20 h-16 object-cover" />
                <p className="text-sm font-semibold leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Slider + News */}
        <div className="lg:w-[50%] w-full flex flex-col gap-4">
          {/* Top Slider */}
          <div className="bg-white p-3 border flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <FiChevronLeft />
            {["Polda Sumsel Tumpas Penyelundup Batubara Tiga Tersangka dan 88,2 Ton Diamankan", "Korpolairud Polri Amankan Nelayan Pengguna Bom Ikan", "Polairud Polda NTT Gagalkan Penjualan Penyu Ilegal"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 min-w-max">
                <Image src={`/sample${idx + 4}.jpg`} alt="slider" width={50} height={50} className="w-12 h-12 object-cover rounded" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
            <FiChevronRight />
          </div>

          {/* Main News */}
          <div className="bg-white border">
            <Image src="/sample-main.jpg" alt="main news" width={800} height={500} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="uppercase text-xs text-gray-500 mb-2">Jaga Negeri</p>
              <h3 className="text-xl font-bold leading-snug">Kakorlantas: Ops Lilin 2024 Pastikan Jalur</h3>
            </div>
          </div>
        </div>

        {/* Right Column - Kategori */}
        <div className="lg:w-[25%] w-full bg-white border p-4">
          <h2 className="font-bold mb-4 border-b inline-block">Kategori</h2>
          <div className="bg-black text-white px-2 py-1 text-xs w-max mb-2">TRENDING NO.1 MEDIA SOSIAL</div>
          <Image src="/sample-right.jpg" alt="kategori" width={500} height={300} className="w-full h-40 object-cover" />
          <h3 className="text-md font-bold mt-3 leading-snug">Presiden Joko Widodo Menginstruksikan Polri Tingkatkan Profesionalisme Jelang Pilkada 2024</h3>
          <p className="text-xs text-gray-500 mt-1">
            BY <span className="font-semibold">DIAN PURWANTO</span> • 2 Juli 2024
          </p>
          <p className="text-sm mt-2 text-gray-700 line-clamp-2">Jakarta - Presiden Joko Widodo kembali menyampaikan pentingnya netralitas dan profesionalisme Polri...</p>
        </div>
      </div>
    </div>
  );
}
