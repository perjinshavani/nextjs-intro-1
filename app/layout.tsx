import type { Metadata } from "next";
import { Outfit, Rubik, Rubik_Glitch, Atomic_Age } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import Link from "next/link";
import MainNav from "@/components/navigation/main_nav";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const rubik_glitch = Rubik_Glitch({
  weight: "400",
  variable: "--font-rubik_glitch",
  subsets: ["latin"],
});

const atomic_age = Atomic_Age({
  weight: "400",
  variable: "--font-atomicage",
  subsets: ["latin"],
});

const materialSymbols = localFont({
  src: "./fonts/MaterialSymbolsRounded.woff2",
  weight: "100 900",
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
      className={`${outfit.variable} ${rubik.variable} ${rubik_glitch.variable} ${atomic_age.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="selection:bg-green-300 selection:text-black">
        <MainNav />
        <div className="mt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
