//import logo from './logo.svg';
import {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import { useDispatch} from 'react-redux';
import { getPosts, createPost, updatePost } from './actions/posts';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Missing from './components/Missing';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Blogs from './components/Blogs';
import OldLaptops from './components/OldLaptops';
import FindAFriend from './components/FindAFriend';
import SocialNetwork from './components/SocialNetwork';
import OrderFood from './components/OrderFood';
import BookATable from './components/BookATable';
import AllCategories from './components/AllCategories';
import WatchList from './components/WatchList';
import Favourites from './components/Favourites';
import Trending from './components/Trending';
import MyDuniya from './components/MyDuniya';
import Contact from './components/Contact';
//import { updatePost } from '../../server/controllers/posts';
function App() {

  //
  const [ currentId, setCurrentId ] = useState(null);
  const [postData, setPostData] = useState({
    Creator: '', 
    Title: '',
    Message: '',
    Tags: '',
    SelectedFile: ''

  });

  //
  const [search, setSearch] = useState('');
  //
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))

    }
    handleClear();
    //dispatch(createPost(postData))
    /*setPostData({
      Creator: '', 
    Title: '',
    Message: '',
    Tags: '',
    SelectedFile: ''
    });
    */
  }

  const handleClear = () => {
    setCurrentId(null);
    setPostData({
      Creator: '', 
    Title: '',
    Message: '',
    Tags: '',
    SelectedFile: ''
    });
  }
  //
  //
  const sideNavParent = document.querySelector('.sidenav-parent');
  const sideNav = document.querySelectorAll('.sidenav')[0];
  const iconBar = document.querySelectorAll('.iconbar')[0];

  
  const openSideNavBar = () => {
    sideNavParent.style.width = '100%';
    sideNav.style.width = '300px';
    iconBar.style.display = 'none';
  }
  const closeSideNavBar = () => {
    sideNavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBar.style.display = 'block';
  }
  //

  useEffect(() => {

    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <div className="App">
      <Header/> 
      <br/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
      <Route
          path='/memories' element={
            <Content
        postData={postData}
        setPostData={setPostData}
        handleSubmit={handleSubmit}
        handleClear={handleClear}

        currentId={currentId}
        setCurrentId={setCurrentId}
      />
          }
        />
        <Route
          path='/' element={<Home/>}
        />
        <Route
          path='/about' element={<About/>}
        />
        <Route
          path='/watchlist' element={<WatchList/>}
        />
        <Route
          path='/blogs' element={<Blogs/>}
        /> 
        <Route
          path='/favourites' element={<Favourites/>}
        />        
        <Route
          path='/trending' element={<Trending/>}
        /> 
        <Route
          path='/myduniya' element={<MyDuniya/>}
        /> 
        <Route
          path='/oldlaptops' element={<OldLaptops/>}
        />
        <Route
          path='/socialnetwork' element={<SocialNetwork/>}
        />
         <Route
          path='/findafriend' element={<FindAFriend/>}
        />
        <Route
          path='/orderfood' element={<OrderFood/>}
        />
        <Route
          path='/bookatable' element={<BookATable/>}
        />
        <Route
          path='/allcategories' element={<AllCategories/>}
        />
        <Route
          path='/posts' element={
            <Posts
            postData={postData}
            setPostData={setPostData}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
            currentId={currentId}
            setCurrentId={setCurrentId}
        />
          }
        />
       <Route
          path='/form' element={
            <Form
            postData={postData}
            setPostData={setPostData}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
          />            
          }
       />
       <Route
          path='/contact' element={<Contact/>}
        />
        <Route
          path='/*' element={<Missing/>}
        />
      </Routes>
      
      
      

      <Footer/>
    </div>
  );
}

export default App;
