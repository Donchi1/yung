import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tracking from '../components/Tracking'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Page() {
  return (
    <section className="w-full min-h-screen">
    <Header />
    <Hero bgClass='service-bg' title="Tracking" />
    <Tracking />
    <Services />
    <Testimonial/>
    <Footer/>
    </section>
  )
}

export default Page