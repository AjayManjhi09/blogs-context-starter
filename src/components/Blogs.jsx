import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


const Blogs = () => {
    const{loading, posts}=useContext(AppContext);
  return (
    <div className=' w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[60px] mb-[70px] justify-center items-center'>
        {
            loading ? (<Spinner/>) : 
            (
                posts.length === 0 ? 
                (<div>
                    <p>No Posts Found</p>
                </div>) :
                 (posts.map( (post) =>(
                    <div key={post.id}>
                        <p className=' font-bold text-lg'>{post.title}</p>

                        <p className='text-sm mt-2'>
                            By <span className=' italic'>{post.author}</span> on <span className=' underline font-bold'>{post.category}</span>
                        </p>

                        <p className=' text-[10px] mt-'>
                            Posted on {post.date}
                        </p>

                        <p className='text-md mt-4'>{post.content}</p>

                        <div className=' text-xs mt-2 underline font-bold text-blue-600'>
                            {post.tags.map( (tag, index) =>{
                                return <span key={index} className="mr-2">{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                 )))
            )
        }
    </div>
  )
}

export default Blogs