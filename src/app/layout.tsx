import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { SmoothScrollWrapper } from "@/components/shared/SmoothScrollWrapper";
import { GlobalCanvasWrapper } from "@/components/three/GlobalCanvasWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CoreAfrique - Investment Advisory & Blockchain Education",
  description: "Investment Advisory Services and Blockchain Education & VASP Compliance in Ghana, serving African markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-neutral-900`}>
        <SmoothScrollWrapper>
          <GlobalCanvasWrapper />
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
          <ScrollToTop />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
