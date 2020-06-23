import React,{useState,useEffect} from 'react';
import './App.css';
import Profile from './components/profile';
import Repos from './components/repos';
import Holder from './components/holder';


function App() {
  const uri = 'https://api.github.com/users/'
  const [searchTerm,setSearchTerm] = useState('')
  const [loaded,setLoaded] = useState(false);
  const [results, setResults] = useState([])
  const [error,setError] = useState('')
  const FetchUser=()=>{
    //setSearchTerm(document.getElementById('gitSearch').value)
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
  console.log(results)
  return (
    <div className="App">
      <header>
        <div id="header">Git Search</div>
        <input type="text" id="gitSearch" placeholder="git profile...." onChange={(e)=>setSearchTerm(e.target.value)}/>
        <a href="#" onClick={(e)=>FetchUser()}>Submit</a>
      </header>
      {results.length===0?<Holder/>:
      <div><Profile props={results}/><Repos props={results}/></div>}
    </div>
  );
}

export default App;
