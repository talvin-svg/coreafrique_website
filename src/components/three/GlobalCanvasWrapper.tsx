"use client";

import dynamic from "next/dynamic";

const GlobalCanvas = dynamic(
  () => import("./GlobalCanvas").then((mod) => mod.GlobalCanvas),
  { ssr: false }
);

export function GlobalCanvasWrapper() {
  return <GlobalCanvas />;
}
