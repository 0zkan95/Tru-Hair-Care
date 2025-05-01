import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";



export const metadata: Metadata = {
  title: "Hair Designer",
  description: "Your one-stop destination for all your hair care needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
