import React,{useState,useEffect} from 'react';

function RepoCard(props) {
    const [title,setTitle] = useState()
    const [languageurl, setLanguageurl] = useState(props.data.languages_url)
    const [description,setDescription] = useState()
    const [languages,setLanguages] = useState([])
    useEffect(()=>{
        fetch(languageurl,{
            headers:{
              Authorization: "basic "+btoa('carlsopa')
            }
          })
    .then(res=>res.json())
    .then(
      (result)=>{
        
        setLanguages(result)
      },
      (error)=>{

      }
    )
    setTitle(props.data.name)
    props.data.description!=null?setDescription(props.data.description):setDescription('no description provided')
    },[languageurl])
    return (
        <div className='repo_card'>
            <div>{title}</div>
            <div>{description}</div>
            <div>
                <ul>
                    {Object.keys(languages).map((value,index)=>(<li key={index}>{value}</li>))}
                </ul>
            </div>
            
        </div>
    )
}

export default RepoCard;
