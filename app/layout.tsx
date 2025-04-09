import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shonki Canadian | Stories of Canadian Farmers",
  description:
    "Discover the inspiring stories of hardworking Canadian farmers. Through insightful interviews, we explore sustainable farming practices, innovative techniques, and the people who feed the world.",
  keywords:
    "Canadian farmers, farming stories, sustainable agriculture, farming interviews, Canadian agriculture, farming techniques, food production, farmer interviews, agriculture innovation, farming community",
  authors: [{ name: "Amrit Singh" }],
  creator: "Shonki Canadian",
  publisher: "Shonki Canadian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://shonkicanadian.com",
    siteName: "Shonki Canadian",
    title: "Shonki Canadian | Stories of Canadian Farmers",
    description:
      "Discover the inspiring stories of hardworking Canadian farmers. Through insightful interviews, we explore sustainable farming practices, innovative techniques, and the people who feed the world.",
    images: [
      {
        url: "/shonki_canadin_logo.png",
        width: 300,
        height: 100,
        alt: "Shonki Canadian Logo",
      },
      {
        url: "/shonki_farmer_1.png",
        width: 600,
        height: 600,
        alt: "Canadian Farmer Interview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shonki Canadian | Stories of Canadian Farmers",
    description:
      "Discover the inspiring stories of hardworking Canadian farmers. Through insightful interviews, we explore sustainable farming practices, innovative techniques, and the people who feed the world.",
    images: ["/shonki_canadin_logo.png", "/shonki_farmer_1.png"],
    creator: "@shonkicanadian",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
