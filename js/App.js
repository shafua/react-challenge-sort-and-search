import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/Button';
import UserList from './components/UserList';
import Loading from './components/Loading';

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
        (data) => this.setState({
          isLoading: false,
          userInfo: data
        })
        )
      , 5000 )
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
        <UserList
          getData={this.getData}
         />
      )
  }
})


export default App;