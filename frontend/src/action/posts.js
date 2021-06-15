
import * as api from '../routers/index.js';

export const getPosts =() => async(dispatch) => {

    try{
        const {data} = await api.fetchPosts();

        dispatch({type:'FETCH_ALL',payload:["TESTTEST"]});
    }catch (erro){
        console.log(error.message);
    }
    // return action;
}