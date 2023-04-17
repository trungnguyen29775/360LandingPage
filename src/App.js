import './App.css';
import Home from './components/Home/Home';
import Solution from './components/Solution/Solution';
import About from './components/About/About';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";



function App() {
  const [navigation,setNavigation]=useState('Home')
  return (
    <div className="App">
      {/* Navigation */}
       <div className='Nav-container'>
                <div className='logo-container'>
                    <img src='./logo.jpg'></img>
                </div>
                <div className='nav-list'>
                    <button onClick={()=>setNavigation('About')}>
                        About
                    </button>
                    <button onClick={()=>setNavigation('Solution')}>
                        Solution
                    </button>
                    <button onClick={()=>setNavigation('About')}>
                        Gallery
                    </button>
                    <button onClick={()=>setNavigation('About')}>
                        Blog
                    </button>
                    <button onClick={()=>setNavigation('About')}>
                        Contact
                    </button>
                </div>
            </div>
      {
        navigation=='Home'?<Home></Home>:navigation=='About'?<About></About>:navigation=='Solution'?<Solution></Solution>:'Hello'

      }
      {/* Footer */}
      <div className='footer'>
                <h1>How can we help?</h1>
                <div className='contact-container'>
                    <div className='contact-title'>
                        <img src='./avt.jpg'>
                        </img>
                        <p>We'd love to hear about your next project! Email us a message and we’ll respond as soon as possible.</p>
                    </div>
                    <form>
                        <div className='input-container'>
                            <div className='input-info1'>
                                <input placeholder='Name'/>
                                <input placeholder='Email'/>
                            </div>
                            <input className='question-form' placeholder='How can we help'/>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                    <div className='brand-container'>
                        <p>© 2023 IUVTour</p>
                            <ul>
                                <FaFacebook/>
                                <BsInstagram/>
                                <AiFillGithub/>
                            </ul>
                    </div>
                    <a href='#'>Website design by IoT club</a>
            </div>
    </div>
  );
}

export default App;
