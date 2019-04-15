import React, { Component, Fragment } from 'react';
import UserList from './UserList';
class  SearchResult extends Component {
    state = { 
        repoUser: []
    }
    renderList = ( ) => {
                
            this.setState({ 
                 repoUser: this.props.repos
                })
      };
    
    
    results = () => {
        
        if(Object.keys(this.props.repos).length === false ) {
          return null; 
        } 
        const  { login, id } = this.props.repos;
        
        return (
            <div className="ui relaxed divided list">
            <button className="ui basic button" onClick={ this.renderList }>        
                <div id={ id }>
                    <span>{ login }</span>
                </div>
            </button>
             </div>
        );
  };  
  
  render () {
 // console.log('test search Result page : ', this.props.repos );

    return (
   
        <Fragment>
            
           { this.results() }
             
            <UserList repoUser = { this.state.repoUser } />
       
        </Fragment>
        
      
);
  }



}
export default SearchResult;