"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Vision() {
  const visionCon = useRef(null);
  const title = useRef(null);
  const text = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: visionCon.current,
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
      },
    });

    tl.to(
      title.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "s"
    ).to(
      text.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      "s"
    );
  });
  return (
    <div
      ref={visionCon}
      className="vs w-full  min-h-[43rem] sm:min-h-[31rem]  md:px-6.2 relative flex flex-col items-center justify-center "
    >
      <div className="map  max-w-full px-4 md:px-0 w-full h-[45rem] md:w-[62.5rem] md:h-[35rem]  absolute max-sm:top-0 max-sm:left-0 max-sm:bottom-0 max-sm:right-0  sm:left-1/2 transform sm:-translate-x-1/2 ">
        <Image
          src="/map.png"
          alt="map"
          fill
          style={{ objectFit: "cover" }}
          className="max-md:object-center  "
        />
      </div>
      <div
        ref={title}
        className="flex items-center gap-2 justify-center w-full mb-4 opacity-0 translate-y-[200px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="7"
          viewBox="0 0 6 7"
          fill="none"
        >
          <circle cx="3" cy="3.5" r="3" fill="#165BB8" />
        </svg>
        <p className="text-cus-blue text-base uppercase font-inter font-medium not-italic leading-150 tracking-0.01">
          Tầm nhìn
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="7"
          viewBox="0 0 6 7"
          fill="none"
        >
          <circle cx="3" cy="3.5" r="3" fill="#165BB8" />
        </svg>
      </div>
      <p
        ref={text}
        className="font-quicksand text-2xl opacity-0 text-cus-black max-w-full translate-y-[200px] w-[19rem] md:w-[52.9375rem] text-center not-italic font-bold leading-120 md:leading-[130%] md:text-[3.2rem] -tracking-[0.06rem] md:-tracking-0.0225"
      >
        Ami&M xây dựng{" "}
        <span className="rainbow-text">
          hệ sinh thái đa ngành phát triển nhanh và bền vững
        </span>{" "}
        trên hành trình kiến tạo sự thịnh vượng đích thực!
      </p>
    </div>
  );
}
