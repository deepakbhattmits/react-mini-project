import React, { Component, Fragment }  from 'react';
class  UserList extends Component {
    renderUser = () => {
        // console.log("TEST userlist: ",this.props.repoUser);
        if(!this.props.repoUser) {
            return <div> Loading...</div>
        }
        // const { id, name, avatar_url, public_repos, followers, location } = this.props.repoUser;
        return (
            <div className="ui link cards">
                <div className="card" id={ this.props.repoUser.id }>
                    <div className="image">
                        <img src={  this.props.repoUser.avatar_url } alt={  this.props.repoUser.name } />
                    </div>
                    <div className="content">
                        <div className="header">{ this.props.repoUser.name }</div>
                        <div className="description">
                            {`${ (this.props.repoUser.name) ? this.props.repoUser.name : '' } ${ (this.props.repoUser.name) ? ' a user live in ': '' } ${ (this.props.repoUser.location) ? this.props.repoUser.location : '' }`}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            {`Public Repos ${(this.props.repoUser.public_repos) ? this.props.repoUser.public_repos : ''}`}   </span>
                        <span>
                            <i className="user icon"></i>
                            {`${ (this.props.repoUser.followers) ? this.props.repoUser.followers : '' } Followers`}
                        </span>
                    </div>
                </div>
            </div>
        );
    };      
        render () {
          
        return (
            <Fragment>
                { this.renderUser() }
            </Fragment>
        );
       
        }
    }
export default UserList;

