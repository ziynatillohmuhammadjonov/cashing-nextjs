import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SimpleHeader } from "@/components/SimpleHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs da keshlanish",
  description: "Nextjs da keshlanish mexanizmlari haqida ma'lumot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SimpleHeader/>
        {children}</body>
    </html>
  );
}
