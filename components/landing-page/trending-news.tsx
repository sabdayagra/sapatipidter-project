import Image from "next/image";

const trendingNews = [
  {
    image: "/assets/images/category1.png",
    title: "Presiden Joko Widodo Menginstruksikan Polri Tingkatkan Profesionalisme Jelang Pilkada 2024",
    description: "Presiden Joko Widodo kembali menegaskan pentingnya Polri untuk meningkatkan profesionalisme dalam menjalankan tugasnya...",
    date: "2 Juli 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.1 MEDIA SOSIAL",
  },
  {
    image: "/assets/images/category2.png",
    title: "Kapolri: Sinergi Antar Lembaga Adalah Kunci Sukses Pengamanan Pemilu",
    description: "Kapolri menyampaikan pentingnya kerja sama antara institusi guna menciptakan pemilu yang aman dan damai...",
    date: "30 Juni 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.2 MEDIA SOSIAL",
  },
  {
    image: "/assets/images/category3.png",
    title: "Polri Raih Apresiasi Internasional atas Profesionalisme di KTT ASEAN",
    description: "Keberhasilan Polri dalam mengamankan perhelatan KTT ASEAN menuai pujian dari berbagai negara peserta...",
    date: "27 Juni 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.3 MEDIA SOSIAL",
  },
  {
    image: "/assets/images/category4.png",
    title: "Polri Raih Apresiasi Internasional atas Profesionalisme di KTT ASEAN",
    description: "Keberhasilan Polri dalam mengamankan perhelatan KTT ASEAN menuai pujian dari berbagai negara peserta...",
    date: "27 Juni 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.3 MEDIA SOSIAL",
  },
  {
    image: "/assets/images/category1.png",
    title: "Presiden Joko Widodo Menginstruksikan Polri Tingkatkan Profesionalisme Jelang Pilkada 2024",
    description: "Presiden Joko Widodo kembali menegaskan pentingnya Polri untuk meningkatkan profesionalisme dalam menjalankan tugasnya...",
    date: "2 Juli 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.4 MEDIA SOSIAL",
  },
  {
    image: "/assets/images/category3.png",
    title: "Polri Raih Apresiasi Internasional atas Profesionalisme di KTT ASEAN",
    description: "Keberhasilan Polri dalam mengamankan perhelatan KTT ASEAN menuai pujian dari berbagai negara peserta...",
    date: "27 Juni 2024",
    editor: "DIAN PURWANTO",
    tag: "TRENDING NO.5 MEDIA SOSIAL",
  },
];

export default function TrendingNews() {
  return (
    <div className="space-y-10">
      {trendingNews.map((item, index) => (
        <div key={index} className="flex flex-col bg-white">
          <div className="relative overflow-hidden">
            <Image src={item.image} alt={item.title} width={1920} height={1080} className="object-cover w-full h-[122px] lg:h-[250px]" />
            <span className="absolute top-2 left-2 text-[10px] uppercase font-semibold text-white bg-black bg-opacity-80 px-2 py-1 rounded">{item.tag}</span>
          </div>
          <div className="py-6 px-4">
            <h2 className="text-[12px] lg:text-[20px] font-bold leading-snug text-black">{item.title}</h2>
            <p className="text-[12px] text-gray-500 mt-1 flex flex-row items-center gap-1.5 mb-3">
              BY <span className="font-bold text-black">{item.editor}</span>{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                  <path d="M12 7v5l3 3" />
                </g>
              </svg>
              {item.date}
            </p>
            <p className="text-[14px] text-gray-600 mt-2 leading-snug">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
