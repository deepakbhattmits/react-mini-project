import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
            term : '',
         }
    render() {
     
        return (
           
                <div className="ui segment" style={ {marginTop:'10px'} }>
               <form onSubmit={this.props.getData}>
                    <div className="ui search">
                        <div className="ui icon input">
                        <label>Search Here </label>
                        <input 
                            className="prompt"
                            type="text"
                            placeholder="Search ..."
                            name="termInput"
                            autoComplete='off'
                        />
                        <i className="search icon"></i>
                        </div>

                        </div>
                </form>   
                 
                </div>
         );
    }
}
 export default SearchBar;