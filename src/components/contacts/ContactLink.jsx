import React from 'react'
import ProfileLink from '../profile/ProfileLink'
import {GoPrimitiveDot} from "react-icons/go"

export const ContactLink = ({title, imgLink}) => {
  return (
   <ProfileLink title={title} colorfull={false}>
    <div className='relative w-full h-full'>
       <img src={imgLink} alt={`${title}`} className="img__fit" />
       <span className='absolute bottom-[-25%] right-[-21%]'>
          <GoPrimitiveDot className='text-[25px]  text-fb-gray' />
       </span>
       <span className='absolute bottom-[-15%] right-[-12%]'>
          <GoPrimitiveDot className='text-[18px]  text-green-600' />
       </span>
    </div>
     
   </ProfileLink>
  )
}
