import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import SinglePost from './SinglePost'

const MainPage = () => {

  const [post, setPost] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4004/posts")
    .then((res) => res.json())
    .then((data)=> {
     // console.log(data)
      setPost(data)
    })
  },[])
  return (
    <div className='flex flex-col'>
        <CreatePost />
        {
          post && post.map((el,index) =>{
            return  <SinglePost post={el} key={index} />
          })
        }
       
    </div>
  )
}

export default MainPage