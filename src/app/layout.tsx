import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// import Footer from "@/components/Footer";
// import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "DUYI Store",
  description: "A simple store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Header />
        {children}
{/*         <Footer />
        <Toaster /> */}
      </body>
    </html>
  );
}
