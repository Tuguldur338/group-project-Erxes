import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Products from "@/components/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaTu Delivery website",
  description: "Created by BaTu (Erxes group project)",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Products />
        <Footer />
        {children}
      </body>
    </html>
  );
}
