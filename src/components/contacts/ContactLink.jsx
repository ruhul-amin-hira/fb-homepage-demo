import React from 'react'
import ProfileLink from '../profile/ProfileLink'
import {GoPrimitiveDot} from "react-icons/go"
import User from '../User'

export const ContactLink = ({title, imgLink}) => {
  return (
   <ProfileLink title={title} colorfull={false}>
    <User title={title} imgLink={imgLink}/>
   </ProfileLink>
  )
}
