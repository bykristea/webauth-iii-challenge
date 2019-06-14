import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        dept: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          })
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:6000/api/auth/register';

        axios.post(endpoint, this.state) 
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('err', err);
            })

        this.props.history.push('/login');
    }
    render() {
        return(
            <div>
               <h2>Register</h2>
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
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        
                        />

                    <label htmlFor="dept">Department</label>            
                    <input
                        name="dept"
                        id="dept"
                        value={this.state.dept}
                        onChange={this.handleChange}
                        type="text"
                        />
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>   

                </form>
            </div>
        )
    }
}

export default withRouter(Register);