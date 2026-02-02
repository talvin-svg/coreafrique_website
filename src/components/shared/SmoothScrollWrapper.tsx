"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(
  () => import("./SmoothScroll").then((mod) => mod.SmoothScroll),
  { ssr: false }
);

export function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
