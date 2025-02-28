"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Friendly() {
  const text = useRef<HTMLParagraphElement>(null); // Ref cho phần tử trigger
  const textSub = useRef<HTMLSpanElement>(null); // Ref cho phần tử chứa văn bản

  useGSAP(() => {
    if (textSub.current) {
      const chars = textSub.current.querySelectorAll(".char");

      gsap.set(chars, { opacity: 0.25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: "bottom center",
          end: "250% center",
          scrub: true,
          markers: false,
        },
      });

      tl.to(chars, {
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  return (
    <div className="friendly min-h-[25rem] sm:min-h-[56rem] relative flex justify-center items-end overflow-hidden">
      <Image
        src={"/friend.webp"}
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[28rem] blur w-[1700px] translate-y-[20px]"></div>
      <p
        ref={text}
        className="relative z-10 text-cus-neutrol max-sm:px-[2.75rem] sm:px-44 font-quicksand text-xl sm:text-2.5 not-italic font-bold leading-[125%] sm:leading-150 tracking-0.01 sm:-tracking-0.0225 text-center w-[80rem] pb-[5rem]"
      >
        “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên tinh
        thần của một tổ chức <br className="max-sm:hidden" />{" "}
        <span ref={textSub}>
          {/* Tách từng chữ cái và thêm class "char" */}
          {"không ngừng học tập để kiến tạo giá trị."
            .split("")
            .map((char, index) => (
              <span key={index} className="char ">
                {char}
              </span>
            ))}
        </span>
        ”
      </p>
    </div>
  );
}
