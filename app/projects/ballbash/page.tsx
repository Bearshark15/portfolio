"use client";

import {NextUIProvider} from "@nextui-org/react";
import {Hero, HeroBackground, HeroContent, HeroDescription, HeroTitle} from "@/components/Hero";
import Carousel from "@/components/Carousel";

const images : string[] = [
    "/ballbash/ss_f22b40de80d7f12a1f5b55c820880ecd6a581469.800x600.jpg",
    "/ballbash/ss_bf1d0066fce4bb66b1523be90075b85a19113a52.800x600.jpg",
    "/bhor/bhor.png",
    "/bhor/eevvCc.png",
    "/overstay/Overstay_art_3.jpg",
    "/overstay/Overstay_art_2.jpg",
    "/reon/SS4.png",
    "/reon/SS3.png"
]

export default function BallBash() {
    return (
        <NextUIProvider>
            <main>
                <Hero className={"h-96"}>
                    <HeroContent>
                        <HeroTitle>
                            Ball Bash
                        </HeroTitle>
                        <HeroDescription>
                            A simple game where you have to hit the ball with your paddle.
                        </HeroDescription>
                    </HeroContent>
                    <HeroBackground>
                        <Carousel images={images}/>
                    </HeroBackground>
                </Hero>
                <div className={"mx-auto w-full h-full"} style={{backgroundImage: `url(${images[0]})`}}/>
            </main>
        </NextUIProvider>
    );
}