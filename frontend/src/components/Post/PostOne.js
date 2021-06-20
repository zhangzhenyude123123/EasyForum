import React, {Fragment, useEffect, useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getPosts} from "../../action/posts";
import {connect} from "react-redux";
import PostItem from "./PostItem";
import {login} from "../../action/auth";



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
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <PostItem key={post._id} post={post} />
                        <Link to={`/posts/${post._id}`} className='btn btn-primary'>
                            {/*Discussion{' '}*/}
                            <span>comment  </span>
                            {post.comments.length > 0 && (
                                <span className='comment-count'>{post.comments.length}</span>
                            )}

                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
        )
    };
};

const GetStateData = state => ({
    post: state.post
});

export default connect(
    GetStateData,
    {getPosts}
)(PostOne);