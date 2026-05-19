import React from 'react'
import { Link } from 'react-router-dom'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

function FeatureBullet() {
  return (
    <span className="mt-[2px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#06BA9D_0%,#059f87_100%)] shadow-[0_4px_10px_rgba(6,186,157,0.22)] sm:mt-[4px] sm:h-4 sm:w-4">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[9px] w-[9px] text-white sm:h-[10px] sm:w-[10px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5L9.2 16.7L18.5 7.5" />
      </svg>
    </span>
  )
}

export default function WhatSetsUsApartSection() {
  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent pt-8 sm:pt-10 lg:pt-16">
      
      <style>
        {`
          @keyframes drawFullCircleLoop {
            0% { stroke-dashoffset: 100; opacity: 0; }
            5% { opacity: 1; }
            50% { stroke-dashoffset: 0; opacity: 1; }
            85% { stroke-dashoffset: 0; opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }

          .animate-draw-full-circle {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: drawFullCircleLoop 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}
      </style>
      
      <div className="mx-auto max-w-[1120px]">
        
        {/* === SECTION HEADING === */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            Why Growingen
          </p>
          <h2 className="text-[2.15rem] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[3.15rem] lg:text-[60px]">
            What Sets Us{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              Apart
            </CurvedUnderlineText>
          </h2>
        </div>

        {/* === CONTENT GRID === 
            'items-start' perfectly aligns the left images and right card to the top
        */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-14">
          
          {/* LEFT SIDE: Image Collage */}
          <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[500px] lg:mx-0 lg:max-w-none">
            
            {/* 1. Main Large Image (Team) - Flush to the top */}
            <div className="hero-float absolute left-0 top-0 z-10 h-[72%] w-[62%] overflow-hidden rounded-[24px] shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:z-40">
              <img
                src="/images/service/service-set-1.webp" /* <-- PLACEHOLDER */
                alt="Growingen Team"
                className="h-full w-full object-cover"
                style={{ backgroundColor: '#e2e8f0' }}
              />
            </div>

            {/* 2. Middle Right Image (Solo Developer) */}
            <div 
              className="hero-float absolute right-[0%] top-[25%] z-20 h-[35%] w-[32%] overflow-hidden rounded-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out hover:scale-105 hover:z-40"
              style={{ animationDelay: '-2s' }}
            >
              <img
                src="/images/service/service-set-2.webp"  /* <-- PLACEHOLDER */
                alt="Developer working"
                className="h-full w-full object-cover"
                style={{ backgroundColor: '#cbd5e1' }}
              />
            </div>

            {/* 3. Bottom Overlap Image (Team Meeting) */}
            <div 
              className="hero-float absolute bottom-[10%] left-[50%] z-30 h-[28%] w-[55%] overflow-hidden rounded-[20px]  shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out hover:scale-105 hover:z-40"
              style={{ animationDelay: '-4s' }}
            >
              <img
                src="/images/service/service-set-3.webp" /* <-- PLACEHOLDER */
                alt="Team strategy meeting"
                className="h-full w-full object-cover"
                style={{ backgroundColor: '#94a3b8' }}
              />
            </div>

            {/* 4. Spinning Circular Badge Element */}
            <div className="absolute right-[12%] top-[-2%] z-20 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px]">
              <div className="relative h-full w-full animate-[spin_12s_linear_infinite] rounded-full bg-white shadow-md">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <path id="circleTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text fontSize="10.5" fontWeight="bold" fill="#111827" letterSpacing="2.2">
                    <textPath href="#circleTextPath" startOffset="0%">
                      GROWINGEN • GROWINGEN • GROWINGEN •
                    </textPath>
                  </text>
                  <circle cx="50" cy="50" r="18" fill="#F45328" />
                  <path d="M 45 55 L 55 45 M 48 45 L 55 45 L 55 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Content Card */}
          {/* UPDATED: max-w-[400px] lg:w-[400px] */}
          <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:w-[400px]">
            {/* 
              - Fixed Height: h-[300px] 
              - Custom Border Radius: Bottom right gets a massive curve (rounded-br-[70px])
            */}
            <div className="relative flex h-[300px] flex-col gap-4 rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[70px] bg-white px-7 pb-10 pt-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:px-8 sm:pt-9">
              
              {/* Card Title with Full-Circle SVG Animation */}
              {/* UPDATED: text-[28px] to enforce exactly 28px size */}
              <h3 className="mb-5 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111827]">
                Why Brands <br /> Trust{' '}
                <span className="relative inline-block whitespace-nowrap z-10">
                  <span className="relative z-10">Growingen</span>
                  
                  {/* ORGANIC FULL-CIRCLE SVG PATH */}
                  <svg
                    className="absolute -bottom-2 -left-3 -right-3 -top-1 z-0 h-[130%] w-[120%] text-[#F45328]"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 20,20 C 20,5 90,5 90,20 C 90,38 15,35 25,18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="100"
                      className="animate-draw-full-circle"
                    />
                  </svg>
                </span>
              </h3>

              {/* Bullet List with checkmarks */}
              <ul className="flex flex-col gap-[14px]">
                {[
                  'Strategy-first approach (not just execution)',
                  'AI + Tech + Marketing under one ecosystem',
                  'Focus on measurable business outcomes',
                  'Long-term partnership mindset',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FeatureBullet />
                    <span className="text-[14.5px] font-medium leading-[1.3] text-[#4b5563]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Floating Center Button */}
              <div className="absolute -bottom-5 left-1/2 flex w-full -translate-x-1/2 justify-center">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F45328] px-8 py-[14px] text-[13px] font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(244,83,40,0.3)] transition-transform hover:scale-105 active:scale-95"
                >
                  Schedule A Strategy Call
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
