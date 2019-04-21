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
          return <div>Loading....</div>; 
        } 
        const  { login, id } = this.props.repos;
        
        return (
            
               
                    <button className="ui basic button" onClick={ this.renderList }>        
                        <div id={ id }>
                            <span>{ login }</span>
                        </div>
                        
                    </button>
                
               
           
        );
  };  
  
  render () {
 // console.log('test search Result page : ', this.props.repos );

    return (
   
     <Fragment>
           { Object.keys(this.props.repos).length ?
             <div className="ui relaxed divided list">
                { this.results() }    
             </div> 
            : ''            
           }
           { this.state.repoUser.length !== 0  ? 
            <UserList repoUser = { this.state.repoUser } /> 
            :
            '' }           
           
           </Fragment>
      
        
      
);
  }



}
export default SearchResult;