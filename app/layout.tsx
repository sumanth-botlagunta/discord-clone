import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/providers/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
