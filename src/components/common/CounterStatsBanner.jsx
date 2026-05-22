import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";

/**
 * Formats the counter value with the specified decimal places.
 */
function formatCounterValue(value, decimals) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Easing function for smooth deceleration at the end of the counter.
 */
function easeOutQuart(progress) {
  return 1 - Math.pow(1 - progress, 4);
}

function CounterStat({ item, duration }) {
  const numberRef = useRef(null);

  useEffect(() => {
    let frameId = 0;
    let timeoutId;
    const decimals = item.decimals ?? 0;

    const startAnimation = () => {
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const nextValue = item.value * easedProgress;

        // Directly update the DOM to avoid expensive React re-renders during animation
        if (numberRef.current) {
          numberRef.current.textContent = formatCounterValue(nextValue, decimals);
        }

        if (progress < 1) {
          // Continue the animation frame until progress reaches 1 (100%)
          frameId = window.requestAnimationFrame(tick);
        } else {
          // Ensure the exact target value is set upon completion
          if (numberRef.current) {
            numberRef.current.textContent = formatCounterValue(item.value, decimals);
          }
          
          // Initiate the infinite loop: Pause for 3000ms before restarting
          // Total cycle: 2000ms animation + 3000ms pause = 5 seconds
          timeoutId = setTimeout(() => {
            startAnimation();
          }, 3000);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    // Initial delay to allow the page layout to settle before the first animation
    timeoutId = setTimeout(() => {
      startAnimation();
    }, 500);

    // Cleanup animation frames and timers to prevent memory leaks on unmount
    return () => {
      window.cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [duration, item.value, item.decimals]);

  return (
    <div className="flex min-h-[120px] w-full min-w-0 flex-col items-center justify-center px-3 py-4 text-center text-white sm:min-h-[136px] sm:px-4 sm:py-5 lg:min-h-[148px] lg:px-5">
      <p
        className="font-sans font-semibold leading-none tracking-[-0.05em] text-white"
        style={{
          color: "#ffffff",
          fontSize: "clamp(24px, 1.2rem + 1vw, var(--fs-card-title))",
        }}
      >
        {item.prefix ?? ""}
        <span ref={numberRef}>0</span>
        {item.suffix ?? ""}
      </p>
      <p
        className="mt-3 max-w-[16ch] text-balance font-sans font-light leading-[1.35] text-white/100 sm:mt-4"
        style={{
          color: "#ffffff",
          fontSize: "var(--fs-section-subtitle)",
        }}
      >
        {item.label}
      </p>
    </div>
  );
}

export default function CounterStatsBanner({
  items = [],
  className = "",
  duration = 2000, // Duration of the counting animation in milliseconds
}) {
  const rootClassName = [
    "relative overflow-hidden rounded-none bg-[linear-gradient(90deg,#2f2fd6_0%,#1f79d7_48%,#18bca8_100%)] shadow-[0_18px_40px_rgba(27,94,170,0.18)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!items.length) {
    return null;
  }

  return (
    <SectionWrapper as="section" className="relative bg-transparent !pl-0 !pr-0 section-spacing " aria-label="Performance metrics">
      <div className={`${rootClassName} w-full text-white`}>
        <div className="grid w-full grid-cols-1 justify-items-center gap-y-1 px-4 py-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2 sm:px-5 md:px-6 lg:grid-cols-4 lg:gap-x-2 lg:px-5 xl:px-6 2xl:px-8">
          {items.map((item) => (
            <CounterStat
              key={`${item.label}-${item.value}`}
              item={item}
              duration={duration}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
