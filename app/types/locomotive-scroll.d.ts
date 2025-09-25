// types/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
    export interface LocomotiveScrollOptions {
      el?: HTMLElement | null;
      smooth?: boolean;
      multiplier?: number;
      lerp?: number;
      direction?: "vertical" | "horizontal";
      smartphone?: { smooth?: boolean; breakpoint?: number };
      tablet?: { smooth?: boolean; breakpoint?: number };
      [key: string]: unknown;
    }
  
    export default class LocomotiveScroll {
      constructor(options?: LocomotiveScrollOptions);
      update(): void;
      destroy(): void;
      start(): void;
      stop(): void;
      on(event: string, callback: (...args: unknown[]) => void): this;
      off(event: string, callback: (...args: unknown[]) => void): this;
      scrollTo(target: HTMLElement | string | number, options?: { offset?: number; duration?: number; easing?: string }): void;
      setScroll(y: number): void;
      // fallback for anything else
      [key: string]: unknown;
    }
  }
  