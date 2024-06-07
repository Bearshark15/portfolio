import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {cn} from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, "h-full w-full")}>
          {children}
      </body>
    </html>
  );
}
