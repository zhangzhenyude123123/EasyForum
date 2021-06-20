import React ,{ Fragment }from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';
import {Link} from "react-router-dom";

const Navbar = ({auth: { isAuthenticated, loading,user }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/community'>Community</Link>
            </li>
            <li>
                <Link to={`/postboard/${user._id}`}>Post</Link>
            </li>
            <li>
                <Link to='/profile'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>Profile</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/community'>Community</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code' /> Connect World
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

const GetStateData = state =>({
    auth: state.auth
});

export default connect(
    GetStateData,
    { logout }
)(Navbar);

