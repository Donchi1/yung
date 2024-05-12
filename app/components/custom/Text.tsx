import React, { ReactNode } from 'react'

function Text({children,className}:{children: ReactNode, className?:string}) {
  return (
    <p className={`${className} text-light-color text-[16px]`}>{children}</p>
  )
}

export default Text