import React from 'react';
import './App.css';
import Profile from './components/profile';
import Repos from './components/repos';


function App() {
  return (
    <div className="App">
      <header>
        <div id="header">Git Search</div>
        <input type="text" id="gitSearch" placeholder="git profile...."/>
        <a href="#">Submit</a>
      </header>
      <Profile/>
      <Repos/>
    </div>
  );
}

export default App;
