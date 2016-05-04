import React, { Component } from 'react';
import Button from './components/Button';
import UserList from './components/UserList';

let App = React.createClass({
  getInitialState(){
    return {
      isLoading: true
    }
  },
  componentDidMount(){
    setTimeout( () => this.setState({isLoading: false}), 1000 )
  },
  getData(){
    return {data: 'data', value: 73}
  },
  render() {
    return this.state.isLoading 
    ? (
        <h1> Loading </h1>
      )
    : (
        <UserList
          getData={this.getData}
         />
      )
  }
})


export default App;