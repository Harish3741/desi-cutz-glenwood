import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Reveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
