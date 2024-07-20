import type { Metadata } from "next";
import { Poppins, Rufina, Roboto_Slab } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Hello Molly",
  description: "Frontend Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
