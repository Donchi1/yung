import React from 'react'
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <section className='w-full h-screen bg-black/50'>
        <div className='flex justify-center items-center h-screen'>
        <div className="bg-sec-bg w-32 h-32 rounded-md flex justify-center items-center mx-auto">
        <ImSpinner9 size={40} className='text-primary-color animate-spin' />
        </div>
         
        </div>
    </section>
  )
}

export default Loading