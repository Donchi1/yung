import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Cta from "../components/Cta";
import ChooseUs from "../components/ChooseUs";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

function Page() {
  return (
    <section className="w-full min-h-screen">
      <Header />
      <Hero title="About" />
      <About />
      <Services />
      <Cta />
      <ChooseUs />
      <Team />
      <Testimonial />
      <Footer />
    </section>
  );
}

export default Page;
