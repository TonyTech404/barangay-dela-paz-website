import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import PWAInstallPrompt from "@/components/pwa-install-prompt"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Barangay Dela Paz - Official Website",
    template: "%s | Barangay Dela Paz",
  },
  description:
    "Official website of Barangay Dela Paz - Kapayapaan, Kaunlaran, at Pagkakaisa. Access barangay services, news, emergency contacts, and community information.",
  keywords: [
    "Barangay Dela Paz",
    "barangay services",
    "barangay clearance",
    "community news",
    "local government",
    "Philippines",
    "emergency contacts",
    "barangay officials",
    "community projects",
    "resident services",
  ],
  authors: [{ name: "Barangay Dela Paz" }],
  creator: "Barangay Dela Paz",
  publisher: "Barangay Dela Paz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://delapaz.gov.ph"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barangay Dela Paz - Official Website",
    description:
      "Official website of Barangay Dela Paz - Kapayapaan, Kaunlaran, at Pagkakaisa. Access barangay services, news, emergency contacts, and community information.",
    url: "https://delapaz.gov.ph",
    siteName: "Barangay Dela Paz",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Barangay Dela Paz Official Website",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barangay Dela Paz - Official Website",
    description: "Official website of Barangay Dela Paz - Kapayapaan, Kaunlaran, at Pagkakaisa",
    images: ["/placeholder.svg?height=630&width=1200"],
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
    google: "your-google-verification-code",
  },
  category: "government",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Barangay Dela Paz",
              alternateName: "Barangay Dela Paz Official",
              description: "Official website of Barangay Dela Paz - Kapayapaan, Kaunlaran, at Pagkakaisa",
              url: "https://delapaz.gov.ph",
              logo: "https://delapaz.gov.ph/placeholder-logo.png",
              image: "https://delapaz.gov.ph/placeholder.svg?height=630&width=1200",
              telephone: "(123) 456-7890",
              email: "info@delapaz.gov.ph",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Dela Paz Street",
                addressLocality: "Dela Paz",
                addressRegion: "Province",
                postalCode: "1234",
                addressCountry: "PH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "14.5995",
                longitude: "120.9842",
              },
              openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-12:00"],
              sameAs: ["https://facebook.com/BarangayDelaPazOfficial"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "(123) 456-7890",
                contactType: "customer service",
                availableLanguage: ["English", "Filipino"],
              },
              areaServed: {
                "@type": "Place",
                name: "Barangay Dela Paz",
              },
              serviceType: [
                "Barangay Clearance",
                "Certificate of Residency",
                "Certificate of Indigency",
                "Business Permits",
                "Community Services",
              ],
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#0E58D8" />
        <meta name="msapplication-TileColor" content="#0E58D8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Barangay Dela Paz" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <ScrollToTop />
        <PWAInstallPrompt />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
