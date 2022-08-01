import React from 'react'


const SingleReaction = ({adiClass, children, title}) => {
    const additionalClass = adiClass ? adiClass : "md:left-[-5%] left-[-45%]"
    return (
        <div className=' cursor-pointer relative showToltip mx-1'>
            <span className='md:text-4xl text-xl'>
               {children}
            </span>
            <div className={`md:top-[-70%] top-[-100%] ${additionalClass} showToltip__child    absolute py-[2px] px-2 rounded-xl bg-black text-white`}>
                <p className='md:text-[0.8rem] text-[0.7rem] leading-4 '>{title}</p>
            </div>
        </div>
    )
}

export default SingleReaction