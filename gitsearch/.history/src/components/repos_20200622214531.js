import React,{useState,useEffect} from 'react';
import RepoCard from './repo_card';

function Repos(props) {
    const [repourl,setRepourl]=useState(props.values.repos_url)
    const [repos, setRepos] = useState([])
    useEffect(()=>{
        fetch(repourl)
    .then(res=>res.json())
    .then(
      (result)=>{
        
        setRepos(result)
      },
      (error)=>{

      }
    )

    },[repourl])
    return (
        <div>
            {repos.map(repo=>(<RepoCard/>))}
        </div>
    )
}

export default Repos;
