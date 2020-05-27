import React from "react"

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading!!!</div>
  }
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videosrc} title="video player"/>
      </div>
      <div className='ui segment'>
        {/* //for nice looking box */}
        <h4 className=' ui header'>{video.snippet.title}</h4>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
