import React from "react"
import VideoItem from "./videoItem"

//Es2015 syntax to destructure only videos from props//instead of mentioning props(props)
const videolist = ({ videos, onVideoselect }) => {
  //props.videos is always there here...sent from app component..this has array of videos sent by app component
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoselect={onVideoselect}
        video={video}
      />
    )
  }) //this function will be called one time for every itrm in list videos
  return <div className='ui relaxed divided list'>{renderList}</div>
}

export default videolist
