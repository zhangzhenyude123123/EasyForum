import React, {Fragment,useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import { useDispatch,connect } from 'react-redux';
import {register} from "../../action/auth";
import {setAlert} from "../../action/alert";

const Register =({checkR}) => {
    const dispatch = useDispatch();

    const[formData,setFormData] = useState({
         name: '',
         email: '',
         password: '',
         password2: ''
     });

    const { name, email, password, password2 } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(name.length<3){
            dispatch(setAlert('username must more than 3', 'danger'));
        }
        if(password.length<6){
            dispatch(setAlert('Password must more than 6', 'danger'));
        }
        if (password !== password2) {
            dispatch(setAlert('Passwords do not match', 'danger'));
        }else {
            dispatch(register({name, email, password}));
        }
    };

    // jump to the login
    if (checkR) {
        return <Redirect to='/Login' />;
    }

    return (
        <Fragment>
            <section className="container">
                <div className="Form-location">
                    <h1 className="large text-primary">Sign Up</h1>
                    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text"
                                   placeholder="Name"
                                   name="name"
                                   value={name}
                                   onChange={e => onChange(e)}
                                   required/>
                        </div>
                        <div className="form-group">
                            <input type="email"
                                   placeholder="Email Address"
                                   name="email"
                                   value={email}
                                   onChange={e => onChange(e)}
                                   required/>
                            <small className="form-text">
                                This site uses Gravatar so if you want a profile image, use a
                                Gravatar email
                            </small>
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
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={e => onChange(e)}
                                required/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register"/>
                    </form>
                    <p className="my-1">
                        Already have an account? <Link to='/Login'>Login</Link>
                    </p>
                </div>
            </section>
        </Fragment>
    );
};

// Register.propTypes = {
//     register: PropTypes.func.isRequired,
// };

const GetStateData = state =>({
    checkR:  state.auth.checkRegister
});

export default connect(
    GetStateData
)(Register);