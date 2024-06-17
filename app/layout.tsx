import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

import { WeatherContextProvider } from "@/contexts/WeatherContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheater App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <WeatherContextProvider>
          <Navbar />
          {children}
        </WeatherContextProvider>
      </body>
    </html>
  );
}
