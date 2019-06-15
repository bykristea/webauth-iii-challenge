import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:4000/api/auth/login';

        axios.post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('token', res.data.token)
            })

            .catch(err => {
                console.log(err)
            })
            this.props.history.push('/users');
    }

    render() {
        return(
            <div>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>

                <div>
                <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text"
                        />

<label htmlFor="password">Password</label>            
                    <input
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        />
                   </div>  

                   <div>
                       <button type="submit">Login</button>
                   </div>   
                </form>
            </div>
        )
    }
}

export default withRouter(Login);