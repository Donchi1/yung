import type { Metadata } from "next";
import { Inter, Manrope} from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/utils/animation";

// const inter = Inter({ subsets: ["latin"],variable: '--font-manrope', });

const manrop = Manrope({ subsets: ["latin"],variable: '--font-manrope',weight:"500", style:"normal" });

export const metadata: Metadata = {
  title: "Yung Global",
  description: " Leading the way in logistics and supply chain solutions with unparalleled efficiency and reliability. Specializing in international freight, warehousing, and customized logistics services to meet your business needs.",
  openGraph:{
    type:"website",
    description:"Discover seamless global connectivity and exceptional customer service with Yung Global.",
    siteName: "Yung Global",
    url:"https://yungglobal.pro",
    title:"Yung Global",
    images:[
      {url:"https://yungglobal.pro/imgs/ogImg.png"}
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrop.variable} font-sans bg-main-bg overflow-x-hidden`}>
        <AOSInit />
        {children}
        <div id="modal-root"></div>
        </body>
    </html>
  );
}
