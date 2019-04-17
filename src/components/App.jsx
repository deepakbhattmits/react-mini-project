import React, { Component } from  'react';
import github from '../apis/github';
// import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'  

class App extends Component {
    state = { 
                repos: []
    }
    onSearchChange = async ( term ) => {
      
        const response =  await github.get(`/users/${term}`);
      
        const repos = response.data;
        // const theUrl =  `${github}/users/${ term }`; 
        // var xmlHttp = new XMLHttpRequest();
        //     xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
        //     xmlHttp.send( null );
        // const repos =  xmlHttp.responseText;
            
            
                this.setState({ repos: repos }); 
  
    }
    // onSearchChange = ( term ) => {
       
           
    //         const user = term;
    //         if (user) {
    //           axios.get(`https://api.github.com/users/${user}`)
    //           .then((res) => {
    //             const repos = res.data.public_repos;
    //             this.setState({ repos });
    //           })
    //         } else return;
    // }
    
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