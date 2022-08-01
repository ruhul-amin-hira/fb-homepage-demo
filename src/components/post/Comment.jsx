import React from 'react'
import User from '../User'

const Comment = ({ name, comment, time, title, imgLink }) => {
  const times = new Date(parseInt(time)).getHours()
  return (
    <div className='pt-2'>
      <div className='flex'>
        <User title={title} imgLink={`/users/${imgLink}`} />
        <div className='ml-2 flex flex-col'>
          <div className='bg-fb-gray rounded-2xl p-2 self-start'>
            <h2 className='text-[0.9rem] font-semibold'>{name}</h2>
            <p className='text-gray-700'>{comment}</p>
          </div>
          <div className='flex justify-between pt-[1px] min-w-[150px] pl-2'>
            <h3 className='text-[0.8rem] font-semibold text-fb-gray-font'>Like</h3>
            <h3 className='text-[0.8rem] font-semibold text-fb-gray-font'>Reply</h3>
            <p className='text-[0.8rem] text-fb-gray-font'>{times}h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment