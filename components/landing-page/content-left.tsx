import Image from "next/image";
import React from "react";
import OpiniSection from "./opini-section";
import PopularNews from "./popular-news";

const ContentLeft = () => {
  return (
    <div className="lg:w-[25%] w-full">
      <div className=" bg-white p-4 border">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-bold">Berita Terkini</p>
            <div className="flex gap-2 text-xs text-gray-600">
              <span className="cursor-pointer font-semibold">ALL</span>
              <span className="cursor-pointer">SUBDIT I</span>
              <span className="cursor-pointer">⋮</span>
            </div>
          </div>
          {/* Garis dengan dua warna */}
          <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 20%, #e5e7eb 20%)" }}></div>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Pengungkapan Penyelundupan Satwa Dilindungi di Sunda Kelapa oleh Ditpolair Polri",
              img: "/assets/images/left1.png",
            },
            {
              title: "Pesta Sepak Bola Nusantara: Indonesia Juara AFF U19, Kiprah Garuda Muda yang Mengukir Sejarah",
              img: "/assets/images/left2.png",
            },
            {
              title: "Dukungan Masyarakat Indonesia Untuk Kemenangan Atlet di Olimpiade Paris 2024 Lewat #IndonesiaOlimpiadeParis",
              img: "/assets/images/left3.png",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <Image src={item.img} alt={item.title} width={1920} height={1080} className="w-[100px] h-[72px] object-cover" />
              <p className="text-[15px] font-semibold leading-tight">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <OpiniSection />

      <PopularNews />

      {/* PPS */}
      <div className="relative border rounded-lg w-full h-full lg:h-[400px] max-w-full mt-4 mx-auto bg-white p-6 shadow-sm text-center">
        {/* Tombol Close */}
        <button className="absolute top-2 right-2 text-xs text-blue-500 hover:text-blue-700">✕</button>

        {/* Teks Tengah */}
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold text-[#a96a6a] tracking-widest leading-snug">
            KOLOM <br /> PPS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
