"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Banner() {
  const titleRef = useRef(null);
  const banner = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner.current,
        start: "top ",
        markers: false,
        scrub: true,
      },
    });

    tl.to(banner.current, {
      y: 350,
    });

    gsap.to(titleRef.current, {
      duration: 0.5,
      opacity: 1,
      y: 0,
    });
  });
  return (
    <div
      ref={banner}
      className="banner  w-full min-h-[42rem] sm:min-h-[54rem] relative  "
    >
      <Image
        src="/test5.jpg"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        className="max-md:object-center"
      />

      <h1
        ref={titleRef}
        className="font-quicksand absolute bottom-[10%] [text-shadow:_0_1px_2px_#333] left-0 z-10 px-4 sm:px-6.2  text-2.75 md:text-[4rem] uppercase font-bold leading-120 tracking-[-0.16175rem] text-white transform translate-y-[200px] opacity-0"
      >
        Đồng hành <br /> khởi thịnh vượng!
      </h1>
    </div>
  );
}
