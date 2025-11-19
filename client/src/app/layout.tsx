import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/header/Header";
import ThemeProvider from "@/app/themeContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <ThemeProvider>
        <body
          className={`${inter.variable}`}
        >
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
