import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
            term : '',
         }
    //      componentWillMount(){
    //         document.addEventListener("keyup", this.handleKeyUp.bind(this));
    //       }
    //       componentWillUnmount(){
    //         document.addEventListener("keyup", this.handleKeyUp.bind(this));
    //       }
    // onInputChange = (e) => {   
    //      //console.log('TEST : ',e.target.value); 
    //     if (e.target.vale === '' ) {
    //         this.setState({term: '' });
    //     } else {
    //         this.setState({term: e.target.value });
    //     }
    //     this.props.onChange( e.target.value );
       
    // }
    // handleKeyUp(e){ 
    //     if (e.target.vale === '' ) {
    //         this.setState({term: '' });
    //     } else {
    //         this.setState({term: e.target.value });
    //     }
       
    //     this.props.onChange( this.state.term );
    //     // console.log('keypress : ',e.target.value); 
       
    // }
    render() {
     
        return (
           
                <div className="ui segment" style={ {marginTop:'10px'} }>
               {/* <form onSubmit={this.props.getData}> */}
                    <div className={`ui search ${ this.props.class }`}>
                        <div className="ui icon input">
                            <input 
                            className="prompt"
                            type="text"
                            placeholder="Search ..."
                            name="termInput"
                            autoComplete='off'
                            onChange={ this.props.getData }
                            />
                            <i className="search icon"></i>
                        </div>
                   
                    </div>
                {/* </form>    */}
                 
                </div>
         );
    }
}
 export default SearchBar;