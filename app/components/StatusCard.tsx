
import * as Icons from  "react-icons/hi2"
import { FaHandHoldingDollar,FaMoneyBill1 } from "react-icons/fa6"
import { GiTakeMyMoney, GiWallet } from "react-icons/gi"
import CustomIcon from "./custom/CustomIcon"






type statusCardType = {
  icon: string,
  title: string,
  amount: number,
  percentageIcon: string,
  date: string,
}

export default function StatusCard({
  icon,
  title,
  amount,
  percentageIcon,
  date,
}: statusCardType) {

  const checkIcon = (type: string) => {
    const icons = {
      money: <FaMoneyBill1 size={35} />,
      storage: <FaHandHoldingDollar size={35} />,
      paid: <GiTakeMyMoney size={35} />,
      poll: <GiWallet size={35} />
    };
    return icons[type as keyof typeof icons] || null;
  }
    
  
  return (
    <div className=" mb-4 lg:mb-10 mt-4">
      <div className="bg-sec-bg rounded-lg">
        <div className=" border-black flex justify-between items-center py-3  px-4 ">
          <div >
            <span className=" inline-block text-primary-color rounded-lg">
              {checkIcon(icon)}   
            </span>
           
          </div>
          <div className="">
            <h2 className="text-light-color mb-4">{title}</h2>
            
          </div>
        </div>
        <div className="border-b border-gray-600 mt-2"></div>

        <div className='p-3 flex-wrap flex justify-between items-center ' >
           <h2 className="text-2xl text-primary-color">{amount || '0'}</h2>   
          <div className="flex gap-1">
          {percentageIcon === "arrow_downward"?
          <Icons.HiArrowDown className="h-4 w-6 text-red-500" />: <Icons.HiArrowUp className="h-4 w-6  text-green-500" />}
          <span className='text-gray-400 text-xs'>
            {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
