import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Fine-tuning perceptions with swift precision",
    text: "From the refined intellect of John, a wealth of insights unfolds. Witness the artistry of aging gracefully, mirroring the elegance that Mrs. holds dear. The applause resonates as household improvements unfold instantaneously, dissipating any lingering doubts."
  },
    {
    title: "Unlocking uncommon sympathy through occasional assistance",
    text: "In the realm of uncommon compassion, assistance takes on a vivid and sporadic form. Enabling activity becomes an art, a letter of transformation that tends to the soul. Witness the unfoldment of an active, empathetic journey."
  },
    {
    title: "Elegance, debate, and the art of nothing",
    text: "Led by curiosity, mistress relations unfold with an air of elegance, debating the intricacies of existence. In this realm, messages hold weight, yet they echo with the profundity of nothingness, creating a unique and sophisticated address."
  },
    {
    title: "Exploring laws through the eyes of county boys",
    text: "In the county's embrace, a girl unable to resist the charm of her sister explores the realms of law. Feet dance in rhythm with the law's creation, unfolding a tableau of rapid blushes. A built table becomes the stage for this law-induced spectacle, where every moment is crafted with precision."
  }
]

const Features = () => {
  return (
    <div className='gpt4__features section__padding' id="features">
    <div className='gpt4__features-heading'>
      <h1 className='gradient__text'>Embrace the Future Now: It's Time to Realize Your Potential. Step into Tomorrow Today and Make It Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt4__features-container'>
    {featuresData.map((item,index)=>(
      <Feature title={item.title} text={item.text} key={item.title + index} />
    ))}
    </div>
    </div>
  )
}

export default Features