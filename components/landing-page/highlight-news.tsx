import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";

const dataUtama = {
  image: "/assets/images/highlight1.png",
  category: "JAGA NEGERI",
  title: "Kakorlantas : Ops Lilin 2024 Pastikan Jalur Jakarta-Cikampek Siap Libur Nataru",
  author: "DIAN PURWANTO",
  date: "29 November 2024",
  content: "Jakarta – Kepala Korps Lalu Lintas (Kakorlantas) Polri Irjen Pol Aan Suhanan, bersama Dirut PT. Jasa Raharja Rivan A. Purwantono, Ketua...",
};

const subPosts = [
  {
    image: "/assets/images/highlight2.png",
    category: "OPINI",
    title: "Optimalisasi Pelayanan Masyarakat Melalui Reformasi Birokrasi dan Implementasi Badan Layanan Umum (BLU)",
    date: "5 November 2024",
  },
  {
    image: "/assets/images/highlight3.png",
    category: "KEGIATAN POLRI, HUKUM",
    title: "Tim Gabungan Lakukan Penangkapan Penyelundupan Benih Lobster di Batam",
    date: "1 November 2024",
  },
];

export default function HighlightNews() {
  return (
    <div className="space-y-6">
      {/* Konten Utama */}
      <div className="bg-white border rounded overflow-hidden shadow-sm">
        <Image src={dataUtama.image} alt="Berita Utama" width={1200} height={800} className="w-full h-[200px] md:h-[350px] object-cover" />
        <div className="p-4 space-y-2">
          <p className="text-[10px] font-semibold uppercase text-gray-500">{dataUtama.category}</p>
          <h2 className="font-bold text-lg md:text-xl leading-snug">{dataUtama.title}</h2>
          <div className="text-xs text-gray-500 flex gap-2 flex-wrap">
            <span>
              By <span className="font-semibold text-black">{dataUtama.author}</span>
            </span>
            <span>• {dataUtama.date}</span>
            <span className="flex items-center gap-1">
              <FaRegCommentDots /> 0
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-6">{dataUtama.content}</p>
          <button className="mt-2 px-4 py-1 text-xs border text-gray-700 hover:bg-gray-100 rounded">READ MORE</button>
        </div>
      </div>

      {/* Dua Konten Kecil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subPosts.map((item, idx) => (
          <div key={idx} className="border rounded shadow-sm bg-white overflow-hidden">
            <div className="relative">
              <Image src={item.image} alt={item.title} width={1920} height={1080} className="w-full h-[200px] object-cover" />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[11px] text-white font-semibold bg-black bg-opacity-70 px-3 py-1 rounded">{item.category}</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-sm font-bold mb-2 leading-snug">{item.title}</h3>
              <p className="text-[11px] text-gray-400 font-medium">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
