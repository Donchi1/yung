import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import ContactMap from '../components/ContactMap'

function Conatct() {
  return (
    <section className="w-full min-h-screen">
    <Header />
    <Hero bgClass='contact-hero-bg' title="Contact" />
    <Contact />
    <ContactMap />
    <Testimonial />
    <Footer />
    </section>
  )
}

export default Conatct