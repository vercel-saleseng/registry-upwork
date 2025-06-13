import React, { type ReactNode } from "react";
import "@/app/tokens.css";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
