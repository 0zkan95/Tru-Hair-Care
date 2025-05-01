import { Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
  fallback: ["system-ui", "sans-serif"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});
