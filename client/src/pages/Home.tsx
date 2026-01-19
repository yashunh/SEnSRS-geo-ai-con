import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Schedule />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
