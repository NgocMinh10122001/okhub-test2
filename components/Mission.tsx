"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { dataMission } from "@/data/mock";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Mission() {
  const missionCon = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  const arrRef = [content1, content2, content3, content4];
  const arrRefImg = [img1, img2, img3, img4];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: missionCon.current,
        start: "-20%",
        end: "top",
        markers: false,
        scrub: true,
      },
    });

    tl.to(
      title.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "a"
    ).to(
      text.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );

    arrRef.forEach((ref, index) => {
      const imgRef = arrRefImg[index];
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "135% center",
        markers: false,
        onEnter: () => {
          gsap.to(ref.current, { opacity: 1, duration: 0.5 });
          gsap.to(imgRef.current, { opacity: 1, duration: 0.5 });
        },
        onLeave: () => {
          gsap.to(ref.current, { opacity: 0.5, duration: 0.5 });
          gsap.to(imgRef.current, { opacity: 0, duration: 0.5 });
        },
        onEnterBack: () => {
          gsap.to(ref.current, { opacity: 1, duration: 0.5 });
          gsap.to(imgRef.current, { opacity: 1, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(ref.current, { opacity: 0.5, duration: 0.5 });
          gsap.to(imgRef.current, { opacity: 0, duration: 0.5 });
        },
      });
    });
  });

  return (
    <div
      ref={missionCon}
      className="mission bg-white h-fit min-h-[54rem] relative sm:pt-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-[90px] sm:-top-[50px]"
      >
        <path
          fill="#F9F9F9"
          fillOpacity="1"
          d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="mission-title bg-f9 px-4 md:px-[5.5rem] relative flex flex-col items-center">
        <div
          ref={title}
          className="flex items-center gap-2 justify-center w-full opacity-0 translate-y-[100px] mb-4"
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
            Sứ mệnh
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
          className="font-quicksand text-2xl rainbow-text max-w-full w-full md:w-[52.9375rem] text-center not-italic font-bold leading-120 md:leading-[130%] md:text-[3.2rem] -tracking-[0.06rem] md:-tracking-0.0225 opacity-0 translate-y-[100px]"
        >
          Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành
        </p>
      </div>
      <div className="mission-carousel bg-f9 px-4 md:ps-[14.3rem] md:pe-6.2 gap-16 flex max-md:flex-col-reverse md:justify-between max-md:items-center py-[5.5rem] max-sm:pb-12">
        <div className="mission-carousel-ct flex flex-col">
          {dataMission.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-around roll"
            >
              <div
                ref={arrRef[index]}
                className="flex flex-col gap-[0.625rem] max-w-[25%] opacity-50 roll-text"
              >
                <div className="max-w-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 95 91"
                    fill="none"
                    className="max-w-full w-[4rem] h-[4rem] md:w-20 md:h-20"
                  >
                    <circle
                      cx="25.4503"
                      cy="31.4293"
                      r="24.951"
                      fill="#F4475C"
                    />
                    <path
                      d="M83.6819 75.2028L83.6816 75.2031L67.3376 87.4584C65.5179 88.8705 63.3308 89.5792 61.1395 89.5792C58.9484 89.5792 56.745 88.8679 54.9141 87.4419L38.5895 75.2031L38.5891 75.2028C37.1038 74.0876 35.2599 73.4744 33.4036 73.4744H30.2745C29.1195 73.4744 28.1826 72.5375 28.1826 71.3826C28.1826 70.2277 29.1196 69.2907 30.2745 69.2907H33.4063C36.166 69.2907 38.8949 70.1992 41.0995 71.8533C41.0996 71.8534 41.0997 71.8534 41.0997 71.8535L57.4485 84.1124L57.4543 84.1167L57.46 84.1211C59.6308 85.8149 62.641 85.8075 64.7967 84.1359L64.8063 84.1285L64.8063 84.1285L81.1741 71.8534L81.1745 71.853C81.47 71.6318 81.7744 71.4247 82.0866 71.2313L63.9843 57.6577L60.9312 60.5803C59.5445 61.9639 57.6543 62.7397 55.6863 62.7397C53.1345 62.7397 50.901 61.4061 49.6057 59.6075L83.6819 75.2028ZM83.6819 75.2028C85.1672 74.0876 87.0111 73.4744 88.8674 73.4744H91.9992C93.1541 73.4744 94.0911 72.5375 94.0911 71.3826C94.0911 70.2277 93.1541 69.2907 91.9992 69.2907H88.8674C88.1439 69.2907 87.4239 69.3547 86.7166 69.4767L67.0469 54.7251M83.6819 75.2028L67.0469 54.7251M50.6233 49.7933L50.6313 49.7857L58.1706 42.687L56.1235 40.8227C56.1234 40.8226 56.1233 40.8225 56.1232 40.8224C53.501 38.4366 49.3692 38.0043 46.4013 39.4919L46.4008 39.4922L40.1881 42.5999L40.1879 42.6C38.4144 43.4867 36.4317 43.9539 34.4503 43.9539H30.2745C29.1195 43.9539 28.1826 43.017 28.1826 41.862C28.1826 40.7071 29.1195 39.7702 30.2745 39.7702H34.4503C35.7828 39.7702 37.1226 39.4539 38.3149 38.8591C38.3151 38.859 38.3152 38.8589 38.3154 38.8588L44.5263 35.752C44.5265 35.7519 44.5267 35.7518 44.527 35.7517C46.2881 34.867 48.2631 34.4028 50.2384 34.4028C53.5216 34.4028 56.5792 35.5841 58.9389 37.7298L58.9397 37.7305L61.2226 39.8118L63.2796 37.8755L63.2797 37.8754C67.1022 34.2784 73.072 33.41 77.7441 35.7517L83.9556 38.8588C83.9558 38.8589 83.9559 38.859 83.9561 38.8591C85.1484 39.4539 86.4882 39.7702 87.8207 39.7702H91.9965C93.1515 39.7702 94.0884 40.7071 94.0884 41.862C94.0884 43.017 93.1515 43.9539 91.9965 43.9539H87.8207C85.8421 43.9539 83.8567 43.4868 82.0831 42.6L82.0829 42.5999L75.8702 39.4922L75.8695 39.4918C72.7377 37.921 68.7057 38.5096 66.1464 40.9211L66.1461 40.9213L53.5334 52.7966C52.2956 54.0414 52.116 55.9369 52.9989 57.163C53.5897 57.9818 54.4428 58.4656 55.4138 58.5448C56.3732 58.6144 57.3203 58.2747 57.9971 57.5957L58.0033 57.5895L58.0097 57.5834L69.1865 46.8842C70.0206 46.0836 71.3471 46.1142 72.1456 46.9503L72.1457 46.9503C72.94 47.7823 72.9162 49.1076 72.0785 49.9078L72.0789 49.9074L71.5603 49.3656L72.0783 49.908L50.6233 49.7933ZM50.6233 49.7933L50.6154 49.8011M50.6233 49.7933L50.6154 49.8011M67.0469 54.7251L66.4387 54.269L67.0469 54.7251ZM50.6154 49.8011C47.957 52.4567 47.486 56.6646 49.6056 59.6074L50.6154 49.8011Z"
                      fill="#2A2B6B"
                      stroke="#2A2B6B"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="font-quicksand w-full text-cus-blue text-xl tracking-0.01 md:text-1.625 not-italic leading-130 font-bold md:-tracking-0.065 uppercase">
                  {item.title}
                </p>
                <p className="font-inter w-full text-cus-black text-0.875 md:text-lg not-italic leading-150 font-normal tracking-0.00875 md:-tracking-0.0225">
                  {item.content}
                </p>
              </div>
              <Image
                ref={arrRefImg[index]}
                src={item.src}
                alt="no-img"
                width={720}
                height={480}
                style={{ objectFit: "cover" }}
                className={`rounded-md overflow-hidden max-w-[65%] w-full h-full opacity-0 roll-img`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
