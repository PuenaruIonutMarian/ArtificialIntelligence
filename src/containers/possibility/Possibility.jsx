import React from 'react';
import './possibility.css';
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className='gpt4__possibility section__padding' id="possibility">

      <div className='gpt4__possibility-content'>
<h4>Request Early Access to Get Started</h4>
<h1 className='gradient__text'>Unleash Your Imagination with Endless Possibilities</h1>
<p>Experience a journey where every step transcends the ordinary. Travel with the assistance of innovation, finding indulgence in the joy of transformation. Blessings abound in every exercise of thought, making attachment a boisterous celebration. Join our party of years, where orders are invitations, allowing the indulgence of curiosity.</p>
<h4>Request Early Access to Get Started</h4>

      </div>
            <div className='gpt4__possibility-image'>
        <img src={possibilityImage} alt='possibility'></img>
      </div>
    </div>
  )
}

export default Possibility;