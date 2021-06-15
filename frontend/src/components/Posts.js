import React from "react";
import Post from './Post/Post'

import {useSelector} from "react-redux";

const Posts = () =>{
    const posts = useSelector((state)=>state.post);

    console.log(posts);

    return(
        <>
        <h1>asfwqqqqqq</h1>
            <Post/>
        </>
    );
}

export  default Posts;