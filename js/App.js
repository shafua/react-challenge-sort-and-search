import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';
import TollBar from './components/TollBar';
import ActiveUser from './components/ActiveUser';

let STORAGE;

let App = React.createClass({
  getInitialState(){
    return {
      isLoading: true,
      userInfo: [],
      sort: {
        byAge: false,
        byAlphabet: false,
        order: 1
      },
      activeUser: {
        key: null,
        name: 'Anonymous',
        age: null,
        phone: null,
        image: null,
        phrase: null
      }
    }
  },
  componentDidMount(){
    setTimeout( () => 
      axios.get('data.json')
            .then(
              data => {
                STORAGE = data.data;
                  this.setState({
                      isLoading: false,
                      userInfo: STORAGE,
                      activeUser: STORAGE[0]
                      })
                  }
              )
      , 1500 )
  },
  handleSearch(query){
    this.setState({
      sort: {
        byAge: false,
        byAlphabet: false,
        order: 1
      },
      userInfo: STORAGE.filter(
        user => user.name.toLowerCase().indexOf(query) + 1
        )
    })
  },
  handleSortByAge(){
    var order = this.state.sort.byAge ? -this.state.sort.order : 1;
    this.setState({
      sort: {
        byAge: true,
        byAlphabet: false,
        order: order
      },
      userInfo: this.state.userInfo.sort(
        (a,b) => order*(a.age - b.age)
        )
    })
  },
  handleSortByAlphabet(){
    var order = this.state.sort.byAlphabet ? -1*this.state.sort.order : 1;
    this.setState({
      sort: {
        byAge: false,
        byAlphabet: true,
        order: order
      },
      userInfo: this.state.userInfo.sort(
        (a,b) => {
            if (a.name > b.name) return order;
            if (a.name < b.name) return -order;
            return 0;
          }
        )
    })
  },
  handleSelectUser(userId){
    console.log(userId)
    this.setState({
      activeUser: STORAGE[userId]
    })
  },
  getData(){
    return this.state.userInfo
  },
  render() {
    var user = this.state.activeUser;
    return this.state.isLoading ? <Loading />
                                : (
                                  <div className="app row">
                                  <ActiveUser 
                                    key={user.id} 
                                    name={user.name} 
                                    age={user.age} 
                                    phone={user.phone} 
                                    image={user.image} 
                                    phrase={user.phrase} 
                                  />
                                  <div className="col-lg-7">

                                    <SearchBar onSearch={this.handleSearch} />
                                    <TollBar
                                      onAlphabet={this.handleSortByAlphabet}
                                      onAge={this.handleSortByAge}                                    
                                    />
                                    <UserList
                                      getData={this.getData}
                                      onSelectUser={this.handleSelectUser}
                                     />
                                    </div>
                                    </div>
                                  )
  }
})


export default App;