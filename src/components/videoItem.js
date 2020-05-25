import React from 'react'

const VideoItem=({video})=>{
    //Now this component has one video object sent by VideoList...it has all details about individual video.....prop is video
  return <div>
    {video.snippet.title}
    {/* //u can obtain this title location in inspect.where u can know how that hirairchy is to reach title */}
  </div>;
}

export default VideoItem;