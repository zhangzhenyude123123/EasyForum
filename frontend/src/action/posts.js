import * as Router from '../routers';
import {setAlert} from "./alert";

// Get posts
export const getPosts = () => async (dispatch) => {

    try {
        const res = await Router.getPosts_route();
        console.log(res.data);
        dispatch({
            type: 'GET_POSTS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get posts by user id
export const getPostsByUserId = id => async (dispatch) => {
    const token = localStorage.token;
    const config = {
        headers: {
            'x-auth-token': token
        }
    };
    console.log(id);
    try {
        const res = await Router.getPostsByUser_route(id,config);
        console.log(res.data);
        dispatch({
            type: 'GET_POSTS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get post by id
export const getPost = id => async (dispatch) => {
    try {
        const res = await Router.getPost_route(id);
        dispatch({
            type: 'GET_POST',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add like
export const addLike = id => async (dispatch) => {
    try {
        const res = await Router.addLike_route(id);

        dispatch({
            type: 'UPDATE_LIKES',
            payload: { id, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Remove like
export const removeLike = id => async (dispatch) => {
    try {
        const res = await Router.removeLike_route(id);

        dispatch({
            type: 'UPDATE_LIKES',
            payload: { id, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//addunlike
export const addUnLike = id => async (dispatch) => {
    try {
        const res = await Router.addUnLike_route(id);

        dispatch({
            type: 'UPDATE_LIKES',
            payload: { id, unlikes: res.data }
        });
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add post
export const addPost = formData => async (dispatch) => {
    const token = localStorage.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
    };
    try {
        const res = await Router.addPost_route(formData,config);

        dispatch({
            type: 'ADD_POST',
            payload: res.data
        });
        dispatch(setAlert('Post Have Created!!!', 'success'));

    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
    const token = localStorage.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
    };

    try {
        const res = await Router.addComment_route(postId,formData,config);

        dispatch({
            type: 'ADD_COMMENT',
            payload: res.data
        });

        dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// export const getPicByUserId = (userId) => async (dispatch) => {
//     try {
//         const res = await Router.addComment_route(postId,formData,config);
//
//         dispatch({
//             type: 'ADD_COMMENT',
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: 'POST_ERROR',
//             payload: { msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };