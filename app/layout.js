import { Geist, Geist_Mono, Amatic_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amatic = Amatic_SC({
  weight: ["400", "700"],
  variable: "--font-amatic-sc",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Tuktuk Rental Sri Lanka & Cambodia | Explore with Freedom - tuktukrental.com - Tuktuk Rental",
  description:
    "Rent a tuktuk in Sri Lanka or Cambodia and enjoy the freedom to explore hidden gems. Choose from RegularTuk, CabrioTuk, or ElectricTuk options. Get travel tips and 24/7 support.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amatic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
