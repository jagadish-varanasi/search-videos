import React from 'react'

const videolist=(props)=>{
    //props.videos is always there here...sent from app component..this has array of videos sent by app component
    return <div>
     {props.videos.length}
    </div>
}

export default videolist;