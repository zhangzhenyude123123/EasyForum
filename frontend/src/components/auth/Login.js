import React, {Fragment,useState} from 'react';
import {Link,Redirect} from "react-router-dom";
import {Init, login} from "../../action/auth";
import {connect, useDispatch} from 'react-redux';

const  Login =({isAuthenticated}) => {

    const dispatch = useDispatch();
    dispatch(Init());

    const[formData,setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(login({email,password}));
    };

    if (isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <Fragment>
            <section className="container">
                <div className="Form-location">
                    <h1 className="large text-primary">Sign</h1>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                               type="email"
                               placeholder="Email Address"
                               name="email"
                               value={email}
                               onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}/>
                        </div>
                        <input type="submit" className="btn btn-dark" value="Login"/>
                    </form>
                    <p className="my-1">
                        Don't have an account? <Link to='/Register'>Register</Link>
                    </p>
                    </div>
            </section>
        </Fragment>
    );
}

const GetStateData = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    GetStateData
)(Login);