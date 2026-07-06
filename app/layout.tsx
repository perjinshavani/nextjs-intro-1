import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const materialSymbols = localFont({
 src:"./fonts/MaterialSymbolsRounded.woff2",
 variable: "--font-material-symbols"
})

export const metadata: Metadata = {
  title: "Welcome to Planet Express Academy",
  description: "Master the art of intergalactic delivery, advanced propulsion physics, and avoiding Zapp Brannigan's tactical incompetence. Your journey to the 31st century starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
