import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Me Ngoga — Executive Legal Intelligence for Rwanda",
  description: "The legal operating system for corporate governance, compliance, and risk management in Rwanda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
