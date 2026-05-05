import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Minhaj // THE MOTION ARCHITECT",
  description: "A full-stack MERN engineer from Bangladesh, architecting high-performance web systems.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import PageTransition from "@/components/PageTransition";
import SpaceBackground from "@/components/SpaceBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased selection:bg-primary-container selection:text-on-primary-container relative`}>
        <SpaceBackground />
        <MotionProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
