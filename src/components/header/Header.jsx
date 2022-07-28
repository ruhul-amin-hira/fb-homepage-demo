import React from 'react'
import { BsFacebook, BsMessenger } from 'react-icons/bs';
import {GrSearch} from "react-icons/gr"
import CategoryIcon from './CategoryIcon';
import {HiHome} from "react-icons/hi"
import {MdOutlineOndemandVideo, MdGroups, MdNotifications} from "react-icons/md"
import {SiFacebookgaming} from "react-icons/si"
import MenuIcon from './MenuIcon';
import {CgMenuGridO} from "react-icons/cg"
import {RiMessengerFill} from "react-icons/ri"


const Header = () => {
  return (
    <div className='px-[16px] h-[56px] bg-white flex items-center justify-between header__shadow'>
        <div className='flex'>
          <a href="/">
            <BsFacebook className='text-[40px] text-fb-blue'/>
          </a>
          <div className='flex items-center p-2 w-[40px] h-[40px] xl:w-auto pl-3 bg-fb-gray max-w-[240px] ml-2 rounded-full'>
            <GrSearch className='text-fb-gray1  xl:mr-2'/>
            <input type="text" placeholder='Search Facebook' className='placeholder:text-fb-gray1 focus:outline-none bg-transparent hidden xl:block' />
          </div>
        </div>
        {/* Middle part */}
        <div className=' items-center hidden lg:flex'>
          <CategoryIcon active={true} title="Home">
            <HiHome/>
          </CategoryIcon>
          <CategoryIcon title="Watch">
            <MdOutlineOndemandVideo/>
          </CategoryIcon>
          <CategoryIcon title="Groups">
            <MdGroups/>
          </CategoryIcon>
          <CategoryIcon title="Gaming">
            <SiFacebookgaming/>
          </CategoryIcon>
        </div>
        {/* Right Icons */}
        <div className='flex'>
          <MenuIcon title={"Menu"} adiClass={"left-[9%]"}>
            <CgMenuGridO/>
          </MenuIcon>
          <MenuIcon title={"Messenger"}>
            <RiMessengerFill/>
          </MenuIcon>
          <MenuIcon title={"Notifications"}>
            <MdNotifications/>
          </MenuIcon>
          <MenuIcon title={"Your profile"} adiClass={"left-[-60%]"}>
            <img src="/logo192.png" alt="profile image" />
          </MenuIcon>
        </div>
    </div>
  )
}

export default Header