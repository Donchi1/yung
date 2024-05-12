"use client"
import React from 'react'
import Text from './custom/Text'
import Image from 'next/image'
import { PrimaryButton, SecondaryButton } from './custom/Buttons'
import Counter from './Counter'

function HomeHero() {
  return (
    <>
    <section className='w-full h-[90vh] z-[2000]'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col lg:flex-row mt-10 lg:mt-0  items-center justify-center h-auto lg:h-[95vh]'>
        <div className='w-full lg:w-[60%] space-y-6'>
        <Text className='title'>Welcome to Yungglobal</Text>
        <Text className='text-[3rem] lg:text-[5rem] leading-tight'>Get Your Load to Market Faster</Text>
        <Text className='!text-light-color/70'>Get your goods and products to any country with ease.<br />Global delivery issues solved with the Youngglobal.</Text>
        <PrimaryButton className='!mt-10 ' title='View more' />
        </div>
        <div className=''>
          <Image className='w-[900px]' alt='container' src={"/imgs/shipping-Container-hook.png"} width={600} height={600}/>
        </div>
        </div>

        
      </div>
     
    </section>
    <section className='w-full lg:-mt-6 mt-0 h-screen lg:h-auto mb-20'>
      <div className='w-[90%] -z-10 h-screen lg:h-[80vh] mx-auto relative bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url(/imgs/ship_container_in_sea.jpg)"}}>
       <div className='bg-primary-color flex justify-center items-center absolute bottom-0 px-8 py-4  w-[80%]'>
        <div className='flex justify-between lg:flex-row flex-col gap-y-4 lg:gap-y-0 w-full divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-light-color/30'>
        <div className='flex-1'>
       <Counter  title='Years of Experience' count={25} />  
         </div>
         <div className='flex-1 pl-0 lg:pl-12'>
         <Counter title='Satisfied Clients' count={985} />  
         </div>
         <div className='flex-1 pl-0 lg:pl-12'>
         <Counter surfix="M" title='Shipments Delivered' count={50} />
         </div>
        </div>
        
       </div>
      </div>
    </section>
    </>
    
  )
}

export default HomeHero