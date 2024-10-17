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
    //   "https://jmc.tours/wp-content/uploads/2021/08/cropped-jmc-tours-logo-270x270.png",
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
