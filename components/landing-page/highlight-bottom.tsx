import Image from "next/image";
import { useState } from "react";

const tabs = ["ALL", "SUBDIT I", "SUBDIT III", "SUBDIT IV"];

const highlightPosts = [
  {
    image: "/assets/images/left1.png",
    title: "Korporalirud Polda Sulsel Amankan Nelayan Pengguna Bom Ikan di Pangkep",
  },
  {
    image: "/assets/images/left2.png",
    title: "Polairud Polda NTT Gagalkan Penjualan Penyu Ilegal di Adonara Barat",
  },
  {
    image: "/assets/images/left3.png",
    title: "Viral Kisah Cinta Berujung Dendam, Polres Kendal Ungkap Kasus Order Fiktif",
  },
  {
    image: "/assets/images/center1.png",
    title: "Ditpolair Korpolairud Polda Jambi Berhasil Amankan Tongkang Pasir Ilegal",
  },
  {
    image: "/assets/images/center2.png",
    title: "Ketua HIPMI Jakarta Timur Ditetapkan Sebagai Tersangka Kasus Penipuan",
  },
  {
    image: "/assets/images/center3.png",
    title: "Kasus TPPO Berhasil Dibongkar Polda Jateng, Korban 1.305 Orang",
  },
];

export default function HighlightBottom() {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <div className="bg-white p-6">
      {/* Header and Tabs */}
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="font-bold">Highlights</p>
          <div className="flex gap-4 text-sm font-medium text-gray-600">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? "text-black border-b-2 border-black" : ""} pb-1`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 10%, #e5e7eb 10%)" }}></div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlightPosts.map((post, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="w-24 h-16 relative flex-shrink-0">
              <Image src={post.image} alt={post.title} width={1920} height={1080} className="w-[100px] h-[72px] object-cover" />
            </div>
            <p className="text-[15px] leading-snug font-bold">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
