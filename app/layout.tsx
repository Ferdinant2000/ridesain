'use client';

import { HeroUIProvider } from "@heroui/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <Navbar />
            {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
