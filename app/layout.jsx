import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteName = "Battle League";
const defaultTitle = "Free Fire Tournament App | Instant Join & Auto Matchmaking";
const defaultDescription =
  "Battle League is a Free Fire tournament app for instant join matches, auto squad formation, custom rooms, scrims, and fast rewards.";

export const metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Battle League",
  },
  description: defaultDescription,
  keywords: [
    "Free Fire Tournament App",
    "Instant Tournament Join",
    "Auto Matchmaking Tournament",
    "Free Fire Custom Room",
    "Solo Duo Squad Tournament",
    "Online Esports Tournament",
    "Free Fire Scrims",
    "Gaming Tournament Platform",
    "Battle Royale Tournament App",
    "Auto Squad Formation",
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