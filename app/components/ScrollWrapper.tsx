"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onLoadHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let scroll: any;

    let isMounted = true;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!isMounted) return;
      if (containerRef.current) {
        scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });

        const onLoad = () => scroll?.update?.();
        onLoadHandlerRef.current = onLoad;
        window.addEventListener("load", onLoad, { once: true });
      }
    })();

    return () => {
      isMounted = false;
      if (onLoadHandlerRef.current) {
        window.removeEventListener("load", onLoadHandlerRef.current);
        onLoadHandlerRef.current = null;
      }
      if (scroll) {
        try {
          scroll.destroy();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
