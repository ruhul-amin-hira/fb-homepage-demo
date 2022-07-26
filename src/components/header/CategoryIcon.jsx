import React, { useState } from 'react'


const CategoryIcon = ({active=false, children, title}) => {
    const color = active ? "text-fb-blue": "text-fb-gray1";
    const border = active ? "border-b-[3px] border-fb-blue h-[56px]": "";
    const hoverEffect = active ? "" : "hover:bg-fb-gray2"

    // const [hoverState, setHoverState] = useState(false)

  return (
    <div className={`${border} showToltip relative`}>
     <div className={`cursor-pointer py-[0.6rem] px-10 rounded-md ${color} ${hoverEffect} mx-1`}>
        <span className='text-[1.75rem]'>
            {children}
        </span>
      
    </div>
    <span className='absolute bottom-[-2.4rem] left-[30%]  showToltip__child px-2 py-[0.4rem] rounded-lg bg-black text-[0.8rem] bg-opacity-80 text-white'>
            {title}
        </span>
    </div>
   
  )
}

export default CategoryIcon