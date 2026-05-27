import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteName = "Battle League";
const defaultTitle = "Free Fire Tournament App | Instant Join & Auto Matchmaking";
const defaultDescription =
  "Battle League is a Free Fire esports app for instant tournament entry, auto matchmaking, custom rooms, and cash rewards — join tournaments in 2026 and win real prizes.";

export const metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Battle League",
  },
  description: defaultDescription,
  keywords: [
    "Free Fire Tournament App",
    "free fire tournament app",
    "new tournament app",
    "new tournament app 2026",
    "Free Fire Esports app",
    "free fire esports app 2026",
    "esports app 2026",
    "free fire tournaments 2026",
    "money earning app",
    "free fire money earning app",
    "earn money playing games",
    "cash tournaments Free Fire",
    "Free Fire cash tournaments 2026",
    "instant tournament join",
    "one-tap tournament entry",
    "auto matchmaking",
    "auto squad formation",
    "custom room access",
    "online esports tournament",
    "gaming tournament platform",
    "battle royale tournament app",
    "free fire scrims",
    "solo duo squad tournament",
    "mobile esports app",
    "competitive gaming app",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Battle League instant join Free Fire tournament platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.png"],
  },
  category: "gaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${inter.variable} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}