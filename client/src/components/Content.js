import React from 'react';
import Posts from './Posts/Posts';

import './Content.css';

const Content = ({postData, setPostData, handleSubmit, handleClear, currentId, setCurrentId}) => {
  return (
    <main>
        {/* <h1>Content</h1> */}
        
        
        <Posts
            postData={postData}
            setPostData={setPostData}
            handleSubmit={handleSubmit}
            handleClear={handleClear}

            currentId={currentId}
            setCurrentId={setCurrentId}
        />
    </main>
  )
}

export default Content