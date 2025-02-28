"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const MyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1 }), // Tốc độ cuộn (1 là chậm, 2 là nhanh hơn, v.v.)
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla Carousel initialized");
    }
  }, [emblaApi]);

  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <Carousel>
        <CarouselContent ref={emblaRef}>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="p-6 border rounded-lg text-center">
                {slide.content}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
