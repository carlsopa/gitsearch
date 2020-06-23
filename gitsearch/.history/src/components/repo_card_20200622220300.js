import React,{useState,useEffect} from 'react';

function RepoCard(props) {
    const [title,setTitle] = useState()
    const [languageurl, setLanguageurl] = useState(props.data.languages_url)
    const [description,setDescription] = useState()
    const [languages,setLanguages] = useState([])
    useEffect(()=>{
        fetch(languageurl)
    .then(res=>res.json())
    .then(
      (result)=>{
        
        setLanguages(result)
      },
      (error)=>{

      }
    )
    },[languageurl])
    return (
        <div>
            <div>Title</div>
            <div>Description</div>
            <div>Languages</div>
            
        </div>
    )
}

export default RepoCard;
