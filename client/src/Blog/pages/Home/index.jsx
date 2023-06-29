import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';

import './style.css'

import { blogList } from '../../config/data';
const Home = () => {
  const [blogs ] = useState(blogList);
  
  return (
    <div>
      <div>
      {/* Page Header */}
      <header className='home-header'>
      <h2>Inc. This Morning</h2>
       <h1>
      <span>“</span> Blog <span>”</span>
      </h1>
      <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
      </p>
      </header>
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
    </div>
  )
}

export default Home
