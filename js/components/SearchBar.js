import React from 'react';



var SearchBar = React.createClass({
  getInitialState () {
    return {
      query: ''
    }
  },
  onChangeHandler(e) {
    var query = e.target.value;
    this.props.onSearch(query.toLowerCase())
    this.setState({query: query})
  },
  render() {
    return (
      <input 
      value={this.state.query} 
      onChange={this.onChangeHandler}
      type="text" 
      className="form-control" 
      placeholder="Search people by name..."
      />
    )
  }
})

export default SearchBar;

