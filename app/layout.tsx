import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Hive",
  description: "Discover the best cars in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative`}>{children}</body>
    </html>
  );
}
