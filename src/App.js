import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import  Banner from './Components/Banner/Banner'
import Row_posts from './Components/Row-posts/Row_posts';
import {actions,originals}from './urls'
function App() {
  return (
   <div>
    <Navbar/>
   <Banner/>
   <Row_posts url={originals} title="Netflix Originals"/>
   <Row_posts url={actions} title="Actions" isSmall/>
   </div> 
  )
}

export default App;
