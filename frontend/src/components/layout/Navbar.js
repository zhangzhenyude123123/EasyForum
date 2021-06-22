import React ,{ Fragment }from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';
import {Link} from "react-router-dom";

const Navbar = ({auth: { isAuthenticated, loading,user}, logout }) => {


    const authLinks = (
        <ul>
            <li>
                <Link to='/community'>
                    <span className='hide-sm menu-word'>Community</span>
                </Link>
            </li>
            <li>
                <Link to={`/postboard/${user._id}`}>
                    <span className='hide-sm menu-word'>Post</span>
                </Link>
            </li>
            <li>
                <Link to='/profile'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm menu-word'>Profile</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href=''>
                    <Link to={'/'}>
                    <span className='hide-sm menu-word logout'>Logout</span>
                    </Link>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/community'>
                    <span className='hide-sm menu-word'>Community</span>
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <span className='hide-sm menu-word'>Register</span>
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <span className='hide-sm menu-word'>Login</span>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav id='header' className='navbar'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code logo' /> Connect World
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

