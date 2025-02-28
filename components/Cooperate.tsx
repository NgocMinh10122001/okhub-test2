"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cooperateData } from "@/data/mock";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Cooperate() {
  const [active, setActive] = useState("1");

  const cooperateCon = useRef(null);
  const content = useRef(null);
  const anh = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cooperateCon.current,
        start: "center center",
        end: "65% center",
        markers: false,
        scrub: true,
      },
    });

    tl.to(
      content.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "a"
    ).to(
      anh.current,
      {
        opacity: 1,
        duration: 0.5,
      },
      "a"
    );
  });
  return (
    <div
      ref={cooperateCon}
      className="cooperrate bg-cooperate max-sm:hidden  h-fit pb-20 sm:pb-[10rem] sm:pt-[4rem] relative"
    >
      <div className="flex sm:hidden items-center gap-2 font-inter px-4 text-0.875 md:text-base font-semibold leading-150 tracking-0.01 text-cus-neutrol opacity-70 uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="7"
          viewBox="0 0 6 7"
          fill="none"
        >
          <circle cx="3" cy="3.5" r="3" fill="white" />
        </svg>
        <p className="text-cus-neutrol ">HỢP TÁC VỮNG BỀN</p>
      </div>

      <div
        ref={anh}
        className="  max-w-[40%] overflow-hidden max-sm:hidden flex responsive-image opacity-0"
      >
        {cooperateData.map((item) => (
          <Image
            key={item.id}
            ref={anh}
            src={`${item.urlAvt}`}
            alt=""
            width={650}
            height={1150}
            className={`${
              item.id === active ? " opacity-100" : "opacity-0"
            } cooperrate-avt   w-fit h-fit transform duration-300 absolute bottom-0 right-[4%] z-10`}
            onClick={() => setActive(item.id)}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="210"
        height="209"
        viewBox="0 0 210 209"
        fill="none"
        className="absolute max-sm:left-[130px] max-sm:-top-12 sm:top-[200px] max-w-[8%] sm:right-[200px] sm:max-w-[20%] sm:max-h-[20%] -z-10"
      >
        <path
          d="M105.043 208.082C163.009 208.082 210 161.613 210 104.291C210 46.9688 163.009 0.5 105.043 0.5C47.0769 0.5 0.0859375 46.9688 0.0859375 104.291C0.0859375 161.613 47.0769 208.082 105.043 208.082Z"
          fill="white"
        />
        <path
          d="M105.043 208.082C163.009 208.082 210 161.613 210 104.291C210 46.9688 163.009 0.5 105.043 0.5C47.0769 0.5 0.0859375 46.9688 0.0859375 104.291C0.0859375 161.613 47.0769 208.082 105.043 208.082Z"
          fill="url(#paint0_linear_15312_1345)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_15312_1345"
            x1="-342"
            y1="423"
            x2="262.525"
            y2="280.071"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.04" stopColor="#292664" stopOpacity="0" />
            <stop offset="0.24" stopColor="#6B8ED2" stopOpacity="0.24" />
            <stop offset="0.43" stopColor="#5CBAFF" />
            <stop offset="0.679776" stopColor="#E759AE" />
            <stop offset="1" stopColor="#ED1B2F" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1140"
        height="557"
        viewBox="0 0 1140 557"
        fill="none"
        className="absolute  bottom-0 -left-[5%] min-[1600px]:left-0 max-w-full"
      >
        <path
          opacity="0.2"
          d="M1047 0.789885C1042.99 1.21826 1039.13 2.075 1035.41 2.93175C705.864 66.6168 592.009 343.061 558.396 458.579C551.244 483.14 523.639 495.42 500.753 484.139C436.961 453.011 309.089 406.746 140.023 424.881C-107.425 451.44 -226 679.335 -226 679.335L-206.261 862.108C-206.261 862.108 -121.299 597.944 153.754 568.529C352.428 547.253 484.734 679.192 542.805 754.158C566.406 784.573 603.881 800.422 642.071 796.424C687.698 791.569 721.025 751.73 718.737 705.894C694.564 234.397 1064.88 166.856 1064.88 166.856C1110.79 161.859 1144.12 120.735 1139.11 74.8987C1134.11 29.0626 1092.91 -4.20782 1047 0.789885Z"
          fill="url(#paint0_linear_15312_1346)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_15312_1346"
            x1="-162.689"
            y1="873.058"
            x2="1226.1"
            y2="183.206"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.04" stopColor="#292664" stopOpacity="0" />
            <stop offset="0.24" stopColor="#6B8ED2" stopOpacity="0.24" />
            <stop offset="0.43" stopColor="#5CBAFF" />
            <stop offset="0.75" stopColor="#E759AE" />
            <stop offset="0.99" stopColor="#F4475C" />
          </linearGradient>
        </defs>
      </svg>
      <div
        ref={content}
        className="character max-sm:flex  max-sm:flex-col-reverse gap-4 opacity-0 transform translate-y-[100px]"
      >
        <div className="cooperate-inf flex  overflow-hidden w-full px-4 sm:ps-44">
          {cooperateData.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === active ? "opacity-100" : "opacity-0"
              } flex flex-col gap-6 sm:gap-20 max-w-full  transform duration-300  ${
                (item.id === "2" && " -translate-x-[162.8%] ") ||
                (item.id === "3" && "-translate-x-[164.5%]")
              }`}
            >
              <div className="cooperate-inf-top flex flex-col gap-[1.44rem]">
                <div className="max-sm:hidden flex items-center gap-2 font-inter text-0.875 md:text-base font-semibold leading-150 tracking-0.01 text-cus-neutrol opacity-70 uppercase">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="7"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <circle cx="3" cy="3.5" r="3" fill="white" />
                  </svg>
                  <p className="text-cus-neutrol ">HỢP TÁC VỮNG BỀN</p>
                </div>
                <p className="text-cus-neutrol font-inter text-0.875 sm:text-1.75 font-normal sm:font-semibold leading-150 sm:leading-140 tracking-0.00875 sm:tracking-0.01">
                  {item.detail}
                </p>
              </div>
              <div className="cooperate-inf-bottom flex flex-col gap-2">
                <h4 className="text-cus-neutrol font-inter text-xs font-bold sm:text-1.375 sm:font-semibold leading-130 -tracking-0.0225">
                  {item.name}
                </h4>
                <div>
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 20 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.30435"
                      cy="2.99966"
                      r="1.30435"
                      fill="#8DC63F"
                    ></circle>
                    <circle
                      cx="8.56543"
                      cy="3"
                      r="1.95605"
                      fill="#35AA94"
                    ></circle>
                    <circle
                      cx="17.0674"
                      cy="3"
                      r="2.54395"
                      fill="#0088CB"
                    ></circle>
                  </svg>
                  <span className="font-inter text-cus-neutrol  text-[0.625rem] max-sm:opacity-50 sm:text-0.875 tracking-0.00875 font-semibold leading-150">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cooperate-thumb mt-4 px-4 sm:px-44 flex gap-8 items-center relative z-20">
          {cooperateData.map((item) => (
            <Image
              key={item.id}
              src={`${item.urlThumb}`}
              alt=""
              width={70}
              height={70}
              className={`${
                item.id === active
                  ? "ring-1 ring-cus-neutrol shadow-md scale-110"
                  : ""
              } cursor-pointer rounded-full  duration-300 `}
              onClick={() => setActive(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
