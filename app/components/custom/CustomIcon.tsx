import React from 'react'



interface CustomIconType {
    icon?: React.ReactNode
    className?: string
}

function CustomIcon({icon,className}:CustomIconType) {
  return (
    <div  className={`${className} bg-primary-color flex justify-center items-center text-light-color rounded-full`}>
      {icon}  
    </div>
  )
}

export default CustomIcon