import React from 'react'
import { MdVideoCameraBack } from 'react-icons/md'
import CreatePostIcon from './CreatePostIcon'
import { IoMdPhotos } from 'react-icons/io'
import { BiHappyAlt } from 'react-icons/bi'

const CreatePost = () => {
  return (
    <div className='bg-white px-4 rounded-lg general__shadow'>
        <div className='flex items-center py-3 border-b-[1px] general__border'>
        <div className='w-[32px] h-[32px] '>
           <img src="/logo192.png" alt="Profile" className='bg-black rounded-full' />
        </div>
        <input type="text" placeholder="what's on your mind, Ruhul Amin?" className='ml-2 bg-fb-gray py-2 px-3 h-[40px] rounded-full placeholder:text-fb-gray1 focus:outline-none grow md:text-lg text-base' />
        </div>
        <div className='flex py-3'>
            <CreatePostIcon title={"Live video"} >
                <MdVideoCameraBack className='text-[#E73F5A]'/>
            </CreatePostIcon>
            <CreatePostIcon title={"Photo/video"}>
                <IoMdPhotos className='text-[#41B35D]'/>
            </CreatePostIcon>
            <CreatePostIcon title={"Feeling/activity"}>
                <BiHappyAlt className='text-[#ECC059]'/>
            </CreatePostIcon>
        </div>
        
    </div>
  )
}

export default CreatePost