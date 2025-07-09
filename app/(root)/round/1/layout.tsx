import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  )
}
