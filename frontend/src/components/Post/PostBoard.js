import React, {Fragment, useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {connect, useDispatch} from "react-redux";
import {getPostsByUserId} from "../../action/posts";
import PostItem from "./PostItem";

const PostBoard = ({ post: { posts, loading },match }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsByUserId(match.params.id));
    },[getPostsByUserId]);

    if(loading || posts === null){
        return(
            <Fragment>
                <h1 className='large text-primary'>Posts</h1>
                <p className='lead'>
                    <p>You don't have post</p>
                    <Link to='/addpost'><button className='btn btn-dark'>AddPost</button></Link>
                </p>
            </Fragment>
        );
    } else {
        return(
            <Fragment>

                <h1 className='large text-primary'>Posts</h1>
                <p className='lead'>
                    <p>Your all Posts</p>
                    <Link to='/addpost'><button className='btn btn-dark'>AddPost</button></Link>
                </p>


                <Grid container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <PostItem key={post._id} post={post} />
                        </Grid>
                    ))}
                </Grid>
            </Fragment>
        )
    }

};

const GetStateData = state => ({
    post: state.post
});

export default connect(
    GetStateData
)(PostBoard);