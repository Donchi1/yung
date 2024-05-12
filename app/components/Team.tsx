import React from "react";
import * as Icons from "react-icons/hi";
import Text from "./custom/Text";


const teamData = [
  {
    name: "Jose Luke",
    position: "Operation Manager",
    imgUrl: "/imgs/team_male.jpg"
  },
  {
    name: "Kyle O Clement",
    position: "Director",
    imgUrl: "/imgs/team_male2.jpg"
  },
  {
    name: "Olivia C Joel",
    position: "Accountant",
    imgUrl: "/imgs/team_lady.jpg"
  },
  {
    name: "Joe Kennedy",
    position: "Manager",
    imgUrl: "/imgs/team_male1.jpg"
  },
  {
    name: "Angela Joshua",
    position: "Secretary",
    imgUrl: "/imgs/team_lady1.jpg"
  },
  {
    name: "Judge Owen",
    position: "C.E.O",
    imgUrl: "/imgs/team_male3.jpg"
  },
]


export default function Team() {
  return (
    <section className="w-full mt-28 py-20 mb-20 bg-primaryb ">
      <div className="my-container ">
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="text-center space-y-3 ">
            <Text className="title">Our Team</Text>
            <Text className="head">
              Meet Our Expert Team Members
            </Text>
            <Text className="!text-light-color/70">
              We have a great team including developers, designers, and Traders.
              The Team always working hard to give you great support.
            </Text>
          </div>
        </div>

        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-8 place-content-center place-items-center"
        >
          {teamData.slice(0, 3).map(each => (
          <div key={each.imgUrl} className="rounded-lg bg-primary2  py-4 w-full">
          <div className=" min-h-[400px] w-auto ">
            <img
              src={each.imgUrl}
              alt="Image Missing"
              className="w-full rounded-t-lg h-full object-cover"
            />
          </div>
          <div className="bg-primary-color px-4 py-3 rounded-b-lg ">
          <Text className="!text-[1.3rem]">
            {each.name}
          </Text>
          <div className="flex justify-between items-center">
            <Text className="!text-main-bg">{each.position}</Text>
            <span className="flex gap-2 *:text-white hover:*:bg-main-bg *:border *:border-light-color/30 *:size-6 *:rounded-full *:flex *:justify-center *:items-center  *:transition-all *:duration-500 *:linear *:cursor-pointer">
              <a
                href="mailto:support@yungglobal.live"
                className=" "
              >
                <Icons.HiMail />
              </a>
              <a
                href="tel:+4477-0688-1200"
                className=" "
              >
                <Icons.HiPhone />
              </a>
            </span>
          </div>
          </div>
          
     
        </div>
          ))}

        </div>
      </div>
    </section>
  );
}
