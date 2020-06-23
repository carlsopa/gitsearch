import React,{useState,useEffect} from 'react';

function Repos(props) {
    const [repourl,setRepourl]=useState(props.values.repos_url)
    const [repos, setRepos] = useState([])
    useEffect(()=>{
        console.log('change')

    },[repourl])
    return (
        <div>
            
        </div>
    )
}

export default Repos;
