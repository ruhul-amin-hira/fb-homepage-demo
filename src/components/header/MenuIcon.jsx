import React from 'react'

const MenuIcon = ({title, adiClass, children}) => {
    const additionalClass = adiClass ? adiClass : "left-[-15%]"
  return (
    <div className={` showToltip relative`}>
     <div className={`cursor-pointer h-10 w-10 flex items-center justify-center hover:bg-fb-gray4 ml-[1.2] rounded-full  mx-1 bg-fb-gray3`}>
        <span className='text-[1.3rem]'>
            {children}
        </span>
      
    </div>
    <span className={`absolute bottom-[-2.5rem] ${additionalClass} showToltip__child  whitespace-nowrap   px-2 py-[0.4rem] rounded-lg bg-black text-[0.8rem] bg-opacity-80 text-white`}>
            {title}
        </span>
    </div>
  )
}

export default MenuIcon