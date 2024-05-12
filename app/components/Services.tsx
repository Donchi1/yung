import React from 'react'
import Text from './custom/Text'
import { LinkButton } from './custom/Buttons'
import Card from './Card'
import Image from 'next/image'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'

const servicesData = [
  {
    title: "Ocean Freight",
    desc: "Yung Global Logistics specializes in ocean freight services, offering reliable and cost-effective transportation solutions for goods of all sizes and types. ",
    icon: "/imgs/icon_ship.png"
  },
  {
    title: "Air Freight",
    desc: "When speed and urgency are paramount, Yung Global Logistics offers expedited air freight services to deliver your cargo quickly and reliably to any destination worldwide.",
    icon: "/imgs/icon_flight.png"
  },
  {
    title: "Rail Freight",
    desc: "For land-based transportation solutions, Yung Global Logistics offers rail freight services to move your cargo efficiently and sustainably across continents. ",
    icon: "/imgs/icon_troller.png"
  },
  {
    title: "Worldwide Ships",
    desc: "With our extensive network of partners and carriers, Yung Global Logistics offers worldwide shipping services to connect your business to markets across the globe. ",
    icon: "/imgs/icon_global.png"
  },
  {
    title: "Logistic Service",
    desc: "At Yung Global Logistics, we specialize in end-to-end logistics solutions designed to streamline your supply chain and optimize efficiency. ",
    icon: "/imgs/icon_lift.png"
  },
  {
    title: "24/7 Full Support",
    desc: "We understand that logistics doesn't sleep, which is why our dedicated team of logistics experts is available around the clock to provide support and assistance whenever you need it.",
    icon: "/imgs/icon_support.png"
  },
]

function Services() {
  return (
    <section className='w-full bg-[#0f171f] pt-20 pb-20'>
      <div className="my-container ">

        <Text className='title mb-4 text-center lg:text-left'>Our Services</Text>
        <div className='flex lg:justify-between gap-y-6 justify-center lg:flex-row flex-col items-center lg:items-start '>
          <div className='flex-1'>
            <Text className='head text-center lg:text-left'>We Help Transport Your Future</Text>
          </div>
          <div className='flex-1 text-right'>
            <LinkButton className='btn-secondary' title='Contact Us' to='/contact' />
          </div>

        </div>
        <div className='grid gap-4 grid-rows-subgrid grid-cols-1 lg:grid-cols-3 mt-10'>
          {servicesData.map(each => (
            <Card key={each.desc}>
              <div className='space-y-4'>
                <Image className='w-[60px]' width={100} height={100} alt='occean_ship' src={each.icon } />
                <Text className='!text-[1.5rem]'>{each.title}</Text>
                <Text className='text-light-color'>{each.desc}</Text>
                <FaLongArrowAltRight size={20} className='text-primary-color cursor-pointer' />
              </div>
            </Card>
          ))}


        </div>
      </div>
    </section>
  )
}

export default Services