import React, { Fragment, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getPosts} from "../action/posts";
import {connect} from "react-redux";
import PostItem from "./PostItem";



const PostOne = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if(loading){
        return(
            <div>
                <p>You don't have a Post</p>
            </div>
        );
    } else {
        return(
        <Fragment>
            <h1 className='large text-primary'>Posts</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Your all Posts
            </p>
            {/*<div className='posts'>*/}
                {/*{posts.map(post => (*/}
                {/*    <PostItem key={post._id} post={post} />*/}
                {/*))}*/}
            {/*</div>*/}
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <PostItem post={post} />
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
    GetStateData,
    {getPosts}
)(PostOne);