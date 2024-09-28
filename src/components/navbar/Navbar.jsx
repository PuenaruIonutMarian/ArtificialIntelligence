import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/artificial-intelligence.png';
import './navbar.css';


const Menu = () => (
  <>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt4'>Open AI's GPT-4</a></p>
          <p><a href='#possibility'>Capabilities</a></p>
          <p><a href='#features'>About</a></p>
          <p><a href='#blog'>Press</a></p>
          </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt4__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt4__navbar-sign'>
        <p> Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt4__navbar-menu'>
    {toggleMenu 
    ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
    : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}/>}
    {toggleMenu && (
      <div className='gpt4__navbar-menu_container scale-up-center'>
        <div className='gpt4__navbar-menu_container-links'>
          <Menu />
          <div className='gpt4__navbar-menu_contianer-links-sign'>
            <p> Sign in</p>
            <button type='button'>Sign up</button>
          </div>
        </div>
      </div>
    )}
      </div>
    </div>
  )
}

export default Navbar