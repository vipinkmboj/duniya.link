import React from 'react'
import FileBase from 'react-file-base64';

const Form = ({postData, setPostData, handleSubmit, handleClear}) => {
  return (
    <>
        <h1>Form</h1>
        <form className='postForm' onSubmit={handleSubmit}>
        <label>Creator</label><br/>
        <input 
          name='creator'
          type='text'
          value={postData.Creator}
          onChange={(e) => setPostData({...postData, Creator: e.target.value})}
        /><br/>
         <label>Title</label><br/>
        <input 
          name='title'
          type='text'
          value={postData.Title}
          onChange={(e) => setPostData({...postData, Title: e.target.value})}
        /><br/>
         <label>Message</label><br/>
        <input 
          name='message'
          type='text'
          value={postData.Message}
          onChange={(e) => setPostData({...postData, Message: e.target.value})}
        /><br/>
         <label>Tags</label><br/>
        <input 
          name='tags'
          type='text'
          value={postData.Tags}
          onChange={(e) => setPostData({...postData, Tags: e.target.value})}
        /><br/>
          <label>File</label><br/>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, SelectedFile: base64}) }
          />
          <br/>

        <button type='submit'>Submit Post</button>
        <br/>
        <button type='submit' onClick={handleClear}>Clear</button>

        </form>
        
    </>
  )
}

export default Form