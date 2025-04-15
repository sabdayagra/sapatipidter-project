import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa";

export default function PopularNews() {
  const featuredArticle = {
    image: "/assets/images/popular1.png",
    category: "PERTAMBANGAN",
    date: "Senin, 30 Desember 2024 • 05.27PM",
    title: "Polsek Tapung Segel Tambang Ilegal di Karya Indah Kampar",
    author: "DIAN PURWANTO",
    publishDate: "2 Januari 2025",
    comments: 0,
    excerpt: "Kampar - Polsek Tapung menunjukkan kesigapan dalam menanggapi laporan media online...",
  };

  const secondaryArticles = [
    {
      image: "/assets/images/popular2.png",
      title: "Tim Gabungan Lakukan Penangkapan Penyelundupan Benih Lobster di Batam",
      author: "SITI NURHALIZA",
      publishDate: "1 Januari 2025",
      comments: 2,
    },
    {
      image: "/assets/images/popular3.png",
      title: "Pengungkapan Penyelundupan Satwa Dilindungi di Sunda Kelapa oleh Ditpolair Polri",
      author: "AGUS SALIM",
      publishDate: "30 Desember 2024",
      comments: 1,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-bold">Berita Terpopuler</p>
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="cursor-pointer font-semibold">ALL</span>
            <span className="cursor-pointer">⋮</span>
          </div>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 20%, #e5e7eb 20%)" }}></div>
      </div>

      {/* Featured Article */}
      <div>
        <div className="relative">
          <Image src={featuredArticle.image} alt="Berita" width={1920} height={1080} className="w-full h-auto object-cover rounded" />
          <div className="absolute bottom-0 left-0 bg-black text-white text-[10px] px-2 py-0.5 m-2 rounded-sm">{featuredArticle.category}</div>
          {/* <div className="absolute bottom-0 right-0 text-white text-[10px] px-2 py-0.5 m-2 text-right">{featuredArticle.date}</div> */}
        </div>

        <h3 className="font-bold text-sm lg:text-[16px] mt-6 leading-tight">{featuredArticle.title}</h3>

        <div className="text-[11px] text-gray-600 mt-3 flex flex-row items-center gap-2">
          BY <span className="font-bold text-black">{featuredArticle.author}</span>{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
              <path d="M12 7v5l3 3" />
            </g>
          </svg>{" "}
          {featuredArticle.publishDate} <FaRegCommentDots className="inline-block mb-0.5 ml-1" size={10} /> {featuredArticle.comments}
        </div>

        <p className="text-sm text-gray-600 mt-4 mb-6">{featuredArticle.excerpt}</p>
      </div>

      {/* Secondary Articles */}
      <div className="mt-5 flex flex-col gap-8">
        {secondaryArticles.map((article, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Image src={article.image} alt="Thumb" width={1920} height={1080} className="w-[100px] h-[71.5px] object-cover" />
            <div>
              <p className="text-[15px] font-bold leading-tight">{article.title}</p>
              {/* <p className="text-[11px] text-gray-600 mt-1">
                BY <span className="text-black font-semibold">{article.author}</span> • {article.publishDate} • <FaRegCommentDots className="inline-block mb-0.5 ml-1" size={10} /> {article.comments}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
