"use client"
import React from "react";

import * as Icons from "react-icons/fa";

import * as IconTb from "react-icons/tb";
import dynamic from "next/dynamic";
import useCollection from "../../components/hooks/UseCollection";
import AdminNav from "@/app/components/AdminNav";
import AdminSidebar from "@/app/components/AdminSidebar";
import Accord from "@/app/components/Accord";
import InfoWidget from "@/app/components/InfoWidget";
import StatusCard from "@/app/components/StatusCard";
import { totalDCheck } from "@/utils/checkPercent";
import Text from "@/app/components/custom/Text";
import FooterAdmin from "@/app/components/FooterAdmin";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

function Dashboard() {
  const [packages] = useCollection("packages")
  const [contacts] = useCollection("contacts")
  const [subcribers] = useCollection("subcribers")
  let optionAll = {
    theme: {
      mode: "dark",
    },

    series: [
      {
        name: "packages",
        color: "rgba(247, 147, 26, 1)",
        data: [10, 5, 9, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      },
      {
        name: "revenue",
        color: "rgba(240, 16, 16, 1)",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Delivered",
        color: "rgba(255, 72, 0, 1)",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Processing",
        color: "rgba(39, 144, 195, 1)",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Registered",
        color: "rgba(136, 203, 245, 1)",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        // height: ini,
        background: "#0f171f",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      yaxis: {
        title: {
          text: "",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        colors: ["#000"],
        background: "#0000",
        y: {
          formatter: function (val: any) {
            return "$" + val + "";
          },
        },
      },
    },
  };

  const getProgressInfo = () => {
    
      if(packages.length > 0 && packages.length < 10) return  "20"
          
      if(packages.length > 10 && packages.length < 20) return "40"

      if(packages.length > 20 && packages.length < 30) return  "60"
      if(packages.length > 30 && packages.length < 40) return "80"

      if(packages.length > 40 && packages.length < 50) return "100"
     
      return "1"
  };

  const packageInfo = () =>  {
      const registered = packages.filter(each => each.status === "registered")
      const del = packages.filter(each => each.status === "delivered")
      const processing = packages.filter(each => each.status === "dispatched")
      const totalCharge = packages.reduce((acc, ini) =>  acc + parseFloat(ini?.charges.substring(1)),0)
      return {registered, processing, totalCharge, del}
  }

  const progressInfo = {
    series: [getProgressInfo()],
    options: {
      labels: ["progress"],
      chart: {
        height: 350,
        width: 20,
      },
    },
  };
  return (
    <>
     <AdminNav />

    <div className="min-h-screen overflow-x-hidden bg-main-bg" >
     
      <div className="flex mb-10">
        <AdminSidebar />
        <div className={`flex-[4] min-h-screen`} >
          <div className="my-container">
            <Accord title="Dashboard"/>
            <div className="grid lg:grid-cols-4 gap-4 grid-rows-subgrid grid-cols-1" >
              <StatusCard 
              title="Packages"
              amount={packages.length}
              icon="money"
              percentageIcon={
                totalDCheck(packages.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              }
             
              date="Last month"
              />
               <StatusCard 
              title="Registered"
              amount={packageInfo().registered?.length}
              icon="money"
              percentageIcon={
                totalDCheck(packageInfo().registered?.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              } 
              date="Last month"
              />
              <StatusCard 
              title="Delivered"
              amount={packageInfo().del?.length}
              icon="money"
              percentageIcon={
                totalDCheck(packageInfo().del?.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              } 
              date="Last month"
              />
               <StatusCard 
              title="Processing"
              amount={packageInfo().del?.length}
              icon="money"
              percentageIcon={
                packageInfo().processing?.length > 50 ? 'arrow_upward' : 'arrow_downward'
              } 
              date="Last month"
              />
            </div>
            <div className=" bg-sec-bg mt-4">
              <Charts
               height={300}
               width={"100%"}
               
                type="bar"
                series={optionAll.series}
                options={optionAll.options}
                
              />
             
            </div>
            <div className=" mt-4">
              
              <Text className="text-light-color !text-[18px] pt-4">Account Statistics</Text>
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-subgrid gap-4 mt-4" >
                <div className="shadow-lg flex *:!text-light-color/70 justify-center flex-col gap-3 bg-sec-bg pl-8 rounded-lg">
                  <Text className="text-uppercase ">Total Packages : <span className="ml-6">{packages.length}</span></Text>
                  <Text className="text-uppercase ">Total Delivered : <span className="ml-6">{packageInfo()?.del.length}</span></Text>
                  <Text className="text-uppercase ">Total Revenue : <span className="ml-4 badge bg-success text-danger">${packageInfo().totalCharge + 20}</span></Text>
                  <Text className="text-uppercase ">Total Charges :<span className="ml-6">${packageInfo().totalCharge}</span></Text>
                  <Text className="text-uppercase ">Total Contacts : <span className="ml-6">{contacts.length}</span></Text>
                  <Text className="text-uppercase ">Total Subcribers : <span className="ml-6">{subcribers.length}</span></Text>
                </div>
                <div className="shadow-lg bg-sec-bg  rounded-lg">
                <Charts
                  height= {300}
                  width ={300}
                        type="radialBar"
                        series={[Number(getProgressInfo())]}
                        options={{
                          ...progressInfo.options,
                   
                          fill: { colors: ["#008000"] },
                         
                          
                        
                          plotOptions: {
                            radialBar: {
                              dataLabels: {
                                name: {
                                  color: "#ff0000",
                                },
                                value: {
                                  fontSize: "20px",
                                  color: "white",
                                },
                              },
                              hollow: {
                                size: "80px",
                              },
                            },
                          },
                        }}
                      />
                </div>
              </div>
          
          </div>
            
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
    </>
  );
}

export default Dashboard;


