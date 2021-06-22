import {getProfileMe_route, updateProfile} from "../routers";
import {setAlert} from "./alert";

export const getCurrentProfile = () => async dispatch => {

    const token = localStorage.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
    };
    try {
        const res = await getProfileMe_route(config);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'PROFILE_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Create or update profile
export const createProfile = formData => async dispatch => {
    try {
        const token = localStorage.token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        };

        const res = await updateProfile(formData,config);
        dispatch({
            type: 'UPDATE_PROFILE',
            payload: res.data
        });
        dispatch(setAlert('Profile Updated','success'));

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: 'PROFILE_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
