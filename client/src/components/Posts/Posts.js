import React from 'react'
import './Posts.css'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import moment from 'moment';
const Posts = ({postData, setPostData, handleSubmit, handleClear, currentId, setCurrentId}) => {
  const posts = useSelector((state) => state.posts);

    console.log(posts);

  return (
    <>
        <h2>Memories</h2>
        <div className='memories-container'>          
          <div className='row'>
            <div className='column col-1'>
                  <Post
                posts={posts}
                postData={postData}
                setPostData={setPostData}
                handleSubmit={handleSubmit}
                handleClear={handleClear}

                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            </div>
            <div className='column col-2'>
            <ul>
        {posts.map((post) => (
          <li >
            <div className='post-card-container'>
              <div className='row row-1'>
                <div className='column col-1'>
                  <h3>{post.Creator}</h3><br/>
                  <h4>{moment(post.CreatedAt).fromNow()}</h4>
                </div>
                <div className='column col-2'>
                  <button onClick={() => setCurrentId(post._id)} className='edit-button'><h2>...</h2></button>
                </div>
              </div>
              <div className='row row-2'>
                  <span>{post.Tags}</span>
              </div>
              <div className='row row-3'>
                <h2>{post.Title}</h2>
              </div>
              <div className='row row-4'>
                <p>
                  {post.Message}
                </p>
              </div>
              <div className='row row-5'>
                <div className='column col-1'>
                  <a href='#'>Like</a>
                </div>
                <div className='column col-2'>
                  <a >Delete</a>
                </div>
              </div>
            </div>
            <br/>            
          </li> 
                   
        )).reverse()}
        </ul>
            </div>
            
          </div>
        </div>
        <br/>
        
        
        
        
    </>
  )
}

export default Posts



