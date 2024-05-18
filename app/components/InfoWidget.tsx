import React from 'react'

// import widgetStyle from "../styles/widget.module.css"

type WidgetType ={ Icon: React.ReactElement; title: string; amount: number }
function InfoWidget({Icon, title, amount}: WidgetType) {
  return (
    <div className=' mt-4 lg:mt-0 '>
        <div className={`relative rounded-lg bg-dark  shadow-lg pt-4 pb-2 pt-lg-5 pb-lg-4 `}>
            <span className={`flex justify-center mt-2 items-center rounded-full border border-primary-color absolute `}>
            {Icon}

            </span>
            <div className='pl-3'>

            <h4 >{title}</h4>
            <p className='text-primary-color' >{amount}</p>

        </div>
        </div>
    </div>
  )
}

export default InfoWidget