"use client"
import Image from 'next/image'
import React from 'react'
import Text from './custom/Text'
import * as Icons from "react-icons/fa6"
import Link from 'next/link'
import Input from './custom/Input'
import { useFormik } from 'formik';
import * as Yup from "yup"
import { BsSend } from "react-icons/bs";
import { ImSpinner3 } from 'react-icons/im'
//import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
//import { auth, db } from '@/db/firebaseConfig'
import Toast from '@/utils/Alert'
import CustomIcon from './custom/CustomIcon'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/db/firebaseDb'
//import { useAuthStore } from '@/app/store/authStore'


const navLinks = [
  { text: "Home", link: "/", icon: <span className=' text-gray-400'><Icons.FaArrowRightLong /></span> },
  { text: "About", link: "/about", icon: <span className=' text-gray-400'><Icons.FaArrowRightLong /></span> },
  { text: "Services", link: "/services", icon: <span className=' text-gray-400'><Icons.FaArrowRightLong /></span> },
  { text: "Contact", link: "/contact", icon: <span className=' text-gray-400'><Icons.FaArrowRightLong /></span> },
  { text: "tracking", link: "/tracking", icon: <span className=' text-gray-400'><Icons.FaArrowRightLong /></span> },
]

function Footer() {

  //const { currentUser } = useAuthStore()

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .trim()
        .required("Email required")
        .lowercase(),
    }),
    onSubmit: (values) => handleSubmitSub(values),
  });

  const handleSubmitSub = async (val: { email: string }) => {

    try {
      await addDoc(collection(db, "subcribers"), {
        email: val.email,
        idx: Date.now().toString(),
        date: serverTimestamp(),
        username: "Guest",
      });
      formik.resetForm()
      Toast.success.fire({
        text: "Thanks for subcribing to our platform",
      });
    } catch (error) {
      formik.resetForm()
      Toast.error.fire({
        text: "Something went wrong",
      });
    }
  };


  return (
    <footer className=" min-h-[80vh] bg-sec-bg pt-6">
      <section className='my-container'>
        <div className='flex justify-between gap-10 lg:gap-32 flex-col lg:flex-row min-h-[60vh]'>
          <div data-aos="fade-right" data-aos-delay="300" data-aos-easing="linear" className='space-y-5 flex-1'>

            <Image className='w-[130px]' src={"/imgs/logo1.png"} width={100} height={100} alt='logo' />
            <div className='space-y-2'>
              <Text>
                All you need for your fast, global and easy
              </Text>
              <Text>
              shipping of your products made available.
              </Text>
            </div>

            <div className='flex  *:transition-all *:ease-linear *:duration-500 items-center gap-5 text-white *:cursor-pointer '>
              <div className='size-[50px] flex justify-center items-center hover:bg-primary-color rounded-full ring-1 ring-light-color/30 text-white hover:ring-1 hover:ring-transparent'>
                <Icons.FaFacebookF />
              </div>
              <div className='size-[50px] flex justify-center items-center hover:bg-primary-color rounded-full ring-1 ring-light-color/30 text-white hover:ring-1 hover:ring-transparent'>
                <Icons.FaTwitter />
              </div>
              <div className='size-[50px] flex justify-center items-center hover:bg-primary-color rounded-full ring-1 ring-light-color/30 text-white hover:ring-1 hover:ring-transparent'>
                <Icons.FaInstagram />
              </div>
              <div className='size-[50px] flex justify-center items-center hover:bg-primary-color rounded-full ring-1 ring-light-color/30 text-white hover:ring-1 hover:ring-transparent'>
                <Icons.FaLinkedinIn />
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="200" data-aos-easing="linear" className='flex-[.5]'>
            <Text className='!text-[20px] py-6'>Useful Links</Text>
            <ul className='flex flex-col gap-2 '>
              {navLinks.map(({ icon, link, text }, idx) => (

                <Link key={idx} className=' transition-color  duration-500 ease-linear hover:border-light-color text-gray-400 hover:text-primary-color font-bold text-[16px] flex justify-between items-center  ' href={link}>
                  {text}
                  {icon as any}
                </Link>

              ))}
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" data-aos-easing="linear" className='flex-1 space-y-5'>
            <Text className='!text-[20px] pt-6'>News Letter</Text>
            <Text>Why don&apos;t you subscribe to our newsletter for more relevant information on our platform</Text>
            <form onSubmit={formik.handleSubmit}>
              <div className={`${formik.touched.email && formik.errors.email? "focus-within:shadow-red-300": "focus-within:shadow-main-color" } text-white relative flex w-full items-center focus-within:shadow-[0px_1px_10px_-1px_#00000024]  transition-colors ease-linear duration-500 outline-none bg-transparent border-gray-700 border rounded-full`}>
                <Input className='!border-none !border-0 ' type='email'  {...formik.getFieldProps("email")} placeholder='Enter Email' />
                <button type='submit' className=' absolute right-0'>
                  <CustomIcon  icon={formik.isSubmitting ? <ImSpinner3 size={25} className='animate-spin' /> : <BsSend size={25} />} className='size-[52px] !text-light-color !bg-primary-color'  />
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className='border-t border-x-0 border-b-0 w-full h-2 my-6'></div>
        <div className='flex justify-center flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:justify-between items-center '>
          <Text className='!text-[18px] !text-white [&_a]:text-primary-color'>
            {new Date().getFullYear()} @ copywrite <a href='https://yungglobal.pro' >Yung Global</a> All right Reserved
          </Text>
          
        </div>
      </section>

    </footer>
  )
}

export default Footer