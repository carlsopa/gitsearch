import React,{useState} from 'react';

function Profile(props) {
    const [profilepic, setprofilepic] = useState('');
    console.log(props.values.bio)
    return (
        <div>
            <h1>Profile</h1>
            
        </div>
    )
}

export default Profile;
