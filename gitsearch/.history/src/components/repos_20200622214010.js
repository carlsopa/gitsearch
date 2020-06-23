import React,{useState,useEffect} from 'react';

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
            
        </div>
    )
}

export default Repos;
