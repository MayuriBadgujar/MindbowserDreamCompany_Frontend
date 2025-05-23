import React, { useEffect, useState } from 'react';
import LatestPost from '../Components/LatestPost';
import { get } from '../services/Endpoint';

export default function Home() {

  return (
    <>
      <div className="container-fluid bg-dark hero-section text-center">
        <h1 className="fs-1 fw-bold text-light">"A Thoughtful Space for Curious Minds"</h1>
        <p className="text-light fs-5 mt-3">
          Where words paint worlds, and thoughts take flight. Explore the beauty hidden in everyday moments and ideas waiting to be discovered."


        </p>
      </div>

<div className='container-fluid  p-5'>

    <LatestPost />

</div>
    </>
  );
}
