import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif-en",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans-en",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand-en",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stance & Signal",
  description: "Judgment for real estate decisions in motion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&family=Noto+Sans+TC:wght@400;500&family=Ma+Shan+Zheng&display=swap"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
