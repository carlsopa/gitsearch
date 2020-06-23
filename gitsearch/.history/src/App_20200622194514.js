import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import Repos from './components/repos';


function App() {
  return (
    <div className="App">
      <Profile/>
      <Repos/>
    </div>
  );
}

export default App;
