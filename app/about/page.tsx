import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Page() {
  return (
    <section className="w-full min-h-screen">
      <Header />
      <Hero title='About' />
      <div className='my-container'>
       
      </div>
    </section>
  )
}

export default Page