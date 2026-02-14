import type { Metadata } from "next";
import { Vend_Sans } from "next/font/google";
import Loader from "@/components/Loader";
import "./globals.css";

const vendSans = Vend_Sans({
  variable: "--font-vend",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Qaumly",
  description:
    "Qaumly is a platform for learning about different cultures and countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vendSans.className} antialiased`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
