import React,{useState,useEffect} from 'react';
import './App.css';
import'./design/git.css'
import Profile from './components/profile';
import Repos from './components/repos';
import Holder from './components/holder';


function App() {
  const uri = 'https://api.github.com/users/'
  const [searchTerm,setSearchTerm] = useState('')
  const [loaded,setLoaded] = useState(false);
  const [results, setResults] = useState([])
  const [error,setError] = useState('')
  const alpha=(data)=>{
    setSearchTerm(data);
  }
  const FetchUser=()=>{
    fetch(uri+searchTerm,{
      headers:{
        Authorization: "basic "+btoa('carlsopa')
      }
    })
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
  return (
    <div className="App">
      <header>
        {results.length!=0?<div><div className='header' id="header_search">Git Search</div>
        <input type="text" className='git_input' id="headerSearch" placeholder="git profile...." onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button className='git_submit' id='headersubmit' type="button" href="#" onClick={(e)=>FetchUser()}>Submit</button></div>:null}
      </header>
      {results.length===0?<Holder alpha={alpha} fetch={FetchUser}/>:      
      <div id="body"><Profile values={results}/><Repos values={results}/></div>}
    </div>
  );
}

export default App;
