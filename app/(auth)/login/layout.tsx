import Header from "@/components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
        <Header />
        <div className="min-h-screen">
      <section>{children}</section>
    </div>
    </main>
  );
}