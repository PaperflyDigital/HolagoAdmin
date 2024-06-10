import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Electronic Store",
  description: "Generated by Best Electronic Tech Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
