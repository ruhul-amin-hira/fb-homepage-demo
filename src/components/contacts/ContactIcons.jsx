import React from 'react'

const ContactIcons = ({title, children, adiClass=""}) => {
    const additionalClass = adiClass ? adiClass : "left-[-50%]"
  return (
    <div className={` showToltip relative`}>
    <div className={`cursor-pointer h-8 w-8 flex items-center justify-center hover:bg-fb-gray3  ml-[1.2] rounded-full  mx-1`}>
       <span className='text-[1.3rem] text-fb-gray1'>
           {children}
       </span>
     
   </div>
   <span className={`absolute bottom-[-2.2rem] ${additionalClass} showToltip__child   whitespace-nowrap   px-2 py-[0.4rem] rounded-lg bg-black text-[0.8rem] bg-opacity-80 text-white`}>
           {title}
       </span>
   </div>
  )
}

export default ContactIcons