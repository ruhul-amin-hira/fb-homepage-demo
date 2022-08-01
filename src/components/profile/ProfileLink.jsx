import React from 'react'

const ProfileLink = ({title, children, colorfull=true}) => {

  const applyColor = colorfull ? "text-fb-blue" : "";
  
  return (
    <div className='flex items-center p-2 hover:bg-fb-gray3 w-full rounded-md cursor-pointer'>
        <span className={`w-[36px] h-[36px] text-[2.2rem] rounded-full ${applyColor}`}>
        {children}
        </span>
       
        <p className='pl-3'>{title}</p>
    </div>
  )
}

export default ProfileLink