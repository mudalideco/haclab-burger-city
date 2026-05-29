import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger City | Fresh Burgers on St. Clair West — Toronto Food Truck",
  description:
    "Toronto's favorite food truck serving never-frozen burgers, hand-cut fries, and comfort food. Catering available for events. Find us on St. Clair West!",
  keywords: [
    "burger food truck Toronto",
    "St. Clair West burgers",
    "food truck catering Toronto",
    "Burger City",
    "Toronto burger joint",
    "fresh burgers Toronto",
  ],
  openGraph: {
    title: "Burger City — Fresh Burgers on St. Clair West",
    description:
      "Toronto's best food truck serving never-frozen burgers, hand-cut fries, and comfort food. Catering available.",
    type: "website",
    locale: "en_CA",
    siteName: "Burger City",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
