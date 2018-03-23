import React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from './../../actions/fileActions';

class UsersArea extends React.Component {
    constructor() {
        super();

        this.state = {
            users:[]
        };
    }

    componentWillMount() {
        this.props.loadUsers();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users:nextProps.users
        });
    }

    render() {
        const users = this.state.users;

        return (
            <div>
                <h1>Userii mei sunt</h1>
                {users.map((user, index)=> {
                    return(
                    <div key={index} className="user">
                        <p>Nume: {user.name}</p>
                        <p>Company position: {user.position}</p>
                    </div>)
                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users:state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUsers:()=>dispatch(loadUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersArea);