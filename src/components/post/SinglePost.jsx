import React, { useState } from 'react'
import User from '../User'
import { AiFillLike } from "react-icons/ai"
import CreatePostIcon from './CreatePostIcon'
import { BiLike, BiMessage } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import Comment from './Comment'
import Reaction from '../Reaction/Reaction'

const SinglePost = ({ post }) => {
    const [show, setShow] = useState(false)

    const time = new Date(parseInt(post?.posted_on)).toLocaleString()
    // console.log(post, time)
    return (
        <div className='bg-white mt-4 general__shadow rounded-lg'>
            <div className='flex p-4 pb-0 items-center'>
                <User title={post.user?.name} imgLink={`/users/${post?.user?.profile_picture}`} />
                <div className='pl-2'>
                    <h1 className='capitalize font-semibold text-base leading-[0.75rem]'>{post?.user?.name}</h1>
                    <span className='text-[0.75rem] text-fb-gray-font'>{time}</span>
                </div>
            </div>
            {
                post && post?.text &&
                <div className='px-4 pt-1'>
                    <p>
                        {post.text}
                    </p>
                </div>
            }
            {
                post && post?.image &&
                <div className='pt-3'>
                    <img src={`/posts/${post?.image}`} alt={"post"} />
                </div>
            }

            {
                post && (post?.likes || post?.comments.length) > 0 &&
                <div className='flex justify-between items-center px-4 pt-2 '>
                    {post?.likes &&
                        <div className='flex items-center'>
                            <AiFillLike className='p-[3px] text-xl rounded-full bg-fb-blue text-white' />
                            <p className='general__text pl-2'>
                                {post.likes > 1 ?
                                    <span>{post.last_like} and {post.likes - 1} others</span>
                                    :
                                    <span>{post.last_like}</span>
                                }
                            </p>
                        </div>
                    }

                    <span className='general__text'>{post?.comments.length} Comments</span>
                </div>

            }

            <div className='px-4 py-2'>
                <div className='flex py-1  my-[1px] border-b-[1px] border-t-[1px] general__border relative'>
                    <div className='group w-[33%]'>
                        <CreatePostIcon title={"Like"}>
                            <BiLike className='text-fb-gray1' />
                            <div className='absolute md:top-[-100%] top-[-65%] left-0 hidden group-hover:block'>
                                <Reaction />
                            </div>
                        </CreatePostIcon>
                    </div>
                    <CreatePostIcon title={"Comment"}>
                        <BiMessage className='text-fb-gray1' />
                    </CreatePostIcon>
                    <CreatePostIcon title={"Share"}>
                        <RiShareForwardLine className='text-fb-gray1' />
                    </CreatePostIcon>
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div className='flex'>
                    <User title={"md asn"} imgLink={"/logo192.png"} />
                    <input type="text" placeholder='Write a comment...' className='h-[36px] ml-2 bg-fb-gray py-2 px-3 rounded-full placeholder:text-fb-gray1 focus:outline-none grow md:text-lg placeholder:text-[0.9rem]' />
                </div>
                <div>
                    {
                        post && post?.comments.map((el, index) => {
                            return <span className={`${index != 0 && !show ? "hidden" : ""}`}>
                                <Comment title={el.user?.name} name={el.user?.name} imgLink={el.user?.profile_picture} comment={el.text} time={el.created_at} />
                            </span>
                        })
                    }
                </div>
                {/* show more comments */}
                {
                    !show && post?.comments.length > 1 ? <h2 className='text-[0.9rem] font-semibold text-fb-gray-font hover:underline cursor-pointer' onClick={() => setShow(true)} >View {post.comments.length - 1} more comments</h2>
                        :

                        <h2 className='text-[0.9rem] font-semibold text-fb-gray-font hover:underline cursor-pointer pt-2'>Write a comment...</h2>
                }


            </div>

        </div>
    )
}

export default SinglePost