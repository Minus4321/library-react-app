import React from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Discounted from './components/Discounted';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
