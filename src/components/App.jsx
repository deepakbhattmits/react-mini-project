import React, { Component } from  'react';
import github from '../apis/github';
// import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'  

class App extends Component {
    state = { 
                repos: [],
                status: false,
                classSearch: false
    }
    getData = async ( e ) => {
        // e.preventDefault();
        const term = e.target.value;
        const response = await github.get(`/users/${term}`);
        const repos = response.data;
       console.log('repos : ',repos);
        this.setState({ repos: repos, status: Object.entries(repos).length > 0, classSearch: Object.entries(repos).length > 0}); 
     }
   
        
    render () {
       
        return (
        
                    <div>
                    
                        <div className="ui container">
                <div className="row">
                        <SearchBar getData = { this.getData  } class= { this.state.classSearch } />
                        <SearchResult repos={ this.state.repos } status= { this.state.status } />
                       
                       
                             
                           
                </div>
            </div>
                    </div>
                
           
        );
    }
};
export default App; 