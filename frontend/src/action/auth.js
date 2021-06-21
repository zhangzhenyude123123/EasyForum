import setAuthToken from "../tool/setAuthToken";
import {load_route,register_route,login_route} from "../routers";
import {setAlert} from "./alert";

//load the page
export const loadUser = () => async(dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await load_route();

        dispatch({
           type:'USER_LOADED',
           payload:res.data
        });
    }catch (err){
        dispatch({
            type: 'AUTH_ERROR'
        });
    }
};

//register
export const register = ({name,email,password}) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });
    console.log(body);
    try{
        const res = await register_route(body,config);

        dispatch({
            type:'REGISTER_SUCCESS',
            payload:res.data
        });

    }catch (err){
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

//login
export const login = ({email, password}) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });
    try{
        const res = await login_route(body,config);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        });
    }catch (err){
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const logout = () => dispatch => {
    // dispatch({ type: 'CLEAR_PROFILE' });
    dispatch({ type: 'LOGOUT' });
};