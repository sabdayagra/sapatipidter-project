import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";

interface NewsItem {
  image: string;
  title: string;
  description: string;
  date: string;
  editor: string;
  comments: number;
}

const newsData: NewsItem[] = [
  {
    image: "/assets/images/latest1.png",
    title: "Mengapa Golden Visa Indonesia Penting untuk Investor Dunia? #GoldenVisaIndonesia",
    description: "Jakarta  - Dengan pesona tropis yang eksotik dan kesempatan ekonomi yang berkembang, Indonesia telah membuka pintunya lebar-lebar bagi para investor...",
    date: "25 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest2.png",
    title: "Direktoratreskrimsus Polda Kalteng Tangkap Penganggkut 8,4 Ton Bawang Berbau Ilegal",
    description: "Palangkaraya – Direktorat Reserse Kriminal Khusus (Ditreskrimsus) Polda Kalimantan Tengah (Kalteng) berhasil mengungkap kasus tindak pidana terkait Karantina Hewan, Ikan, dan...",
    date: "24 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest3.png",
    title: "Petak Kuantan Hilir Tidak Tegas Penambangan Emas Ilegal di Desa Rawang Oppu",
    description: "Sapatipidter - Polsek Kuantan Hilir melakukan operasi penindakan terhadap Penambangan Emas Tanpa Izin (PETI) di wilayah hukum Polsek Kuantan Hilir,...",
    date: "23 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest4.png",
    title: "Mengapa #IndosianaMasukBerita dan Upaya Pemerintah",
    description: "Jakarta - Fenomena yang kian merebak adalah keberadaan judi online yang telah masuk ke dalam kehidupan masyarakat Indonesia. Melihat gelombang...",
    date: "21 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest5.png",
    title: "Doa Awal Tahun Islam 1 Muharram #TahunBaruIslam1447H",
    description: "Umat muslim di berbagai daerah menyambut 1 Muharram dengan doa bersama...",
    date: "20 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest6.png",
    title: "Polda DIY Tangkap Pelaku Penipuan dengan 39.000 Botol Bekas Obat Kuat",
    description: "Kasus penipuan obat kuat palsu kembali mencuat, pelaku mengemas ulang botol kosong...",
    date: "18 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
  {
    image: "/assets/images/latest7.png",
    title: "Peringatan HUT Bhayangkara ke-78: Divisi Humas Polri Menggelar Acara di Monas",
    description: "Ribuan masyarakat hadir dalam peringatan HUT Bhayangkara yang digelar terbuka di Monas...",
    date: "15 Juli 2024",
    editor: "DIAN PURWANTO",
    comments: 2,
  },
];

export default function LatestNews() {
  return (
    <div className="bg-white px-4 py-6 max-w-3xl mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-bold">Berita Terbaru</p>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 5%, #e5e7eb 5%)" }}></div>
      </div>

      <div className="space-y-6">
        {newsData.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-shrink-0">
              <Image src={item.image} alt={item.title} width={1920} height={1080} className="w-full h-[180px] md:w-[220px] md:h-[157px] object-cover rounded" />
            </div>
            <div className="flex flex-col mt-2 md:mt-0">
              <h3 className="text-sm md:text-base lg:text-[18px] font-semibold leading-snug">{item.title}</h3>
              <div className="text-[11px] text-gray-600 mt-2 md:mt-3 flex flex-wrap items-center gap-2">
                BY <span className="font-bold text-black">{item.editor}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                    <path d="M12 7v5l3 3" />
                  </g>
                </svg>
                {item.date}
                <FaRegCommentDots className="inline-block mb-0.5 ml-1" size={10} />
                {item.comments}
              </div>
              <p className="text-sm text-gray-600 mt-3 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="cursor-pointer text-sm text-gray-600 border px-4 py-1 rounded hover:bg-gray-100">LOAD MORE</button>
      </div>
    </div>
  );
}
