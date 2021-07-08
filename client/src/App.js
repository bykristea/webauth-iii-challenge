import React, {Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './routes/Login';
import Register from './routes/Register';
import Users from './routes/Users';


class App extends Component {

  logout = () => {
    localStorage.removeItem('token');

    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/users'>Users</NavLink>

          <button onClick={this.logout}>Logout</button>
        </nav>

        <main>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
