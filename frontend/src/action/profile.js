import {getProfileMe_route, updateProfile} from "../routers";

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
        console.log(res.data);
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

// Get profile by ID
// export const getProfileById = userId => async dispatch => {
//     try {
//         const res = await axios.get(`/api/profile/user/${userId}`);
//
//         dispatch({
//             type: 'GET_PROFILE',
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: 'PROFILE_ERROR',
//             payload: { msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };

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
            type: 'GET_PROFILE',
            payload: res.data
        });

        //dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    } catch (err) {
        // const errors = err.response.data.errors;

        // if (errors) {
            //errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        // }

        // dispatch({
        //     type: 'PROFILE_ERROR',
        //     payload: { msg: err.response.statusText, status: err.response.status }
        // });
    }
};
