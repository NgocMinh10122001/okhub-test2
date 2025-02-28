"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { logos } from "@/data/mock";

export function Inf() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1 }), // Tốc độ cuộn (1 là chậm, 2 là nhanh hơn, v.v.)
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla Carousel initialized");
    }
  }, [emblaApi]);

  return (
    <div className="inf flex justify-center relative bg-[#f1f5f8] ">
      <svg
        className="section-deco section-deco-1 absolute max-sm:hidden -top-[80px] -left-[94px] sm:-left-[20px] "
        xmlns="http://www.w3.org/2000/svg"
        width="1599"
        height="241"
        viewBox="0 0 1599 241"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M538.598 39.5C529.708 16.0267 507.225 0.5 482.124 0.5H218.052C193.004 0.5 170.586 16.0433 161.802 39.5C153.018 62.9567 130.6 78.5 105.552 78.5H-100C-103.714 78.5 -105.571 78.5 -107.141 78.5641C-147.2 80.1994 -179.301 112.3 -180.936 152.359C-181 153.929 -181 155.786 -181 159.5C-181 163.214 -181 165.071 -180.936 166.641C-179.301 206.7 -147.2 238.801 -107.141 240.436C-105.571 240.5 -103.714 240.5 -100 240.5H1688C1691.71 240.5 1693.57 240.5 1695.14 240.436C1735.2 238.801 1767.3 206.7 1768.94 166.641C1769 165.071 1769 163.214 1769 159.5C1769 155.786 1769 153.929 1768.94 152.359C1767.3 112.3 1735.2 80.1994 1695.14 78.5641C1693.57 78.5 1691.71 78.5 1688 78.5H595.072C569.972 78.5 547.489 62.9733 538.598 39.5Z"
          fill="#F1F5F8"
        ></path>
      </svg>
      <div className="impress-left sm:max-w-fit  flex flex-col gap-1 absolute  sm:bottom-[100%] left-44 max-sm:hidden">
        <div className="flex items-center gap-2 font-inter text-0.875 md:text-base font-semibold not-italic leading-150 tracking-0.01  text-cus-blue uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
          >
            <circle cx="3" cy="3.5" r="3" fill="#165BB8" />
          </svg>
          <p>LĨNH VỰC ĐẦU TƯ</p>
        </div>
        <h2 className=" font-quicksand text-[2rem] sm:text-1.625 not-italic leading-130 font-bold -tracking-0.065 rainbow-text">
          ĐỒNG HÀNH CÙNG AMI&M
        </h2>
      </div>
      <div className="embla w-full max-w-[100%] overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((_, index) => (
            <div
              key={index}
              className="embla__slide  basis-[25%] sm:basis-[14%] px-[2rem] flex-shrink-0"
            >
              <div className="p-1">
                <Card className="!border-none !bg-transparent !shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center !p-0 relative !border-none !bg-transparent !shadow-none">
                    <Image
                      src={_}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                      className="w-fit h-fit"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
