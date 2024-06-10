import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {cn} from "@/utils/cn";

import { Open_Sans, Poppins } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const fontSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open_sans",
})

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Jacob Bekele Jansson",
  description: "Game Project Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"w-full h-full"}>
      <body className={cn(fontSans.variable, poppins.variable, "h-full w-full")}>
      <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem={true}>
        {children}
          <ThemeToggle/>
      </ThemeProvider>
      </body>
    </html>
  );
}
