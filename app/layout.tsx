import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";

const poppins = Poppins({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Discord",
  description: "Have fun in chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
