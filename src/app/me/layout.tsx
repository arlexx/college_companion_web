import Navbar from "@/components/Dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#5f6672] min-h-screen">
      <Navbar />
      {children}
    </section>
  );
}
