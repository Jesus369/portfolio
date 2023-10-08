import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jesus Flores",
  description: "Welcome to my portfolio. Enjoy your time here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white-900">{children}</body>
    </html>
  );
}
