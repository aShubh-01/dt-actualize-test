import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { Providers } from "./providers/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeepThought | Actualise",
  description:
    "Transformation to a better career",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
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
