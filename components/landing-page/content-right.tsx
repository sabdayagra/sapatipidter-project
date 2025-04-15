import Image from "next/image";
import React from "react";
import TrendingNews from "./trending-news";

const ContentRight = () => {
  return (
    <div className="lg:w-[25%] w-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-bold">Kategori</p>
        </div>
        {/* Garis dengan dua warna */}
        <div className="my-4 h-1 w-full" style={{ background: "linear-gradient(to right, #000000 20%, #e5e7eb 20%)" }}></div>
      </div>

      <TrendingNews />
    </div>
  );
};

export default ContentRight;
