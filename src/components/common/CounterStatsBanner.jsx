import { useEffect, useRef } from "react";

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
    <div className="flex min-h-[120px] min-w-[120px] flex-col items-center justify-center px-4 py-4 text-center text-white">
      <p className="font-sans text-[24px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[32px] lg:text-[38px]" style={{ color: "#ffffff" }}>
        {item.prefix ?? ""}
        <span ref={numberRef}>0</span>
        {item.suffix ?? ""}
      </p>
      <p className="mt-5 max-w-[15ch] font-sans text-[14px] font-light leading-[1.28] text-white/100 sm:text-[15px]" style={{ color: "#ffffff" }}>
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
    <section
      className={`${rootClassName} text-white`}
      aria-label="Performance metrics"
    >
      <div className="grid w-full grid-cols-2 justify-items-center gap-y-2 px-3 sm:px-4 lg:grid-cols-4 lg:px-5">
        {items.map((item) => (
          <CounterStat
            key={`${item.label}-${item.value}`}
            item={item}
            duration={duration}
          />
        ))}
      </div>
    </section>
  );
}
