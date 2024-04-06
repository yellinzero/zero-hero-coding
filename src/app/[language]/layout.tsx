import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero Hero Coding",
  description: "Dive into the coding wonderland!",
};

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export default function RootLayout({
  children,
  params: { language },
}: Readonly<{
  children: React.ReactNode;
  params: {
    language: string;
  };
}>) {
  return (
    <React.StrictMode>
      <html lang={language} dir={dir(language)}>
        <body className={inter.className}>{children}</body>
      </html>
    </React.StrictMode>
  );
}
