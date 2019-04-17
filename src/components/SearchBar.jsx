import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
            term : '',
         }
         componentWillMount(){
            document.addEventListener("keyup", this.handleKeyUp.bind(this));
          }
          componentWillUnmount(){
            document.addEventListener("keyup", this.handleKeyUp.bind(this));
          }
    onInputChange = (e) => {   
         //console.log('TEST : ',e.target.value); 
        if (e.target.vale === '' ) {
            this.setState({term: '' });
        } else {
            this.setState({term: e.target.value });
        }
        this.props.onChange( e.target.value );
       
    }
    handleKeyUp(e){ 
        if (e.target.vale === '' ) {
            this.setState({term: '' });
        } else {
            this.setState({term: e.target.value });
        }
       
        this.props.onChange( this.state.term );
        // console.log('keypress : ',e.target.value); 
       
    }
    render() {
     
        return (
           
                <div className="ui segment" style={ {marginTop:'10px'} }>
               
                    <div className="ui search">
                    <div className="ui icon input">
                    <label>Search Here </label>
                        <input className="prompt" type="text"
                        onKeyUp={(e) => { this.handleKeyUp(e) } }
                         onChange={ (e) => { this.onInputChange(e) } }
                         value={ this.state.term.toUpperCase() }
                         placeholder="Search ..." />
                           <i className="search icon"></i>
                    </div>
                    
</div>
                 
                </div>
         );
    }
}
 export default SearchBar;