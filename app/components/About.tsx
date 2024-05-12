import Image from 'next/image'
import React from 'react'
import Text from './custom/Text'
import { FaEye } from 'react-icons/fa'
import { FaFlagCheckered } from 'react-icons/fa6'
import { SecondaryButton } from './custom/Buttons'

function About() {
  return (
    <section className='w-full mb-32'>
      <div className='my-container'>
      <div className='flex items-center gap-y-10 lg:flex-row flex-col justify-between relative min-h-screen'>
       
      
        <div className='flex-1 '>
          <Image className='h-[600px]'  src={"/imgs/cargo-ship-from-top.jpg"} height={900} width={500} alt='about-ship' />
          <div className='absolute hidden lg:block -bottom-32'>
        <Image className='h-[400px] w-[300px] mx-auto'  src={"/imgs/shipping-container.png"} height={900} width={500} alt='about-ship' />
        </div>
        </div>
        <div className='flex-1 space-y-6'>
           <Text className='title'>About Yung Global</Text>
           <Text className='head'>Logistics Beyond Expectation</Text>
           <Text>Experience the difference with Yung Global Logistics where excellence knows no bounds</Text>
           <div className='flex gap-4 divide-x-0 lg:divide-x divide-y lg:divide-y-0  divide-light-color/30 lg:flex-row flex-col'>
            <div className='space-y-4 flex-1'>
            <div className='flex gap-4 items-center'>    
              <Text className='text-[1.5rem]'>Our Vision</Text>
              <FaEye size={25} className='text-primary-color' />
              </div>
              <Text>At Yung Global Logistics, our vision is to redefine the future of transportation and supply chain management, setting new standards of excellence and innovation in the industry.</Text>
            </div>
            <div className='space-y-4  flex-1 pl-0 lg:pl-6'>
              <div className='flex gap-4 lg:mt-0 mt-4 items-center'>
              <Text className='text-[1.5rem]'>Our Mission</Text>
              <FaFlagCheckered size={25} className='text-primary-color' />
              </div>
              
              <Text>Our mission at Yung Global Logistics is to empower businesses to thrive in an interconnected world by providing seamless logistics solutions...</Text>
            </div>
            
           </div>
           <SecondaryButton title='Learn More' className='!mt-10 ' />
        </div>
        </div>
      </div>
    </section>
  )
}

export default About