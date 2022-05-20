import React from 'react'
import './Header.css';
import duniyaLogo from '../images/duniyalogo.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
  
  
  const openSideNavBar = () => {
    const sideNavParent = document.querySelector('.sidenav-parent');
    const sideNav = document.querySelectorAll('.sidenav')[0];
    const iconBar = document.querySelectorAll('.iconbar')[0];

    sideNavParent.style.width = '100%';
    sideNav.style.width = '300px';
    iconBar.style.display = 'none';
  }
  const closeSideNavBar = () => {
    const sideNavParent = document.querySelector('.sidenav-parent');
    const sideNav = document.querySelectorAll('.sidenav')[0];
    const iconBar = document.querySelectorAll('.iconbar')[0];

    sideNavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBar.style.display = 'block';
  }

 

  return (
    <header>
      <span class="iconbar" title="Menu" onClick={openSideNavBar}>&#9776;</span>

      <a href="/" class="brand-title">
          <figure class="swing">
            <img src={duniyaLogo} width='300px' height='70px' />
          </figure>  
      </a>

      <div class="headernav">
          <ul>
            
            <li class="dropdown">
              <a href="#">Browse</a>              
              <ul>
                <li>                  
                  
                  <a href='/blogs'>Blogs</a>
                  <a href='oldlaptops'>Old Laptops</a>
                </li>
                
                 <li>
                  <a href="/socialnetwork">Social Network</a>
                  <a href="/findafriend">Find a Friend</a>
                </li>

                <li>
                  <a href="/orderfood">Order Food</a>
                  <a href='/bookatable'>Book a Table</a>
                  
                </li>
                {/* <li>
                  <a href="/onlineshopping">Online Shopping</a>
                  <a href='/sellonline'>Sell Online</a>
                </li>
                <li>
                  <a href="/kittyparty">Kitty Party</a>
                  <a href="/Business Gathering">Group Gathering</a>
                  
                </li>

                <li>
                  <a href="/dinnerout">Dinner Out</a>
                  <a href="/meetmeatbar">Meet me at Bar</a>
                  
                </li>

                <li>
                  <a href="/organizeevent">Organize Event</a>
                  <a href="/attendevent">Attend Event</a>                
                </li> 
               
                <li>
                  <a href="/organizeevent">Organize Sports Tournament</a>
                  <a href="/attendevent">Attend Sports Tournament</a>                
                </li> 
              
                <li>
                  <a href="/dropmyparcel">Drop my Parcel</a>
                  <a href="/receivemyparcel">Receive my parcel</a>
                </li>               

                <li>
                  <a href="/groupactivity">Group Activity</a>
                  <a href="/realestates">Coffee Together</a>
                </li>
                
                                   
                <li>
                  <a href="/onlinelearning">Learn Online</a>
                  <a href="/onlinelearning">Teach Online</a>
                </li> 

                <li>
                  <a href="/hireaservice">Hire a Service</a>
                  <a href="/giveaservice">Give a Service</a>
                </li>                
                
                <li>
                  <a href="/findajob">Find a Job</a>
                  <a href="/findalabour">Find a Labour</a>
                </li>
                 
                <li>
                  <a href="/socialservice">Social Service</a>
                  <a href="/artsactivities">Arts Activities</a>
                </li>
               
                <li>
                  <a href="/findvolunteer">Find Volunteer</a>
                  <a href="/becomevolunteer">Become Volunteer</a>
                </li>

                <li>
                  <a href="/letsexercisetogether">Let's Exercise Together</a>
                  <a href="/letsclubtogether">Let's Club Together</a>
                </li>
  */}
                <li>
                  <a href="/allcategories">All Categories</a>
                </li>

            </ul>
            </li> 
         
          </ul>
          
          <ul>
           <li>              
              <a href="/watchlist" >Watchlist</a>
            </li> 
            <li>
              <Link className='links' to='/blogs'>Blogs</Link>
            </li>
            <li>              
              <a href="/favourites">Favourites</a>
            </li>
            <li>              
              <a href="/trending">Trending</a>
            </li>

            <li class="my-duniya">              
              <a href="/myduniya">My Duniya</a>
            </li>
            
            

          </ul>
          
        </div>
      
        <div class="sidenav-parent" onClick={closeSideNavBar}>
        <div class="sidenav">
          <ul>
            <li>
              <a class="closeBtn" title="Close" onClick={closeSideNavBar}>&times;</a>
            </li>
            <li><Link className='links' to='/'>Home</Link></li>        
            <li><Link className='links' to='/about'>About</Link></li>
            <li><Link className='links' to='/posts'>Posts</Link></li>
          
            <li><Link className='links' to='/form'>New Post</Link></li>
            <li><Link className='links' to='/memories'>Memories</Link></li>
           
         
          </ul>
          
          <ul>
           <li>              
              <a href="/watchlist" >Watchlist</a>
            </li> 
            <li>
              <Link className='links' to='/blogs'>Blogs</Link>
            </li>
            <li>              
              <a href="/favourites">Favourites</a>
            </li>
            <li>              
              <a href="/trending">Trending</a>
            </li>

            <li class="my-duniya">              
              <a href="/myduniya">My Duniya</a>
            </li>
            
            {/* 
            <li>  
              <a href="#" onclick="openSignInModal()">View Cart</a>              
            </li>
            <li>
              <a href="/getstarted">Get Started</a>
            </li>
            <li>
              <a href="/#howitworkscontent">How It Works</a>
            </li>
            <li>
              <a href="#" onclick="openSignInModal()">Sign in</a>
            </li>
            <li>
              <a href="#" onclick="openSignUpModal()">Sign up</a>
            </li>       
            
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Watchlist</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Favourites</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Knowledge</a>
            </li>
            
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">About</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Social Networking</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Find a Job</a>
            </li>
            <li>
              <a href="/#whyuscontent" onclick="closeSideNav()">Find a Labour</a>
            </li>
            <li>
              <a href="/#whyuscontent" onclick="closeSideNav()">Post an advertisement</a>
            </li>
            <li>
              <a href="/#whyuscontent" onclick="closeSideNav()">All Advertisements</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Online Shopping</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Real Estate</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Online Learning</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Social Networking</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Give a Service</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Hire a Service</a>
            </li>
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Find Friend</a>
            </li>
            <li>
              <a href="/#servicescontent" onclick="closeSideNav()">Services</a>
            </li> 
            <li>
              <a href="/#aboutcontent" onclick="closeSideNav()">Cars & Vehicles</a>
            </li> 
            <li>
              <a href="/#whyuscontent" onclick="closeSideNav()">Why Us</a>
            </li>
            
            <li>
              <a href="/templates" onclick="closeSideNav()">All Categories</a>
           
            </li>
             
            <li>
              <a href="#" onclick="openSignInModal()">Find Freelancer</a>
            </li> 
            */}           
            <li>
              <a href="/career" onclick="closeSideNav()">Career</a>
            </li>
            <li>
              <a href="/employees" >Employees</a>
            </li> 
            <li>
              <a href="/admin">Admin Staff</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li> 
            <li>
              <a href="/help">Help</a>
            </li>             
            <li>
              <a href="/contact" >Contact</a>
            </li>  
                    
          </ul> 
                 
        </div>

         
      </div> 
      <script>
        
      </script> 
    </header>
  )
}

export default Header