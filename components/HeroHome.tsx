"use client"

import { Button } from './ui/button'
import Link from 'next/link'
import {useEffect, useState} from "react";
import {Heading3, Title} from "@/components/text/Headings";

const images : string[] = [
    "/ballbash/ss_f22b40de80d7f12a1f5b55c820880ecd6a581469.800x600.jpg",
    "/ballbash/ss_bf1d0066fce4bb66b1523be90075b85a19113a52.800x600.jpg",
    "/overstay/Overstay_art_3.jpg",
    "/overstay/Overstay_art_2.jpg",
    "/reon/SS4.png",
    "/reon/SS3.png"
]

export default function HeroHome() {

    const [photo, setPhoto] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            change();
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [photo]);

    const change = () => {
        if (photo === images.length - 1) {
            setPhoto(0);
            return;
        }

        setPhoto((prev) => prev + 1);
    };

    const returnPhotoURL = () => {
        return images[photo];
    };

    return (
        <div className={"relative"} style={{
            backgroundImage: `url(${returnPhotoURL()})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",}}>
            <div className="isolate px-6 pt-14 lg:px-8">
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
            </div>
        </div>
    )
}
