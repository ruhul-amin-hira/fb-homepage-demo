import React from 'react'
import { GrSearch } from 'react-icons/gr'
import { MdVideoCall } from 'react-icons/md'
import ContactIcons from './ContactIcons'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { ContactLink } from './ContactLink'
import userList from './ContactList'

const Contacts = () => {
  return (
    <div>
       <div className='flex items-center justify-between'>
        <h1 className='text-fb-gray-font text-lg font-semibold'>Contacts</h1>
        <div className='flex'>
          <ContactIcons title={"New room"}>
            <MdVideoCall/>
          </ContactIcons>
          <ContactIcons title={"Search by name or group"} adiClass={"right-[30%]"}>
            <GrSearch className='text-[16px]'/>
          </ContactIcons>
          <ContactIcons title={"Options"}>
            <BiDotsHorizontalRounded/>
          </ContactIcons>
        </div>
      
       </div>
       <div className='pt-2'>
          {userList && userList.map((el, index) => {
            return <ContactLink title={el.name}  imgLink={`/users/${el.img}`} key={index} />
          })}
        </div>
    </div>
  )
}

export default Contacts