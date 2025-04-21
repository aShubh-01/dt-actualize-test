import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dt - Actualise",
  description:
    "Transformation to a better career",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
