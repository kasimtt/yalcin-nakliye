import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Lightbox from "./components/Lightbox";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yalçın Nakliye — Çiğli, Karşıyaka, Menemen & İzmir Evden Eve Nakliyat",
  description: "İzmir Çiğli merkezli profesyonel evden eve nakliyat, ofis taşımacılığı, özenli ambalajlama ve şehirler arası güvenli nakliye hizmetleri. 7/24 Kesintisiz Destek.",
  keywords: ["çiğli nakliye", "izmir evden eve nakliyat", "karşıyaka nakliyat", "menemen nakliye", "şehirler arası nakliyat", "ev taşıma izmir", "yalçın nakliye"],
  authors: [{ name: "Yalçın Nakliye" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased text-slate-800 bg-slate-50 flex flex-col min-h-screen selection:bg-orange-500 selection:text-white`}>
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <Lightbox />
      </body>
    </html>
  );
}
