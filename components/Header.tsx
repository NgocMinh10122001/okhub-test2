"use client";
import React, { useRef } from "react";
import { AlignJustify } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Header() {
  // w-9rem h3rem
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "90% 14%",
        markers: false,
        scrub: true,
      },
    });

    tl.to(logoRef.current, {
      duration: 2,
      width: 144,
      height: 48,
    });
    gsap.to(
      logoRef.current,

      {
        y: 0,
        opacity: 1,
        duration: 0.7,
      }
    );
    gsap.to(
      navigate.current,

      {
        y: 0,
        duration: 0.7,
        opacity: 1,
      }
    );
  });
  return (
    <div
      ref={headerRef}
      className="header px-4 md:px-6.2 pt-8  flex justify-between"
    >
      <div
        ref={logoRef}
        className="header-left max-w-full w-[4.5rem] h-[2.3rem] sm:w-[13.8rem] sm:h-[7.3rem] inline-flex items-end gap-2 transform -translate-y-[200px] opacity-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          viewBox="0 0 104 159"
          fill="none"
          className="max-h-full"
        >
          <path
            d="M26.9555 158.963C26.9555 111.27 23.7894 46.4355 46.932 8.62081C49.711 3.7934 53.7655 3.88279 56.6356 8.7549C75.997 42.0104 77.5004 96.4976 76.4298 158.963H103.308V113.595C103.308 51.0171 77.136 18.298 61.9885 4.55327C59.262 2.03115 55.6646 0.613452 51.9176 0.584439C48.1706 0.555425 44.5508 1.91724 41.7841 4.39683C-2.08673 44.6253 -0.0822243 105.705 0.0544451 158.963H26.9555Z"
            fill="#2F2E79"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          className="max-h-full"
          viewBox="0 0 169 109"
          fill="none"
        >
          <path
            d="M27.7743 108.978V34.4879C27.7743 22.0171 37.455 11.9152 49.4136 11.9152C61.3721 11.9152 70.9846 21.9947 70.9846 34.4432V108.978H98.159V34.4879C98.159 22.0171 107.84 11.9152 119.776 11.9152C131.711 11.9152 141.369 21.9947 141.369 34.4432V108.978H168.521V51.2497C168.749 6.32797 115.197 -17.228 84.5604 16.1169C53.9465 -17.228 0.394847 6.35032 0.645407 51.2497V108.978H27.7743Z"
            fill="#2F2E79"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          className="max-h-full"
          viewBox="0 0 27 108"
          fill="none"
        >
          <path
            d="M26.5678 0.259766H0.737305V107.96H26.5678V0.259766Z"
            fill="#2F2E79"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          className="max-h-full"
          viewBox="0 0 53 111"
          fill="none"
        >
          <path
            d="M21.6892 48.6287C19.7479 48.6406 17.8809 47.8969 16.4975 46.5605C15.1141 45.2241 14.3272 43.4041 14.3091 41.4993V14.4345C14.5825 4.35506 29.8667 4.33271 30.14 14.4345V35.1522H43.5564V20.9158C42.3947 -6.41723 2.05439 -6.41723 0.892703 20.9158V46.1256C0.879331 48.0618 1.41291 49.9639 2.43417 51.6208C3.45543 53.2777 4.92446 54.6246 6.67839 55.5122C4.85005 56.3381 3.31903 57.6871 2.28645 59.3823C1.25387 61.0775 0.768009 63.0395 0.892703 65.0106V89.9299C2.05439 117.285 42.4174 117.285 43.5564 89.9299V61.6582H52.6676V48.6287H21.6892ZM22.236 104.032C20.1496 104.044 18.1436 103.244 16.6576 101.807C15.1717 100.37 14.3272 98.4134 14.3091 96.3664V68.7876C14.318 67.8425 14.5166 66.9084 14.8935 66.0387C15.2704 65.1689 15.8182 64.3806 16.5056 63.7185C17.193 63.0565 18.0066 62.5338 18.8999 62.1803C19.7933 61.8268 20.7488 61.6494 21.712 61.6582H30.14V96.3888C30.122 98.4298 29.2797 100.381 27.7981 101.813C26.3164 103.246 24.3163 104.044 22.236 104.032Z"
            fill="#2F2E79"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          className="max-h-full"
          viewBox="0 0 168 160"
          fill="none"
        >
          <path
            d="M27.116 158.967V34.3711C27.116 28.7401 29.3958 23.3397 33.454 19.358C37.5121 15.3763 43.0162 13.1394 48.7553 13.1394C54.4944 13.1394 59.9985 15.3763 64.0566 19.358C68.1148 23.3397 70.3946 28.7401 70.3946 34.3711V159.012H97.569V34.3711C97.569 28.7401 99.8489 23.3397 103.907 19.358C107.965 15.3763 113.469 13.1394 119.208 13.1394C124.947 13.1394 130.452 15.3763 134.51 19.358C138.568 23.3397 140.848 28.7401 140.848 34.3711V159.012H167.999V50.9989C168.227 6.45705 114.675 -16.8978 84.0615 16.1566C53.4248 -16.9202 -0.104011 6.45705 0.123771 50.9989V158.967H27.116Z"
            fill="#2F2E79"
          />
        </svg>
      </div>
      <div
        ref={navigate}
        className="header-right flex gap-[0.7rem] transform -translate-y-[200px] opacity-0"
      >
        <div className="header-right-lang flex gap-[0.6rem] justify-center items-center w-5.5 h-11 sm:w-6.125 sm:h-3.125 border-[1px] border-solid border-neutrol-b bg-grey-light rounded-1.5625 text-[0.74375rem] sm:text-0.875 font-bold leading-140 tracking-0.00875 text-cus-neutrol">
          <p className="uppercase max-w-full w-2.125 h-2.125 sm:w-2.5 sm:h-2.5 bg-cus-perple rounded-full flex justify-center items-center">
            VN
          </p>
          <p className="uppercase max-w-full w-2.125 h-2.125 sm:w-2.5 sm:h-2.5 rounded-full flex justify-center items-center">
            ENG
          </p>
        </div>
        <div className="header-right-bar max-w-full max-md:text-cus-neutroler max-md:bg-cus-neutrol max-md:rounded-full max-md:w-12 max-md:h-12 flex gap-[0.6rem] justify-center items-center w-32 h-3.125 border-[1px] border-solid border-neutrol-b bg-grey-light rounded-1.5625 text-base font-bold leading-140 tracking-0.01 text-cus-neutrol">
          <p className="uppercase max-md:hidden">Menu</p>
          <AlignJustify size={20} />
        </div>
      </div>
    </div>
  );
}
