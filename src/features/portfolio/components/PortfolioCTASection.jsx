import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../../components/common/SectionWrapper";

const defaultTitle = (
  <>
    Ready to Write <br />
    Your Success Story?
  </>
);

export default function PortfolioCTASection({
  title = defaultTitle,
  description = "Let's build something remarkable together.",
  primaryButtonLabel = "Start Your Project",
  secondaryButtonLabel = "View All Project",
  showSecondaryButton = true,
  primaryButtonClassName = "",
  primaryButtonTo,
}) {
  return (
    <SectionWrapper as="section" className="relative bg-transparent pt-0">
      <style>{`
        @keyframes portfolioCtaGlowDrift {
          0% {
            transform: translate3d(-4%, 0, 0) scale(1);
            opacity: 0.34;
          }
          50% {
            transform: translate3d(4%, -2%, 0) scale(1.04);
            opacity: 0.52;
          }
          100% {
            transform: translate3d(-4%, 0, 0) scale(1);
            opacity: 0.34;
          }
        }

        @keyframes portfolioCtaContentRise {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1120px]">
        <div className="relative overflow-hidden rounded-[28px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/images/portfolio/CTA_Video.webm" type="video/webm" />
          </video>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_28%,rgba(255,255,255,0)_62%)]"
            style={{ animation: "portfolioCtaGlowDrift 8s ease-in-out infinite" }}
          />

          <div
            className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center sm:px-8 sm:py-14 lg:px-10 lg:py-16"
            style={{ animation: "portfolioCtaContentRise 700ms cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <h2 className="max-w-[620px] text-[32px] font-semibold leading-[1.12] tracking-[-0.04em] !text-white sm:text-[40px] lg:text-[50px]">
              {title}
            </h2>

            <p className="mt-3 max-w-[420px] text-[12px] leading-[1.6] !text-white/80 sm:text-[13px] lg:text-[14px]">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primaryButtonTo ? (
                <Link
                  to={primaryButtonTo}
                  className={[
                    "min-w-[158px] rounded-full bg-[#F45328] px-7 py-3 text-center text-[13px] font-medium text-white shadow-[0_12px_24px_rgba(244,83,40,0.22)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_16px_28px_rgba(244,83,40,0.3)] sm:min-w-[176px]",
                    primaryButtonClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {primaryButtonLabel}
                </Link>
              ) : (
                <button
                  className={[
                    "min-w-[158px] rounded-full bg-[#F45328] px-7 py-3 text-center text-[13px] font-medium text-white shadow-[0_12px_24px_rgba(244,83,40,0.22)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_16px_28px_rgba(244,83,40,0.3)] sm:min-w-[176px]",
                    primaryButtonClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {primaryButtonLabel}
                </button>
              )}

              {showSecondaryButton ? (
                <button className="min-w-[158px] rounded-full border border-white/35 bg-black/10 px-7 py-3 text-center text-[13px] font-medium text-white backdrop-blur-[2px] transition-all duration-300 hover:scale-[1.04] hover:bg-white/8 sm:min-w-[176px]">
                  {secondaryButtonLabel}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
