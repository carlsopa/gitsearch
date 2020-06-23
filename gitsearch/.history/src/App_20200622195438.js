import React,{useState,useEffect} from 'react';
import './App.css';
import Profile from './components/profile';
import Repos from './components/repos';


function App() {
  const [searchTerm,setSearchTerm] = useState('')
  const [loading,setLoading] = useState(false);
  useEffect(()=>{

  },[searchTerm])
  return (
    <div className="App">
      <header>
        <div id="header">Git Search</div>
        <input type="text" id="gitSearch" placeholder="git profile...."/>
        <a href="#" onClick={(e)=>alert(document.getElementById('gitSearch').value())}>Submit</a>
      </header>
      <Profile/>
      <Repos/>
    </div>
  );
}

export default App;
