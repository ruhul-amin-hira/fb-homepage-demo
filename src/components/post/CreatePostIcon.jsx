import React from 'react'


const CreatePostIcon = ({children, title}) => {
  return (
    <div className='flex grow justify-center items-center p-2 hover:bg-fb-gray rounded-md cursor-pointer'>
        <span className={`w-[24px] h-[24px] text-2xl`}>
            {children}
        </span>
        <span className='ml-2 text-fb-gray1 font-semibold text-sm md:text-base whitespace-nowrap'>
            {title}
        </span>
    </div>
  )
}

export default CreatePostIcon