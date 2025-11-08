import HeroCarousel from "@/features/components/home/hero";
import  OurBusinesses  from "@/features/components/home/OurBusinesses";
import WhatWeDo2 from "@/features/components/home/WhatWeDo2";
import OurValues from "@/features/components/home/OurValues";
import OurWork from "@/features/components/home/OurWork";
import { OurPartners } from "@/features/components/home/OurPartners";
import FAQ from "@/features/components/home/Faq";
import Blog from "@/features/components/home/Blog";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroCarousel />
      <WhatWeDo2 />
      <OurBusinesses />
      <OurValues />
      <OurWork />
      <OurPartners />
      <FAQ />
      <Blog />
    </div>
  );
}
