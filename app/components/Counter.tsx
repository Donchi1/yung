"use client"
import React from 'react'
import CountUp from 'react-countup'
import Text from './custom/Text'


interface CounterInterface {
title?:string
count: number
surfix?: string
}


function Counter({title, count, surfix}:CounterInterface) {
  return (
    <CountUp suffix={surfix} enableScrollSpy scrollSpyOnce start={0} end={count}>
  {({ countUpRef}) => (
    <>
    <Text  className='lg:!text-[4rem] !text-[2.5rem] !text-light-color'><span ref={countUpRef} /></Text>
     <Text className='text-left font-bold text-[18px] ml-12'>{title}</Text>
    </>
  )}
</CountUp>
  )
}

export default Counter