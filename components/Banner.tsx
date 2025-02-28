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

{
  /* <div className="bn-v absolute z-10 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1350"
          height="725"
          viewBox="0 0 1350 725"
          fill="none"
        >
          <path
            d="M1257.7 0.990471C1253.74 1.41329 1249.93 2.25892 1246.26 3.10456C920.91 65.9635 808.506 338.822 775.322 452.842C768.261 477.084 741.008 489.205 718.414 478.07C655.434 447.346 529.192 401.681 362.281 419.581C117.987 445.795 0.923828 670.735 0.923828 670.735L20.4109 851.137C20.4109 851.137 104.29 590.399 375.837 561.366C571.979 540.366 702.598 670.594 759.93 744.587C783.229 774.607 820.227 790.251 857.93 786.305C902.976 781.513 935.878 742.191 933.619 696.949C909.754 231.567 1275.35 164.903 1275.35 164.903C1320.68 159.97 1353.58 119.38 1348.64 74.138C1343.69 28.8965 1303.03 -3.94241 1257.7 0.990471Z"
            fill="url(#paint0_linear_15159_3019)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_15159_3019"
              x1="63.4279"
              y1="861.945"
              x2="1154.72"
              y2="125.603"
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
      </div>
      <div className="bn-c absolute z-10 right-0 opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="154"
          height="177"
          viewBox="0 0 154 177"
          fill="none"
        >
          <path
            d="M88.7212 176.583C137.297 176.583 176.675 137.205 176.675 88.6294C176.675 40.054 137.297 0.675781 88.7212 0.675781C40.1457 0.675781 0.767578 40.054 0.767578 88.6294C0.767578 137.205 40.1457 176.583 88.7212 176.583Z"
            fill="#F5485D"
          />
        </svg>
      </div> */
}
