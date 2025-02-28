"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AfterBanner() {
  const handRef = useRef(null);
  const afterBanner = useRef(null);
  const textBox = useRef(null);
  const bg = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: afterBanner.current,
        start: "top bottom",
        end: "70% bottom",
        markers: false,
        scrub: true,
      },
    });
    tl.to(
      handRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      },
      "s"
    ).to(
      textBox.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "s"
    );
  });

  return (
    <div
      ref={afterBanner}
      className="after-banner  w-full  h-[66rem] sm:h-[66.2rem] px-4 md:px-6.2  pt-10 sm:pt-40 max-md:flex max-md:justify-center  relative  z-20 overflow-hidden"
    >
      <Image
        src="/afterbanner-bg.webp"
        alt="intro"
        fill
        style={{ objectFit: "cover" }}
        className=" absolute top-0 left-0 right-0 bottom-0 -z-20 "
      />
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L120,234.7C240,245,480,267,720,261.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className=" absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1599 320"
          fill="none"
        >
          <g style={{ mixBlendMode: "darken" }} opacity="0.8">
            <path
              d="M1623 0.675781C1623 125.984 518.667 194.902 -14 211.197V267.176C808.5 352.176 1268.5 325.482 1623 242.176V0.675781Z"
              fill="url(#paint0_linear_15159_3080)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_15159_3080"
              x1="184.702"
              y1="159.965"
              x2="1468.36"
              y2="365.084"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#328AE2" />
              <stop offset="1" stopColor="#FF0D39" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Image
        ref={handRef}
        src="/test4.png"
        alt="intro"
        fill
        style={{ objectFit: "cover" }}
        className=" absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-0 scale-125"
      />
      <Image
        src="/test.png"
        alt="intro"
        fill
        style={{
          objectFit: "cover",
        }}
        className="sm:hidden absolute top-0 left-0 right-0 bottom-0 -z-10 becong"
      />
      <div
        ref={textBox}
        className="history-box max-w-full w-[38.625rem] flex flex-col gap-6 md:gap-10 opacity-0 transform translate-y-[150px]"
      >
        <div className="history-box-title flex flex-col gap-4">
          <div className="flex items-center gap-2 font-inter text-0.875 md:text-base font-semibold leading-150 tracking-0.01 text-cus-neutrol uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <circle cx="3" cy="3.5" r="3" fill="white" />
            </svg>
            <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM</p>
          </div>
          <h1 className="font-quicksand text-2.75 md:text-[4rem] uppercase font-bold leading-120 tracking-[-0.16175rem] text-white">
            Khởi nguồn từ Tình bằng hữu
          </h1>
        </div>
        <div className="history-box-content flex flex-col gap-6 md:gap-8 text-cus-neutrol font-inter text-0.875 md:text-lg font-medium leading-150 [text-shadow:_0_4px_16.1px_rgba(47, 46, 121, 0.19)] -tracking-0.0225">
          <p className="max-w-full w-[32rem]">
            Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng
            chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không
            ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
          </p>
          <p>
            Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó và
            kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM,
            được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách
            và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin
            tưởng.
          </p>
        </div>
        <Button className="sm:mt-[5rem] py-0.875 px-6 md:py-1.125 md:px-2.125 w-fit max-w-full h-fit bg-cus-perple rounded-full flex gap-[0.4rem] items-center">
          <span className="uppercase max-w-full font-inter text-xs md:text-base not-italic font-bold leading-140">
            Hành trình của Ami&M
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 13"
            fill="none"
            className="!w-3 !h-3 md:!w-4 md:!h-4"
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
    </div>
  );
}

//  <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//         className="absolute bottom-[-5%] left-0 right-0"
//       >
//         <path
//           fill="#ffffff"
//           fill-opacity="1"
//           d="M0,224L120,234.7C240,245,480,267,720,261.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
//         ></path>
//       </svg>
//       <div className="rainb absolute bottom-[-10] left-0 right-0">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="100%"
//           height="19rem"
//           viewBox="0 0 1599 319"
//           fill="none"
//         >
//           <g style={{ mixBlendMode: "darken" }} opacity="0.8">
//             <path
//               d="M1623 0C1623 125.308 518.667 194.226 -14 210.522V266.5C808.5 351.5 1268.5 324.806 1623 241.5V0Z"
//               fill="url(#paint0_linear_15159_2682)"
//             />
//           </g>
//           <defs>
//             <linearGradient
//               id="paint0_linear_15159_2682"
//               x1="184.702"
//               y1="159.29"
//               x2="1468.36"
//               y2="364.408"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#328AE2" />
//               <stop offset="1" stop-color="#FF0D39" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
