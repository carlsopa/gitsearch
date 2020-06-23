import React,{useState,useEffect} from 'react';

function RepoCard(props) {
    const [title,setTitle] = useState()
    const [languageurl] = useState(props.data.languages_url)
    const [description,setDescription] = useState()
    const [languages,setLanguages] = useState([])
    const [link,setLink] = useState('')
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
    setLink(props.data.html_url)
    },[languageurl])
    return (
        <div className='repo_card' onClick={(e)=>window.open()}>
            <div className='repo_title'>{title}</div>
            <div className='repo_description'>{description}</div>
            <div>
                <ul className='repo_languages'>
                    {Object.keys(languages).map((value,index)=>(<li key={index}>{value}</li>))}
                </ul>
            </div>
            
        </div>
    )
}

export default RepoCard;
