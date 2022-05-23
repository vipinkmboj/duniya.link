import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <main>        
        <h2>वसुधैव कुटुम्बकम </h2>
        <h3>The World Is One Family</h3>
        <h4>Duniya is <em>The Home To Everyone</em></h4>
        <div className='form-class-container'>
            <h2>Log in</h2>
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
            <br/>
            <span><a href='vipregistration'><em>Register</em></a> as a Celebrity, Brand or Business</span>

        </div>
        <br/><br/>
    </main>
  )
}

export default Home