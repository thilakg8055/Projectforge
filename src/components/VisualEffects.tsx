"use client";

import dynamic from "next/dynamic";

// Both components use browser-only APIs (canvas, WebGL, window)
// so they must be loaded client-side only.
const Background = dynamic(() => import("@/components/Background"), { ssr: false });
const FluidCursor = dynamic(() => import("@/components/FluidCursor"), { ssr: false });

export default function VisualEffects() {
  return (
    <>
      <Background />
      <FluidCursor />
    </>
  );
}
