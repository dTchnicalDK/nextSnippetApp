import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
