import React from 'react'
import Form from '../../Form/Form'
/*import { card, cardActions, cardContent, CardMedia, Button, Typography, Card } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'*/
const Post = ({postData, setPostData, handleSubmit, handleClear, currentId, setCurrentId}) => {
  return (
    <>
        {/* <h2>Post</h2> */}
      
        <Form
          postData={postData}
          setPostData={setPostData}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
    </>
  )
}

export default Post