import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/man-ai.png';

const Header = () => {
  return (
    <div className='gpt4__header section__padding' id='home'>
      <div className='gpt4__header-content'>
        <h1 className='gradient__text'>Let's Build the most Amazing apps with Artificial Intelligence</h1>
        <p>Explore the boundless possibilities of artificial intelligence with us.  Join us on a journey where years of expertise have paved the way for cutting-edge solutions. Your inquiries are not just allowed; they are encouraged as we strive to create a harmonious fusion of human understanding and AI brilliance.</p>
        <div className='gpt4__header-content__input'>
          <input type="email" placeholder="Your email adress"/>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt4__header-content__people'>
          <img src={people} alt='people' />
          <p>800 people demanded a visit in the last 48 hours</p>
        </div>
      </div>
            <div className='gpt4__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header