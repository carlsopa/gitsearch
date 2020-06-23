import React,{useState} from 'react';

function Profile(props) {
    const [profileLogin, setprofileLogin] = useState(props.values.login);
    const [profileName, setprofileName] = useState(props.values.name);
    const [profileBio, setprofileBio] = useState(props.values.bio)
    const [profilePic, setprofilePic] = useState(props.values.avatar_url);
    return (
        <div id='profile'>
            <img src={profilePic} alt='profile pic'/>
            <div id='login'>{profileLogin}</div>
            <div id='name'>{profileName}</div>
            <div id='bio'>{profileBio}</div>
            
        </div>
    )
}

export default Profile;
