import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuthService = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    cb();
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  login(e) {
    e.preventDefault();

    fakeAuthService.login(() => {
      this.setState({
        redirect: true
      });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={'/'} />;
    }

    return (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuthService.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export { Login, ProtectedRoute };
