import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import {GrSearch} from "react-icons/gr"
import CategoryIcon from './CategoryIcon';
import {HiHome} from "react-icons/hi"
import {MdOutlineOndemandVideo, MdGroups} from "react-icons/md"
import {SiFacebookgaming} from "react-icons/si"

const Header = () => {
  return (
    <div className='px-[16px] h-[56px] bg-white flex items-center justify-between'>
        <div className='flex'>
          <a href="/">
            <BsFacebook className='text-[40px] text-fb-blue'/>
          </a>
          <div className='flex items-center p-2 bg-fb-gray max-w-[240px] ml-2 rounded-full'>
            <GrSearch className='text-fb-gray1 mr-2'/>
            <input type="text" placeholder='Search Facebook' className='placeholder:text-fb-gray1 focus:outline-none bg-transparent' />
          </div>
        </div>
        {/* Middle part */}
        <div className='flex items-center'>
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
    </div>
  )
}

export default Header