import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IndustryExperience from "@/components/IndustryExperience";
import HowItWorks from "@/components/HowItWorks";
import LiveSignalFeed from "@/components/LiveSignalFeed";
import FAQ from "@/components/FAQ";
import FreeSampleCTA from "@/components/FreeSampleCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <IndustryExperience />
        <HowItWorks />
        <LiveSignalFeed />
        <FAQ />
        <FreeSampleCTA />
      </main>
      <Footer />
    </>
  );
}
