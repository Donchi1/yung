import React from 'react'

interface CardInterface {
  children:React.ReactNode
  className?: string
}
function Card({children, className}:CardInterface) {
  return (
    <div className={`!${className} bg-[rgb(2_4_5)] p-8 rounded-sm`}>
       {children}
    </div>
  )
}

export default Card