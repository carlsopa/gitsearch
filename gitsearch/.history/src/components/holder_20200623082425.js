import React from 'react';

function Holder(props) {
    return (
        <div id='start'>
            <div class='header' id='title'>Git Search</div>
            <input type="text" placeholder='github username....' onChange={(e)=>props.alpha(e.target.value)}/>
            <a href="#" onClick={(e)=>props.fetch()}>Submit</a>
            <div id="text" >
                Github is a place where thousands of developers, engineers, scientests and anyone else who wants to collaberate come together.  Now you will be able to see what your freinds are doing, at a quick glance.
            </div>
            
        </div>
    )
}

export default Holder;