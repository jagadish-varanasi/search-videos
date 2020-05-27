import React from "react"

class SearchBar extends React.Component {
  state = { term: "" }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    //TODO: Make sure we call
    //Callback from parent component
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
            {/* if u put some value in state which is fixed for term that will will be renderd o screen and u cannot change anything 
                        later as you did not wire a onchange eve handerler It will be read only mode */}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
