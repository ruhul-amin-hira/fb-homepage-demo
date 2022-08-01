import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { RiGroup2Fill } from 'react-icons/ri'
import ProfileLink from './ProfileLink'
import { ImHome } from 'react-icons/im'
import { MdKeyboardArrowDown, MdOndemandVideo } from 'react-icons/md'
import { GiBackwardTime } from 'react-icons/gi'

const Profile = () => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <ProfileLink title={"Ruhul Amin Hira"} colorfull={false}>
          <img src="/logo192.png" alt="Profile" className='bg-black rounded-full' />
        </ProfileLink>
        <ProfileLink title={"Friends"}>
          <BsPeopleFill />
        </ProfileLink>
        <ProfileLink title={"Groups"}>
          <RiGroup2Fill />
        </ProfileLink>
        <ProfileLink title={"Marketplace"}>
          <ImHome />
        </ProfileLink>
        <ProfileLink title={"Watch"}>
          <MdOndemandVideo />
        </ProfileLink>
        <ProfileLink title={"Memories"}>
          <GiBackwardTime />

        </ProfileLink>
        <ProfileLink title={"Saved"} colorfull={false}>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="saved icon" />
        </ProfileLink>
        <ProfileLink title={"See more"} colorfull={false}>
          <MdKeyboardArrowDown className='p-1 bg-slate-200 rounded-full'/>
        </ProfileLink>
      </div>
    </div>
  )
}

export default Profile