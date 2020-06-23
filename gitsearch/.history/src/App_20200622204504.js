import React,{useState,useEffect} from 'react';
import './App.css';
import Profile from './components/profile';
import Repos from './components/repos';


function App() {
  const uri = 'https://api.github.com/users/'
  const [searchTerm,setSearchTerm] = useState('')
  const [loaded,setLoaded] = useState(false);
  const [results, setResults] = useState([])
  const [error,setError] = useState('')
  const FetchUser=()=>{
    setSearchTerm(document.getElementById('gitSearch').value)
    fetch(uri+searchTerm)
    .then(res=>res.json())
    .then(
      (result)=>{
        setLoaded(true)
        setResults(result)
      },
      (error)=>{
        setLoaded(true)
        setError(error)
      }
    )
  }

  results.length===0?console.log('goood'):console.log('bad')
  return (
    <div className="App">
      <header>
        <div id="header">Git Search</div>
        <input type="text" id="gitSearch" placeholder="git profile...."/>
        <a href="#" onClick={(e)=>FetchUser()}>Submit</a>
      </header>
      <Profile/>
      <Repos/>
    </div>
  );
}

export default App;
