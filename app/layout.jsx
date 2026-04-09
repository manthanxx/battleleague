import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteName = "Battle League";
const defaultTitle = "Battle League Free Fire Tournaments & Custom Matches";
const defaultDescription =
  "Join Battle League to enter Free Fire custom room tournaments, compete in skill-based matches, and get early access to upcoming reward-driven events.";

export const metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Battle League",
  },
  description: defaultDescription,
  keywords: [
    "Battle League",
    "Free Fire tournament",
    "Free Fire custom room",
    "esports platform",
    "mobile gaming tournament",
    "skill based matches",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Battle League logos/light-bg-circle.svg",
    shortcut: "/Battle League logos/light-bg-circle.svg",
    apple: "/Battle League logos/light-bg-circle.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icons.svg",
        width: 1200,
        height: 630,
        alt: "Battle League Free Fire tournament platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/icons.svg"],
  },
  category: "gaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Battle League logos/light-bg-circle.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/Battle League logos/light-bg-circle.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Battle League logos/light-bg-circle.svg" />
      </head>
      <body className={`${inter.variable} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}