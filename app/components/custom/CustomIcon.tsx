import React from 'react'



interface CustomIconType {
    icon?: React.ReactNode
    className?: string
}

function CustomIcon({icon,className}:CustomIconType) {
  return (
    <div  className={`${className} text-primary-color size-6 flex justify-center items-center bg-light-color/70 rounded-full`}>
      {icon}  
    </div>
  )
}

export default CustomIcon