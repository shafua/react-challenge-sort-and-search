import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/Button';
import UserList from './components/UserList';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';

let STORAGE;

let App = React.createClass({
  getInitialState(){
    return {
      isLoading: true,
      userInfo: []
    }
  },
  componentDidMount(){
    setTimeout( () => 
      axios.get('/data.json')
      .then(
        (data) => {
          STORAGE = data.data;
            this.setState({
                isLoading: false,
                userInfo: STORAGE
                })
            }
        )
      , 500 )
  },
  handleSearch(query){
    this.setState({
      userInfo: STORAGE.filter(
        user => user.name.toLowerCase().indexOf(query) + 1
        )
    })
  },
  getData(){
    return this.state.userInfo
  },
  render() {
    return this.state.isLoading 
    ? (
        <Loading />
      )
    : (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <UserList
          getData={this.getData}
         />
        </div>
      )
  }
})


export default App;