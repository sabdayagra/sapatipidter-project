import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";

const subditINews = {
  main: {
    image: "/assets/images/subdit1.png",
    category: "KARANTINA HEWAN, IKAN DAN TUMBUHAN",
    title: "Tim Gabungan Lakukan Penangkapan Penyelundupan Benih Lobster di Batam",
    editor: "DIAN PURWANTO",
    date: "1 November 2024",
    comments: 2,
    description: "Batam - Operasi gabungan yang melibatkan Direktorat Tindak Pidana Tertentu (Dit Tipidter) Bareskrim Polri bersama Bakamla RI, Kanwil Khusus DJBC...",
  },
  others: [
    {
      image: "/assets/images/center1.png",
      title: "Pengungkapan Penyelundupan Satwa Dilindungi di Sunda Kelapa oleh Ditpolair Polri",
    },
    {
      image: "/assets/images/popular3.png",
      title: "Direksrimsus Polda Kalteng Tangkap Pengangkut 8,4 Ton Bawang Bombai Ilegal",
    },
    {
      image: "/assets/images/popular2.png",
      title: "Polda DIY Tangkap Pelaku Penyelundupan 80.000 Benih Lobster Ilegal di YIA",
    },
    {
      image: "/assets/images/popular1.png",
      title: "Polda Sumsel Tumpas Penyelundup Batubara Tiga Tersangka dan 88,2 Ton Diamankan",
    },
  ],
};

export default function Subdit1() {
  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Subdit I</p>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 20%, #e5e7eb 20%)" }}></div>
      </div>

      {/* Main News */}
      <div>
        <div className="relative  overflow-hidden">
          <Image src={subditINews.main.image} alt={subditINews.main.title} width={1920} height={1080} className="w-full h-56 md:h-[280px] object-cover" />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">{subditINews.main.category}</span>
        </div>
        <h3 className="mt-3 text-base font-bold leading-snug">{subditINews.main.title}</h3>
        <p className="text-[11px] text-gray-500 mt-1 flex flex-row items-center gap-2">
          BY <span className="font-bold text-black">{subditINews.main.editor}</span>{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
              <path d="M12 7v5l3 3" />
            </g>
          </svg>{" "}
          {subditINews.main.date} <FaRegCommentDots className="inline-block mb-0.5 ml-1" size={10} /> {subditINews.main.comments}
        </p>
        <p className="text-[14px] text-gray-600 mt-2 leading-snug">{subditINews.main.description}</p>
      </div>

      {/* List of Other News */}
      <div className="space-y-4">
        {subditINews.others.map((item, idx) => (
          <div key={idx} className="flex space-x-4">
            <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
              <Image src={item.image} alt={item.title} width={1920} height={1080} objectFit="cover" className="" />
            </div>
            <p className="text-sm font-bold leading-snug">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
