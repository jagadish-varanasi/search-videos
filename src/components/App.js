import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component{
//whenever use search for particulr term we nne make use of youtube api
onTermSubmit=term=>{
  console.log(term);
  youtube.get('/search',{
      params:{
          q:term
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