import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { Providers } from "./providers/Providers"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeepThought | Actualise",
  description:
    "Transformation to a better career",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FDWN0EDFZZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FDWN0EDFZZ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div>
          <main>
            <Providers>
              {children}
            </Providers>
          </main>
        </div>
      </body>
    </html>
  )
}
