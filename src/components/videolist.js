import React from 'react'
import VideoItem from './videoItem'

//Es2015 syntax to destructure only videos from props//instead of mentioning props(props)
const videolist=({videos})=>{
    //props.videos is always there here...sent from app component..this has array of videos sent by app component
   const renderList= videos.map((video)=>{
       return <VideoItem/>;
    });//this function will be called one time for every itrm in list videos
    return <div>
     {renderList}
    </div>
}

export default videolist;