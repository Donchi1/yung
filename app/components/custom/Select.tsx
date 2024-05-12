import React from 'react'


interface InputInterface {
   onChange:React.ChangeEventHandler<HTMLSelectElement> | undefined
   className?: string
   value?: string | number | readonly string[]
   error?: any
   id?: string
   children: React.ReactElement | JSX.Element[]
}

function Select({children, onChange,error, id, value,className,...orders}:InputInterface) {
  return (
    <select {...orders}  className={`${className} ${error && "border-red-500"} *:bg-main-bg text-white  hover:border-main-color px-4 py-3 focus:!border-main-color transition-colors ease-linear duration-500 outline-none bg-transparent border-light-color/30 border rounded-full w-full`}  id={id} value={value} onChange={onChange} >
      {children}
    </select>
  )
}

export default Select