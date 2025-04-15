"use client";

import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HighlightNews from "./highlight-news";
import HighlightBottom from "./highlight-bottom";
import LatestNews from "./latest-news";
import ColoumnPPS from "./coloumn-pps";

const newsData = [
  {
    image: "/assets/images/center1.png",
    title: "Polda Sumsel Tumpas Penyelundup Batubara Tiga Tersangka dan 88,2 Ton Diamankan",
  },
  {
    image: "/assets/images/center2.png",
    title: "Korpolairud Polri Amankan Nelayan Pengguna Bom Ikan",
  },
  {
    image: "/assets/images/center3.png",
    title: "Polairud Polda NTT Gagalkan Penjualan Penyu Ilegal",
  },
  {
    image: "/assets/images/center3.png",
    title: "Polairud Polda NTT Gagalkan Penjualan Penyu Ilegal",
  },
  {
    image: "/assets/images/center3.png",
    title: "Polairud Polda NTT Gagalkan Penjualan Penyu Ilegal",
  },
];

const ContentCenter = () => {
  return (
    <div className="lg:w-[50%] w-full flex flex-col gap-4">
      {/* Top Slider */}
      <div className="bg-white p-3 border rounded">
        <Carousel className="w-full flex justify-center px-10">
          <CarouselContent>
            {newsData.map((item, idx) => (
              <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3">
                <div className="flex items-center gap-3">
                  <Image src={item.image} alt="slider" width={1920} height={1080} className="w-[60px] h-[60px] object-cover rounded" />
                  <p className="text-xs leading-snug">{item.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigasi kiri-kanan */}
          <CarouselPrevious className="-left-1" />
          <CarouselNext className="-right-1" />
        </Carousel>
      </div>

      <HighlightNews />

      <HighlightBottom />

      <LatestNews />

      <ColoumnPPS />
    </div>
  );
};

export default ContentCenter;
