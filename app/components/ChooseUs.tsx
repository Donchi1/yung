import React from 'react'
import Text from './custom/Text'
import { BsClock, BsGlobeCentralSouthAsia, BsSafe2 } from 'react-icons/bs'
import Image from 'next/image'
import { FaSackDollar } from 'react-icons/fa6'

function ChooseUs() {
    return (
        <section className="w-full mb-20">
            <div className='my-container'>
                <div className='space-y-14'>
                    <div className="text-center space-y-4">
                        <Text className='title'>Why Choose Us</Text>
                        <Text className='head' >Why logistic service</Text>
                    </div>

                    <div className='flex gap-6 items-center flex-col lg:flex-row'>
                        <div className='space-y-8 lg:text-right text-left'>
                            <div className='space-y-4'>
                                <div className='flex justify-start lg:justify-end'>
                                    <BsSafe2 size={40} className='text-primary-color ' />
                                </div>

                                <Text className='!text-[1.5rem]'>Safe Packaging</Text>
                                <Text className='!text-light-color/70'>Ensure your goods arrive intact with our rigorous packaging standards.</Text>
                            </div>
                            <div className='space-y-4'>
                            <div className='flex justify-start lg:justify-end'>
                                    <BsGlobeCentralSouthAsia size={40} className='text-primary-color !text-right' />
                                </div>

                                <Text className='!text-[1.5rem]'>Global Shipping</Text>
                                <Text className='!text-light-color/70'>Expand your reach with seamless shipping solutions tailored to your needs.</Text>
                            </div>
                        </div>
                        <div >
                            <Image  height={800} width={500} alt="container-ship-carrying" src={"/imgs/container-ship-carrying.jpg"} />
                        </div>
                        <div className='space-y-8'>
                            <div className='space-y-4'>
                                <BsClock size={40} className='text-primary-color' />
                                <Text className='!text-[1.5rem]'>In Time Delivery</Text>
                                <Text className='!text-light-color/70'>Stay on schedule with our efficient logistics network and advanced tracking systems.</Text>
                            </div>
                            <div className='space-y-4'>
                                <FaSackDollar size={40} className='text-primary-color' />
                                <Text className='!text-[1.5rem]'>Cost Saving</Text>
                                <Text className='!text-light-color/70'>Save without sacrificing quality through our optimized logistics and competitive rates.</Text>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ChooseUs