import * as Router from '../routers';

// Get posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await Router.getPosts_route();

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

// Add post
export const addPost = formData => async (dispatch) => {
    const token = localStorage.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
    };
    console.log(formData);
    try {
        const res = await Router.addPost_route(formData,config);

        dispatch({
            type: 'ADD_POST',
            payload: res.data
        });
        // dispatch(setAlert('Post Created', 'success'));
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get post
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

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await Router.addComment_route(postId,formData,config);

        dispatch({
            type: 'ADD_COMMENT',
            payload: res.data
        });

        // dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
        dispatch({
            type: 'POST_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};