import React from 'react'
import './FindAFriend.css'
//import { Link } from 'react-router-dom';
const FindAFriend = () => {
  return (
    <main>
        <h1>Find a Friend</h1>
        <div className='find-a-friend'>
            <form className='form-class'>
              <input 
              name='email'
              type="text"
              placeholder='Email Address or Username...'
              />
              <br/>
              <input
                name='password'
                type='text'
                placeholder='Password...'
              />
              <br/>
              <button type='submit'>Log in</button>
            </form>   
            <a href='/forgotusername'>Forgot Username</a>
            <br/>         
            <a href='/forgotpassword'>Forgot Password</a>
            <br/>
            <button className='create-account-button'>Create New Account</button>
        </div>
    </main>
  )
}

export default FindAFriend