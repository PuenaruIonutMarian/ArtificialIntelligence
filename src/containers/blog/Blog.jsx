import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className='gpt4__blog section__padding' id='blog'>
      <div className='gpt4__blog-heading'>
      <h1 className='gradient__text'>
        Unveiling the Unseen: Our Journey through the Latest Happenings
      </h1>
      </div>
      <div className='gpt4__blog-container'>
        <div className='gpt4__blog-container_groupA'> <Article imgUrl={blog01} date="Nov 1, 2023" title="Artificial Intelligence is the future."/></div>
        <div className='gpt4__blog-container_groupB'> <Article imgUrl={blog02} date="Nov 1, 2023" title="Artificial Intelligence is the future."/><Article imgUrl={blog03} date="Nov 1, 2023" title="Artificial Intelligence is the future."/><Article imgUrl={blog04} date="Nov 1, 2023" title="Artificial Intelligence is the future."/><Article imgUrl={blog05} date="Nov 1, 2023" title="Artificial Intelligence is the future."/></div>
      </div>
    </div>
  )
}

export default Blog