"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../../../components/common/SectionWrapper";

export default function BrandBanner() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Branding isn't an expense. It's the foundation of everything that follows.";

  useEffect(() => {
    let typingInterval;
    let loopTimeout;

    const startTypingCycle = () => {
      let currentIndex = 0;
      setDisplayedText(""); // Clear text for the new cycle

      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          // Once typing is finished, clear the interval...
          clearInterval(typingInterval);
          // ...and wait exactly 2 seconds before restarting the cycle
          loopTimeout = setTimeout(startTypingCycle, 2000);
        }
      }, 40); // Typing speed
    };

    // Initial 2-second delay before the very first typing starts
    loopTimeout = setTimeout(startTypingCycle, 2000);

    // Cleanup to prevent memory leaks
    return () => {
      clearInterval(typingInterval);
      clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#2d2fd3_0%,#2576cf_48%,#13c6a7_100%)]">
      <style>
        {`
          @keyframes drawEllipseLoop {
            0% { stroke-dashoffset: 100; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
          }

          .animate-draw-ellipse-loop {
            stroke-dasharray: 100;
            animation: drawEllipseLoop 3s linear infinite;
          }

          .brand-banner-copy,
          .brand-banner-copy h1,
          .brand-banner-copy p,
          .brand-banner-copy span {
            color: #ffffff !important;
          }

          .brand-banner-typed {
            min-height: 3.2em; /* Keeps the container height stable to avoid layout jumping */
          }

          .watermark-glop {
            mix-blend-mode: soft-light;
            opacity: 0.50;
          }

        `}
      </style>

      <SectionWrapper className="relative z-10 section-spacing py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14">
        <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(280px,0.96fr)] lg:gap-8 xl:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] xl:gap-10 2xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] 2xl:gap-14">
          <div className="brand-banner-copy mx-auto w-full max-w-[34rem] text-center sm:max-w-[40rem] md:max-w-[46rem] lg:mx-0 lg:max-w-[38rem] lg:text-left xl:max-w-[42rem] 2xl:max-w-[48rem]">
            <h1
              className="font-[var(--font-heading)] text-[length:var(--fs-section-title)] font-bold leading-[1.08] tracking-[-0.04em] text-white"
            >
              <span className="block">
                Why Most{" "}
                <span className="relative inline-block whitespace-nowrap text-white">
                  <span className="relative z-10 text-white">
                    Brands Fail
                  </span>

                  <svg
                    className="absolute -bottom-1 -left-3 -right-3 -top-1 z-0 h-[122%] w-[114%] text-[#FBBF24] sm:-bottom-2 sm:-left-4 sm:-right-4 sm:h-[130%] sm:w-[120%]"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 15 24 C 5 12 18 3 50 3 C 82 3 96 14 96 22 C 96 32 75 38 50 38 C 22 38 7 30 14 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="100"
                      className="animate-draw-ellipse-loop"
                    />
                  </svg>
                </span>{" "}
                -
              </span>
              <span className="block">And How We Fix It</span>
            </h1>

            <p
              className="mx-auto mt-4 max-w-[42ch] text-[length:var(--fs-hero-subtitle)] font-normal leading-[1.65] text-white sm:mt-5 sm:max-w-[50ch] md:max-w-[56ch] lg:mx-0 lg:max-w-[54ch] xl:max-w-[58ch] 2xl:max-w-[60ch] pb-2 sm:pb-3 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5 pt-1 sm:pt-2 md:pt-3 lg:pt-2 xl:pt-3 2xl:pt-4"
            >
              Most businesses invest in marketing... but ignore branding.{' '}
              <br className="hidden md:block" />
              They run ads, post content, build websites yet struggle to stand out.
            </p>

            {/* FIXED TYPED TEXT SECTION */}
            <p
              className="brand-banner-typed mx-auto lg:mx-0 mt-8 sm:mt-10 md:mt-12 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] text-center lg:text-left font-bold leading-[1.45] text-white text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[28px] pt-2 sm:pt-3 md:pt-4 lg:pt-3 xl:pt-4 2xl:pt-5"
            >
              {displayedText}
              <span className="inline-block ml-[2px] animate-pulse font-normal">|</span>
            </p>

          </div>

          <div className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center sm:max-w-[27rem] md:max-w-[32rem] lg:mx-0 lg:max-w-[28rem] lg:justify-end xl:max-w-[34rem] 2xl:max-w-[40rem]">
           <div
              aria-hidden="true"
              className="watermark-glop pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[92px] font-black tracking-[0.05em] text-transparent [-webkit-text-stroke:1.2px_rgba(255,255,255,0.75)] [text-shadow:0_0_28px_rgba(255,255,255,0.25)] sm:text-[116px] md:text-[142px] lg:text-[140px] xl:text-[190px] 2xl:text-[220px]"
            >
              BRAND
            </div>
            <img
              src="/images/service/service-banner.webp"
              alt="Ant standing on an elephant to represent brand pressure and positioning"
              className="relative z-10 max-h-[240px] w-full object-contain drop-shadow-[0_24px_35px_rgba(15,23,42,0.25)] sm:max-h-[280px] md:max-h-[320px] lg:max-h-[300px] xl:max-h-[340px] 2xl:max-h-[400px]"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}