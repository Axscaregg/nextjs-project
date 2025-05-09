"use client";
import AppBarWeb from "@/componants/appBarWeb";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const shouldShowAppBar = pathname === "/";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
         {!shouldShowAppBar && <AppBarWeb />}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingLeft: "auto",
            paddingRight: "auto",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
