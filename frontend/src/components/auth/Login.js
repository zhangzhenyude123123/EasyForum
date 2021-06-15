import React, {Fragment,useState} from 'react';
import {Link} from "react-router-dom";
// import {login} from "../../action/auth";
// import { connect } from 'react-redux';
//import { setAlert } from '../../action/alert';
// import PropTypes from 'prop-types';

const  Login =() => {
    const[formData,setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log("Success Login in");
        // login({email,password});
    };

    // if (isAuthenticated) {
    //     return <Redirect to='/dashboard' />;
    // }

    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="email"
                               placeholder="Email Address"
                               name="email"
                               value={email}
                               onChange={e => onChange(e)}
                               required/>
                        <small className="form-text"
                        >This site uses Gravatar so if you want a profile image, use a
                            Gravatar email</small
                        >
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            required/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Sign"/>
                </form>
                <p className="my-1">
                    Don't have an account? <Link to='/Register'>Register</Link>
                </p>
            </section>
        </Fragment>
    );
}
// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool
// };
//
// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });
//
// export default connect(
//     mapStateToProps,
//     { login }
// )(Login);
export default Login;