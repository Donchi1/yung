import React, { MouseEventHandler } from 'react'
import CustomIcon from './CustomIcon'
import { ImSpinner3 } from 'react-icons/im'


interface BtnInterface {
   title: string
   onClick?: MouseEventHandler<HTMLElement>
   className?: string
   disabled?: boolean
   showLoadingIcon?: React.ReactNode
   type?: "submit" | "reset" | "button"
}


interface LinkButtonInterface extends BtnInterface {
 to: string
}




export const PrimaryButton = ({title,className, onClick, type,showLoadingIcon}:BtnInterface) => {
  return (
    <button type={type} onClick={onClick} className={`${className}  text-center py-2 min-w-32 hover:text-main-bg flex justify-center items-center gap-2 rounded-full text-light-color capitalize hover:bg-light-color bg-primary-color  transition-all ease-linear duration-500`}>
      {showLoadingIcon && <CustomIcon icon={<ImSpinner3 className="animate-spin" />} />}
      {title}
    </button>
  )
}
export const SecondaryButton = ({title,className, onClick}:BtnInterface) => {
  return (
    <button onClick={onClick} className={`${className} ring-1 ring-light-color/30 text-center py-2 min-w-32 hover:text-main-bg rounded-full text-light-color capitalize hover:bg-light-color bg-main-bg transition-all ease-linear duration-500 cursor-pointer`}>
      {title}
    </button>
  )
}


export const LinkButton = ({title, onClick, to, className}:LinkButtonInterface) => (<a onClick={onClick} href={to}  className={`${className} text-center py-2 min-w-32 hover:text-main-bg inline-block rounded-full text-light-color capitalize hover:bg-light-color bg-primary-color  transition-all ease-linear duration-500`}>{title}</a>)
