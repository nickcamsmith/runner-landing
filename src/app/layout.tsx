import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const karlST = localFont({
  src: "../../public/fonts/KarlST_Medium.woff2",
  variable: "--font-karl",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Runner - Trade The Moment",
  description: "Be the first to know about Runner",
  icons: {
    icon: "/images/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karlST.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
