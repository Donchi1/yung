"use client"
import React from 'react'
import Text from './custom/Text'
import { LinkButton} from './custom/Buttons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const testiData = [

{
  text: "Yung Global Logistics has been instrumental in streamlining our supply chain operations. Their dedication to safe packaging and on-time delivery has exceeded our expectations.",
  name: "John Smith",
  imgUrl: "/imgs/testi_man.jpg"
},  

{
  text: "We rely on Yung Global Logistics for our international shipping needs. Their global network and cost-saving solutions have helped us expand our business globally.",
  name: "Emily Chen",
  imgUrl: "/imgs/testi_woman.jpg"
},
{
  text: "I've been consistently impressed with the level of professionalism and efficiency demonstrated by Yung Global Logistics. Their commitment to customer satisfaction is unmatched.",
  name: "David Johnson",
  imgUrl: "/imgs/testi_man1.jpg"
},
{
  text: "Yung Global Logistics has been our trusted logistics partner for years. Their attention to detail and personalized service make them stand out in the industry.",
  name: "Sarah Thompson",
  imgUrl: "/imgs/testi_woman1.jpg"
}
]

interface ControllerInterface {
  onClick?:React.MouseEventHandler<HTMLButtonElement>
 dont?:boolean
}


const Next = ({ onClick,  dont }:ControllerInterface) => {
return (
  <div
    className={`hidden lg:block absolute right-0 -bottom-20  text-white text-lg  `}
  >
    <button
      onClick={onClick}
      className="border-primary-color border px-3 py-2 rounded-sm hover:bg-transparent hover:border hover:border-primary-color/70 transition-color ease-linear duration-500"
    >
      <FaChevronRight />
    </button>
  </div>
);
};
const Prev = ({ onClick, dont }: ControllerInterface) => (
<div className={`hidden lg:block absolute -bottom-20 right-14  text-white text-lg `}>
  <button
    onClick={onClick}
    className="border-primary-color  border px-3 py-2 rounded-sm hover:bg-transparent hover:border hover:border-primary-color/70 transition-color ease-linear duration-500"
  >
    <FaChevronLeft />
  </button>
</div>
); 
function Testimonial() {
  return (
    <section data-aos="fade-up"
    data-aos-duration="3000" className='w-full min-h-screen mb-20 bg-[#0f171f] py-20'>
       <div className='my-container'>
        <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center gap-20'>
          <div className='bg-center bg-no-repeat bg-cover h-screen w-full ' style={{backgroundImage: "url(/imgs/test_bg.jpg)"}}>
          </div>
          <div className='space-y-6 w-full'>
            <Text className='title'>Testimonial</Text>
            <Text className='head'>What our clients say.</Text>
            <Text className='text-light-color/70'>Here are some of the positive feedbacks from our clients all over the world.</Text>
            <LinkButton to='/about' title='View More' />
            <div>
            <Slider
          autoplay
          slidesToScroll={1}
          slidesToShow={1}
          nextArrow={<Next />}
          prevArrow={<Prev />}
          infinite
          initialSlide={0}
          speed={5000}
          pauseOnHover={false}
          pauseOnFocus
          pauseOnDotsHover={false}
          easing="linear"
          //className="lg:w-[60%] w-[100%] mx-auto "
        >
         {testiData.map(each => (
          <Card className='bg-main-bg mt-6 shadow-primary-color shadow-md' key={each.imgUrl}>
             <div className='space-y-8'>
               <Text>{each.text}</Text>
               <div className='flex gap-4 items-center'>
                <Image className='w-[60px] h-[60px] rounded-full'  height={100} width={100} src={each.imgUrl}  alt='testimony' />
                <div className='space-y-2'>
                  <Text className='!text-[18px] !font-bold'>{each.name}</Text>
                  <Text className='!text-primary-color'>Client</Text>
                </div>
               </div>
             </div>
          </Card>
         ))}
        </Slider>
            </div>
          </div>
        </div>
       </div>
    </section>
   
  )
}

export default Testimonial