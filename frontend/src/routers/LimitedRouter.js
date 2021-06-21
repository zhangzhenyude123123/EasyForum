import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LimitedRouter =({
      component: Component,
      auth: { isAuthenticated, loading },
      ...rest
  }) => (
    <Route
        {...rest}
        render={props =>
            !isAuthenticated && !loading ? (
                <Redirect to='/login' />
            ) : (
                <Component {...props} />
            )
        }
    />

)

const GetStateData = state => ({
    auth: state.auth
});

export default connect(
    GetStateData
)(LimitedRouter)