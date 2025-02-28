"use client";

import { impressData } from "@/data/mock";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Impress() {
  const impressCon = useRef(null);
  const impressL = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);

  const arrRef = [content1, content2, content3, content4, content5];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: impressCon.current,
        start: "top ",
        markers: false,
        scrub: true,
      },
    });
    tl.to(
      impressL.current,
      {
        y: 950,
        duration: 0.5,
      },
      "a"
    );
    // arrRef.forEach((ref) => {
    //   ScrollTrigger.create({
    //     trigger: ref.current,
    //     start: "bottom ",
    //     markers: true,
    //     onEnter: () => {
    //       gsap.to(ref.current, {
    //         color: "#FF0D39",
    //         duration: 0.5,
    //       });
    //     },
    //     onLeave: () => {
    //       gsap.to(ref.current, { color: "#031938", duration: 0.5 });
    //     },
    //     onEnterBack: () => {
    //       gsap.to(ref.current, { color: "#FF0D39", duration: 0.5 });
    //     },
    //     onLeaveBack: () => {
    //       gsap.to(ref.current, { color: "#031938", duration: 0.5 });
    //     },
    //   });
    // });
  });

  return (
    <div className="impress bg-white relative w-full min-h-[54rem] h-fit overflow-hidden ">
      <div className="px-4 md:px-6.2 w-full h-fit max-sm:pb-10 pb-32 pt-10 sm:pt-6.2 flex max-sm:flex-col sm:justify-between">
        <div
          ref={impressL}
          className="impress-left max-sm:hidden sm:max-w-[50%] w-full flex flex-col gap-4"
        >
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
          <h1 className="w-[38.5rem] max-w-full font-quicksand text-[2rem] sm:text-[5.5rem] not-italic leading-120 font-bold tracking-[-0.08rem] rainbow-text">
            Dấu ấn Ami&M
          </h1>
          <p className="w-[30rem] text-cus-black max-w-full font-inter text-0.875 sm:text-lg font-normal leading-150 tracking-0.00875 sm:-tracking-0.0225">
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.{" "}
          </p>
          <div className="impress-left-mb sm:hidden sm:max-w-[50%] w-full flex flex-col gap-4">
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
            <h1 className="w-[38.5rem] max-w-full font-quicksand text-[2rem] sm:text-[5.5rem] not-italic leading-120 font-bold tracking-[-0.08rem] rainbow-text">
              Dấu ấn Ami&M
            </h1>
            <p className="w-[30rem] text-cus-black max-w-full font-inter text-0.875 sm:text-lg font-normal leading-150 tracking-0.00875 sm:-tracking-0.0225">
              Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
              vượng đích thực cho những Người đồng hành và tạo lập di sản xứng
              tầm cho thế hệ tương lai.{" "}
            </p>
          </div>
        </div>
        <div ref={impressCon} className="impress-right sm:max-w-[50%] w-full">
          {impressData.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center  max-sm:justify-start gap-4 sm:gap-[3.88rem] h-32 sm:h-[15rem] sm:border-l-[1px] sm:border-b-[1px] sm:border-solid sm:border-[#EDEDED] sm:ps-12 "
            >
              <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-full  relative flex justify-center items-center overflow-hidden shadow-lg">
                <div className="absolute w-20 h-20 sm:w-36 sm:h-36 rounded-full top-0 left-0 right-0 bg-[#FBFBFB] "></div>
                <Image
                  src={item.icon}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover", width: "auto", height: "auto" }}
                  className="relative z-10 "
                ></Image>
              </div>

              <div className="">
                <p
                  ref={arrRef[index]}
                  className="font-inter  text-[2rem] sm:text-[3rem] not-italic font-bold tracking-0.0225 sm:font-extrabold leading-130 sm:-tracking-0.0425  rainbow-text"
                >
                  {item.sale}
                </p>
                <p className="text-0.875 sm:text-xl not-italic font-normal tracking-0.00875 sm:font-semibold leading-140 sm:tracking-0.01 font-inter text-cus-black">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
