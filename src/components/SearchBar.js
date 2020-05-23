import React from 'react'

class SearchBar extends React.Component{
    state={term:'kuvlulul'};
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"  value={this.state.term}   />
                        {/* if u put some value in state which is fixed for term that will will be renderd o screen and u cannot change anything 
                        later as you did not wire a onchange eve handerler It will be read only mode */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;