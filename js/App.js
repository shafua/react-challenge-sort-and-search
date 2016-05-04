import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';
import TollBar from './components/TollBar';

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
              data => {
                STORAGE = data.data;
                  this.setState({
                      isLoading: false,
                      userInfo: STORAGE
                      })
                  }
              )
      , 1500 )
  },
  handleSearch(query){
    this.setState({
      userInfo: STORAGE.filter(
        user => user.name.toLowerCase().indexOf(query) + 1
        )
    })
  },
  handleSortByAge(){
    this.setState({
      userInfo: this.state.userInfo.sort(
        (a,b) => a.age - b.age
        )
    })
  },
  handleSortByAlphabet(){
    this.setState({
      userInfo: this.state.userInfo.sort(
        (a,b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }
        )
    })
  },
  getData(){
    return this.state.userInfo
  },
  render() {
    return this.state.isLoading ? <Loading />
                                : (
                                  <div className="app">
                                    <SearchBar onSearch={this.handleSearch} />
                                    <TollBar
                                    onAlphabet={this.handleSortByAlphabet}
                                    onAge={this.handleSortByAge}
                                     />
                                    <UserList
                                      getData={this.getData}
                                     />
                                    </div>
                                  )
  }
})


export default App;