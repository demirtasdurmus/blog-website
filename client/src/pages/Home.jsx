import React from 'react';
import '../../src/assets/styles/index.css';
import IndexView from "../IndexView/IndexView";


export default function Home() {
  return (
    <div className="mx-5">
      <IndexView />
      <h1 className='home'>HOME PAGE</h1>
    </div>
  );
}
