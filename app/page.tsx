"use client";
import ColoumnPPS from "@/components/landing-page/coloumn-pps";
import ContentCenter from "@/components/landing-page/content-center";
import ContentLeft from "@/components/landing-page/content-left";
import ContentRight from "@/components/landing-page/content-right";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import ReskrimsusPolda from "@/components/landing-page/reskrimsus-polda";
import Subdit1 from "@/components/landing-page/subdit-1";
import Subdit2 from "@/components/landing-page/subdit-2";
import Subdit3 from "@/components/landing-page/subdit-3";
import Subdit4 from "@/components/landing-page/subdit-4";
import Subdit5 from "@/components/landing-page/subdit-5";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <>
        <Reveal>
          <div className="bg-[#f0f1f2] flex-col flex lg:flex-row gap-4 px-4 lg:px-[34px] py-8">
            <ContentLeft />
            <ContentCenter />
            <ContentRight />
          </div>
        </Reveal>
      </>
      <>
        <Reveal>
          <div className="bg-[#f0f1f2] flex flex-col lg:flex-row">
            <Subdit1 />
            <Subdit2 />
            <Subdit3 />
          </div>
        </Reveal>
      </>
      <div className="bg-[#f0f1f2] px-4 lg:px-8 py-4">
        <ColoumnPPS />
      </div>
      <>
        <Reveal>
          <div className="bg-[#f0f1f2] flex flex-col lg:flex-row">
            <Subdit4 />
            <Subdit5 />
            <ReskrimsusPolda />
          </div>
        </Reveal>
      </>
      <div className="bg-[#f0f1f2] px-4 lg:px-8 py-4">
        <ColoumnPPS />
      </div>
      <Footer />
    </div>
  );
}
