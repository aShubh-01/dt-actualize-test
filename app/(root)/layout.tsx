import type { Metadata } from "next";
import { Providers } from "../providers/Providers";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Actualize | DeepThought",
  description: "DeepThought Selection Process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
