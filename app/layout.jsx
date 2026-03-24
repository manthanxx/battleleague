import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Battle League",
  description:
    "Battle League is an upcoming platform where players can join custom matches and compete for rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}