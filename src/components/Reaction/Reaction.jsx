import React from 'react'
import { AiFillHeart, AiFillLike } from 'react-icons/ai'
import { BsEmojiAngryFill, BsEmojiDizzyFill, BsEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiLaughingFill } from 'react-icons/bs'
import SingleReaction from './SingleReaction'

const Reaction = () => {
  return (
    <div className='flex p-2 bg-white border-2 rounded-full border-fb-gray2 general__shadow'>
      <SingleReaction title={"like"}>
        <AiFillLike className='text-fb-blue' />
      </SingleReaction>
      <SingleReaction title={"love"}>
        <AiFillHeart className='text-red-600' />
      </SingleReaction>
      <SingleReaction title={"Care"}>
        <BsFillEmojiHeartEyesFill className='text-[#F5D967]' />
      </SingleReaction>
      <SingleReaction title={"Haha"}>
        <BsFillEmojiLaughingFill className='text-[#F5D967]' />
      </SingleReaction>
      <SingleReaction title={"Wow"}>
        <BsEmojiDizzyFill className='text-[#F5D967]' />
      </SingleReaction>
      <SingleReaction title={"Sad"}>
        <BsEmojiFrownFill className='text-[#F5D967]' />
      </SingleReaction>
      <SingleReaction title={"Angry"}>
        <BsEmojiAngryFill className='text-[#E8313B]'/>
      </SingleReaction>
    </div>
  )
}

export default Reaction