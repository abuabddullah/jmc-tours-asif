import { Inter } from "next/font/google";
import "./globals.css";
import AllProviderLayout from "./(client)/AllProviderLayout";
import { Card } from "@/components/ui/card";
import openGraphImg from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Plan Your Trip with JMC Tours & Travels - JMC Tours & Travels",
    template: "%s - JMC Tours & Travels",
  },
  description: "Tour",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  // social media based metadata
  twitter: {
    description: "JMC Tours Description for twitter",
    card: "summary_large_image",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Plan Your Trip with JMC Tours & Travels - JMC Tours & Travels",
    description: "Tour",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    siteName: "JMC Tours & Travels",
    // updatedTime: "2024-09-11T22:41:38+06:00",
    image: {
      url: `${openGraphImg}`,
      width: 1200,
      height: 630,
      alt: "Tours & Travels",
      type: "image/png",
    },
  },
  otherMeta: {
    // Add any additional meta tags here
    // generator: "WordPress 6.6.2",
    // googleSiteVerification: "-FdPScb7BBaXojnu9TFMI-B9AvQso-hTpoA0egC3bg4",
    // msapplicationTileImage:
    //   "https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AllProviderLayout>{children}</AllProviderLayout>
      </body>
    </html>
  );
}
