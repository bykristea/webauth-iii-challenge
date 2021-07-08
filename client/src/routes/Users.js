import React from 'react';
import axios from 'axios';
import required from '../auth/required';
class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/')
        .then(res => {
            this.setState({ users: res.data.users })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return(
            <div>
                <h2>Users</h2>
                <ul>
                    { this.state.users.map(u =>
                    <li key={u.id}>{ u.username }</li>) }
                </ul>
            </div>
        )
    }
}

export default required(Users);