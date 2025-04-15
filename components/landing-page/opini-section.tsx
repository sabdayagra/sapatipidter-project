import { FaPlay } from "react-icons/fa";

export default function OpiniSection() {
  const news = [
    "Polsek Tapung Segel Tambang Ilegal di Karya Indah Kampar",
    "Korps Lantas Polri Cek Tol Trans Jawa Untuk Siapkan Libur Nataru 2024",
    "Kakorlantas: Ops Lilin 2024 Pastikan Jalur Jakarta-Cikampek Siap Libur Nataru",
    "Optimalisasi Pelayanan Masyarakat Melalui Reformasi Birokrasi dan Implementasi Badan Layanan Umum (BLU)",
    "Tim Gabungan Lakukan Penangkapan Penyelundupan Benih Lobster di Batam",
    "Pemantapan Integritas dan Penegakan Disiplin: Peranan Bidpropam Polda NTT dalam Mengawal Etika Kepolisian",
    "Ditpolairud Polda NTT Tangkap Pelaku Pengeboman Ikan di Ende",
    "Pengungkapan Penyelundupan Satwa Dilindungi di Sunda Kelapa oleh Ditpolair Polri",
    "Pesta Sepak Bola Nusantara: Indonesia Juara AFF U19, Kiprah Garuda Muda yang Mengukir Sejarah",
    "Dukungan Masyarakat Indonesia Untuk Kemenangan Atlet di Olimpiade Paris 2024 Lewat #IndonesiaOlimpiadeParis",
  ];

  return (
    <div className="bg-white border p-4 w-full max-w-md mx-auto lg:mx-0 my-6">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-bold">Opini</p>
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="cursor-pointer">ALL</span>
            <span className="cursor-pointer">SUBDIT I</span>
            <span className="cursor-pointer">⋮</span>
          </div>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 20%, #e5e7eb 20%)" }}></div>
      </div>

      {/* List of News */}
      <div className="space-y-4">
        {news.map((item, idx) => (
          <div key={idx} className="flex gap-2 items-start text-sm text-gray-800 leading-snug">
            <FaPlay className="w-4 h-4 text-xs cursor-pointer shrink-0 mt-1.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
