"use client";

import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const newsData = [
  {
    title: "Polri Siapkan Ambulans Udara untuk Tanggap Darurat di Jalur Mudik Lebaran 2025",
    category: "TAK BERKATEGORI",
    date: "25 MARET 2025",
    image: "/assets/images/hero1.png",
  },
  {
    title: "Polri Tangkap Pengolahan Timah Ilegal di Bekasi, Kerugian Negara Capai Miliaran Rupiah",
    category: "PERTAMBANGAN",
    date: "7 FEBRUARI 2025",
    image: "/assets/images/hero2.png",
  },
  {
    title: "Polres Kuansing Tindak Penambangan Ilegal Sebanyak 21 Kasus Terungkap Sejak Januari 2024",
    category: "PERTAMBANGAN",
    date: "3 FEBRUARI 2025",
    image: "/assets/images/hero3.png",
  },
  {
    title: "Kapolri Pimpin Upacara Sertijab Kapolda Sumbar dan Kenaikan Pangkat untuk 10.548 Perwira",
    category: "BERITA NASIONAL",
    date: "8 JANUARI 2025",
    image: "/assets/images/hero4.png",
  },
  {
    title: "Polsek Tapung Segel Tambang Ilegal di Karya Indah Kampar",
    category: "PERTAMBANGAN",
    date: "2 JANUARI 2025",
    image: "/assets/images/hero5.png",
  },
];

export default function Hero() {
  return (
    <>
      <Reveal>
        <div className="px-[35px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {newsData.map((news, index) => (
              <div key={index} className="border border-gray-200">
                <Image src={news.image} alt={news.title} width={1920} height={1080} className="w-full h-[200px] object-cover" />
                <div className="p-4 text-center">
                  <p className="text-[11px] text-gray-500 font-semibold tracking-wider mb-2">{news.category}</p>
                  <h3 className="text-[20px] font-bold mb-2 leading-snug">{news.title}</h3>
                  <p className="text-[11px] text-gray-400 font-medium">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
