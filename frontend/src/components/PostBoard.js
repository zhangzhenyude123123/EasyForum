import React, { Fragment } from 'react';
import PostItem from "./PostItem";
import {Link} from "react-router-dom";
import PostOne from "./PostOne";


const PostBoard = () => {

    return(
        <Fragment>
            <Link to='/addpost'><button>AddPost</button></Link>
            <PostOne/>
        </Fragment>
    );


};


export default PostBoard