import React from 'react';

function Holder(props) {
    return (
        <div>
            <div>Git Search</div>
            <input type="text" placeholder='github username....' onChange={(e)=>props.values[0](e.target.value)}/>
            <a href="#">Submit</a>
            <div id="text" onClick={(e)=>props.values[1]}>
                Github is a place where thousands of developers, engineers, scientests and anyone else who wants to collaberate come together.  Now you will be able to see what your freinds are doing, at a quick glance.
            </div>
            
        </div>
    )
}

export default Holder;
