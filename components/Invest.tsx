"use client";

import { investData } from "@/data/mock";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Invest() {
  const investCon = useRef(null);
  const title = useRef(null);
  const textH = useRef(null);
  const textP = useRef(null);
  const imgH = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: investCon.current,
        start: "top center",
        end: "center center",
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
      "a"
    )
      .to(
        textH.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "a"
      )
      .to(
        textP.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "a"
      )
      .to(imgH.current, {
        display: "block",
      });
  });
  return (
    <div
      ref={investCon}
      className="invest relative bg-white w-full min-h-[54rem]  h-fit overflow-hidden"
    >
      <div className="invest-bg   bg-[url(/bg-invest.png)] absolute left-0 top-0 bottom-0 max-w-full w-[63rem] h-[53rem] "></div>
      <div className="invest-serv bg-[url(/invest-s1.png)] max-w-full absolute right-[-10%] top-[-10%] max-md:hidden  lg:w-[600px] lg:h-[600px] xl:w-[778px] xl:h-[778px] rounded-full ">
        {investData.map((item) => (
          <div
            key={item.id}
            className="flex w-full h-full justify-center items-center"
          >
            <Button
              className={`w-[134px] h-[134px] flex justify-center items-center rounded-full shadow-md ${
                item.id === "1"
                  ? `bg-cus-perple ring-[1px]  ring-cus-perple hover:bg-cus-perple`
                  : "bg-cus-neutrol ring-[1px]  ring-cus-neutrol hover:bg-cus-neutrol"
              }   absolute ${
                (item.id === "1" && "top-[20%] left-[-4%]") ||
                (item.id === "2" && "top-[45%] left-[-10%]") ||
                (item.id === "3" && "top-[68%] left-[-1%]") ||
                (item.id === "4" && "top-[85%] left-[16%]") ||
                (item.id === "5" && "top-[91%] left-[42%]")
              }  overflow-hidden   z-10 
            }`}
            >
              <Image
                src={item.url}
                alt="no-img"
                width={83}
                height={60}
                style={{ objectFit: "cover" }}
              />
            </Button>
            {item.id === "1" && (
              <div className="invest-serv-block w-[22.6rem] h-[22.6rem] flex flex-col gap-[1.75rem] items-end relative z-10 ">
                <Image src={item.url} alt="" width={215} height={156} />
                <p className="font-inter text-xl not-italic font-extrabold leading-150 uppercase text-cus-neutrol text-end">
                  {item.title}
                </p>
                <Button className="w-[12.5rem] h-[3.75rem] max-w-full  bg-transparent hover:bg-orange-700 duration-500 ease-in-out rounded-full flex gap-[0.4rem] items-center border-[1px] border-solid border-cus-neutrol">
                  <span className=" max-w-full font-inter text-cus-neutrol text-xs md:text-0.875 not-italic font-semibold leading-140 tracking-0.00875 ">
                    Tìm hiểu thêm
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="!w-2 !h-2 md:!w-3 md:!h-3"
                  >
                    <g clipPath="url(#clip0_15159_2710)">
                      <path
                        d="M6.5 0.824219C6.5 1.45851 7.09585 2.40767 7.6982 3.20481C8.47385 4.23111 9.39954 5.12767 10.4617 5.81219C11.2575 6.32476 12.2238 6.81681 13 6.81681M6.5 12.8242C6.5 12.1899 7.09585 11.2408 7.6982 10.4436C8.47385 9.41739 9.39954 8.52077 10.4617 7.83624C11.2575 7.32367 12.2238 6.83163 13 6.83163M13 6.82422H0"
                        stroke="white"
                        strokeWidth="1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15159_2710">
                        <rect
                          width="13"
                          height="12"
                          fill="white"
                          transform="translate(0 0.824219)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" max-md:hidden  lg:w-[600px] lg:h-[600px] xl:w-[778px] xl:h-[778px] absolute right-[-10%] top-[-10%] rounded-full opacity-60 bg-gradient-to-b from-[#2F2E79] to-[#A61220]"></div>
      <div className=" px-4 md:px-6.2 pt-10 sm:pt-6.2">
        <div className="circle"></div>
        <div className="investment-content flex flex-col gap-4">
          <div
            ref={title}
            className="flex items-center gap-2 font-inter text-0.875 md:text-base font-semibold not-italic leading-150 tracking-0.01  text-cus-blue uppercase opacity-0 transform translate-y-[150px]"
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
            <p>LĨNH VỰC ĐẦU TƯ</p>
          </div>
          <p
            ref={textH}
            className="w-[32rem] max-w-full font-quicksand text-[2rem] not-italic leading-120 font-bold tracking-[-0.08rem] rainbow-text opacity-0 transform translate-y-[150px]"
          >
            Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
            cấp và nâng tầm giáo dục trải nghiệm.
          </p>
          <p
            ref={textP}
            className="w-[30rem] text-cus-black max-w-full font-inter text-lg font-normal leading-150 -tracking-0.0225 opacity-0 transform translate-y-[150px]"
          >
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.{" "}
          </p>
          <div className="banner max-w-full w-[500px] h-[500px] relative  ">
            <svg
              className="section-deco section-deco-1 max-w-full"
              width="520"
              height="500"
              viewBox="0 0 559 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.3"
                cx="278.939"
                cy="278.366"
                rx="278.939"
                ry="278.366"
                transform="matrix(-1 0 0 1 558.062 0.943359)"
                fill="url(#paint0_linear_11728_50391)"
              ></ellipse>
              <defs>
                <linearGradient
                  id="paint0_linear_11728_50391"
                  x1="578.62"
                  y1="-123.48"
                  x2="146.243"
                  y2="450.116"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3E4089"></stop>
                  <stop offset="0.339482" stopColor="#3E4089"></stop>
                  <stop offset="1" stopColor="#3E4089" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <Image
              ref={imgH}
              src="/invest-1.webp"
              alt="Banner"
              fill
              style={{ objectFit: "cover" }}
              className="max-md:object-center hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
