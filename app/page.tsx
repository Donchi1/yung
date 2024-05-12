
import About from "./components/About";
import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import Quotation from "./components/Quotation";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
     <Header />
     <HomeHero />
     <About />
     <Services />
     <Quotation />
     <Cta />
     <ChooseUs />
     <Testimonial />
     <Team />
     <Contact />
     <Footer />
    </main>
  );
}
