import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component{
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
};

    render(){
        return (
            <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit}/></div>
        );
    }
}

export default App;