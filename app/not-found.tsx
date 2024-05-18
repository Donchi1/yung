import React from 'react'
import Text from './components/custom/Text'
import { PrimaryButton } from './components/custom/Buttons'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Error() {
  return (
    <>
    <Navbar />
    <section className='w-full min-h-[80vh] z-[2000] mb-20'>
    <div className='w-[90%] mx-auto'>
      <div className='flex flex-col lg:flex-row mt-10 lg:mt-0  items-center justify-center h-auto lg:h-[95vh]'>
      <div data-aos="fade-up"
     data-aos-duration="3000"  className='w-full lg:w-[60%] space-y-2'>
      <Text className='title'>Error page</Text>
      <Text className='text-[5rem] lg:text-[7rem] leading-tight'>404</Text>
      <Text className='text-[3rem] lg:text-[5rem] leading-tight' >Oops, page not found!</Text>
      <Text className='!text-light-color/70'>We could not find the page you are trying to access. Please try again.</Text>
      <PrimaryButton className='!mt-10 !px-3' title='Back To homepage' />
      </div>
      <div data-aos="fade-left"
     data-aos-duration="3000" className=''>
        <Image className='w-[900px]' alt='container' src={"/imgs/404.png"} width={600} height={600}/>
      </div>
      </div>

      
    </div>
   
  </section>
  <Footer />
    </>
    
  )
}

export default Error