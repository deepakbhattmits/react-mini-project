import React, { Component } from  'react';
import github from '../apis/github';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'  
// import UserList from './UserList';

class App extends Component {
    state = { 
                repos: []
    }
    onSearchChange = async ( term ) => {

        const response =  await github.get(`/users/${term}`);
      
            const repos = response.data;
            
            
                this.setState({ repos: repos }); 
  
    }
    
    render () {
       
        return (
        
                    <div>
                    
                        <div className="ui container">
                <div className="row">
                        <SearchBar onChange = { this.onSearchChange  } />
                        <SearchResult repos={ this.state.repos } />
                </div>
            </div>
                    </div>
                
           
        );
    }
};
export default App; 