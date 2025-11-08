import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yalçın Nakliye",
  description: "Çiğli ve İzmir'de profesyonel nakliye hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        // varsayılan tema: kırmızıya yakın - `theme-red`
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-red`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
