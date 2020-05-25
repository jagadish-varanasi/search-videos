import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './videolist'
const KEY='AIzaSyDoXxm4zYEwjM3OePvOPIPkNJQjI8omIcA';
class App extends React.Component{
state={videos:[]};

//whenever use search for particulr term we nne make use of youtube api
onTermSubmit=async term => {
  console.log(term);
  const response= await youtube.get('/search',{
      params:{
          q:term,
          part: "snippet",
          maxResults:5,
          type:'video',
          key:KEY
       }
    });

this.setState({videos:response.data.items});
//this can ce console logged to now at what herarchy we get list of videos  consol.log(response)
};

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
                I have {this.state.videos.length} videos.
                </div>
        );
    }
}

export default App;