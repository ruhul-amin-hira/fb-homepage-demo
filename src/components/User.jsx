import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

const User = ({ imgLink, title, active = true }) => {
    return (
        <span className='flex w-[36px] h-[36px] text-[1.75rem] rounded-full '>
            <div className='relative w-full h-full'>
                <img src={imgLink} alt={`${title}`} className="img__fit bg-black" />
                <div className={active ? "block" : "hidden"}>
                    <span className='absolute bottom-[-25%] right-[-20%]'>
                        <GoPrimitiveDot className='text-[25px]  text-fb-gray' />
                    </span>
                    <span className='absolute bottom-[-15%] right-[-12%]'>
                        <GoPrimitiveDot className='text-[18px]  text-green-600' />
                    </span>
                </div>
            </div>
        </span>

    )
}

export default User