import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label><br/>
        <input 
            id='search'
            type='text'
            placeholder='Search Box'
            value={search}
            onChange={(e) => setSearch(e.target.value) }
        />
    </form>
    <ul>
        <li><Link className='links' to='/'>Home</Link></li>        
        <li><Link className='links' to='/about'>About</Link></li>
        <li><Link className='links' to='/posts'>Posts</Link></li>
       
        <li><Link className='links' to='/form'>New Post</Link></li>
        <li><Link className='links' to='/memories'>Memories</Link></li>
        <li><Link className='links' to='/contact'>Contact</Link></li>


    </ul>
    <div className='nav-browser-dropdown'>
  <button className='dropbtn'>Browser</button>
  <div className='dropdown-content'>
    
      <a href='/blogs'>Blogs</a>
      <a href='oldlaptops'>Old Laptops</a>
      <a href="/socialnetwork">Social Network</a>
      <a href="/findafriend">Find a Friend</a>
      <a href="/orderfood">Order Food</a>
      <a href='/bookatable'>Book a Table</a>   
   
  </div>
</div>
    
</nav>
  )
}

export default Nav