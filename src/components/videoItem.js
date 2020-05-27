/** @format */

import React from "react"
import "./videoitem.css"

const VideoItem = ({ video, onVideoselect }) => {
  //Now this component has one video object sent by VideoList...it has all details about individual video.....prop is video
  return (
    <div onClick={() => onVideoselect(video)} className='video-item item'>
      <img className=' ui image' src={video.snippet.thumbnails.medium.url} />
      <div className='content'>
        <div className='header'>{video.snippet.title} </div>
        {/* //u can obtain this title location in inspect.where u can know how that hirairchy is to reach title */}
      </div>
    </div>
  )
}

export default VideoItem
