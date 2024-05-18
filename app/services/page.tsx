import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ChooseUs from '../components/ChooseUs'
import Cta from '../components/Cta'
import Testimonial from '../components/Testimonial'
import Quotation from '../components/Quotation'
import Footer from '../components/Footer'

function Servces() {
  return (
    <section className="w-full min-h-screen">
    <Header />
    <Hero bgClass='service-bg' title="Services" />
    <Services />
    <ChooseUs />
    <Cta />
    <Testimonial />
    <Quotation />
    <Footer />
    </section>
  )
}

export default Servces