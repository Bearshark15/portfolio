'use client'

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
    images: string[],
}

const Carousel: React.FC<CarouselProps> = ({ images}) => {
    const [viewportRef] = useEmblaCarousel({
        loop: true,
    }, [Autoplay()]);

    return (
        <div className={"mx-auto w-full h-full"}>
            <div className={"embla"} ref={viewportRef}>
                <div className={"embla__container"}>
                    {images.map((image, index) => (
                        <div key={index} className={"embla__slide flex items-center justify-center"}>
                            <div className={"w-full h-full"} style={{
                                backgroundImage: `url(${image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"}}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;