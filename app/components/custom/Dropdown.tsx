import React from 'react'

interface DropdownWrapperInterface {
    children: React.ReactNode
    wrapperClassName?: string
    open: boolean
}

interface DropdownInterface extends DropdownWrapperInterface  {
    label: React.ReactNode
}


function Dropdown({label,children,open,wrapperClassName}:DropdownInterface) {
  return (
    <div className="relative">
      {label}
    <DropdownWrapper open={open} wrapperClassName={wrapperClassName}>
      {children}
    </DropdownWrapper>
  </div>
  )
}

 const DropdownWrapper = ({children, wrapperClassName, open}:DropdownWrapperInterface) => {
    return (
        <div className={`${wrapperClassName} ${open ? "opacity-100 translate-x-0 transition-opacity ease-linear duration-300": "opacity-0 pointer-events-none -translate-x-full"} z-10 top-20 -right-2 absolute bg-sec-bg divide-y divide-gray-600 rounded-lg min-h-fit overflow-y-auto shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
          {children}
        </div>
    )
}

export  default Dropdown