import Footer from "@/components/Footer"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main>
        {children}
        <Footer />
    </main>
  )
}
