import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Assistant",
  description:
    "Welcome to the Chat Assistant Application, a modern and interactive platform designed to provide seamless communication between users and a virtual assistant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="h-full text-white">{children}</body>
    </html>
  );
}
