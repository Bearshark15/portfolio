import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import BackgroundGrid from "@/components/BackgroundGrid";
import {HeroParallax} from "@/components/ui/HeroParallax";

const inter = Inter({ subsets: ["latin"] });

const products = [
    {
    title: "Potato Reaper",
    link: "/",
    thumbnail: "/PotatoReaper.jpg",
  },
  {
    title: "OverStay",
    link: "/",
    thumbnail: "/OverStay_art_3.png",
  },
];

export default function Home() {
  return (
    <main>
      <Header></Header>
        <HeroParallax products={products}></HeroParallax>
    </main>
  );
}
