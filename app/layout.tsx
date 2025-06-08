import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "We want waste App",
  description: "Created with  React js",
  generator: "vt Nour DWerwiech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
