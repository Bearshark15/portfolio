"use client"

import { Button } from './ui/button'
import Link from 'next/link'
import {Heading3, Title} from "@/components/text/Headings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images : string[] = [
    "/ballbash/ss_f22b40de80d7f12a1f5b55c820880ecd6a581469.800x600.jpg",
    "/ballbash/ss_bf1d0066fce4bb66b1523be90075b85a19113a52.800x600.jpg",
    "/overstay/Overstay_art_3.jpg",
    "/overstay/Overstay_art_2.jpg",
    "/reon/SS4.png",
    "/reon/SS3.png"
]

export default function HeroHome() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

    return (
        <section className={"relative h-[35rem]"}>
            <section className={"embla h-full w-full"} ref={emblaRef}>
                <div className={"embla__container w-full h-full"}>
                    {images.map((image, index) => (
                      <div key={index} className={"embla__slide w-full h-full"}
                      style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}/>
                    ))}
                </div>
            </section>
            <section className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12"}>
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                    <div className={"text-center bg-white dark:bg-black bg-opacity-85 py-10 border-2"}>
                    <Title className="tracking-tight sm:text-5xl">
                            Jacob Bekele Jansson
                        </Title>
                        <Heading3 className="tracking-tight sm:text-3xl mt-3">
                            Software Developer, Game Programmer <br /> Based in Stockholm, Sweden
                        </Heading3>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button variant={"outline"}>
                                <Link href="#portfolio">View Portfolio</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
