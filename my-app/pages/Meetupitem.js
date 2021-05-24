import React from 'react';


function MeetupItem ({names,phones,email,adress,image}) {
    return(
        <div>
            <p>{names}</p>
            <p>{phones}</p>
            <p>{email}</p>
            <p>{adress}</p>
            <img src={image} className="d-block" height="170"/>
        </div>
    )
}

export default MeetupItem