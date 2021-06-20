import React, {Fragment, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {getPosts} from "../action/posts";
import PostItem from "./Post/PostItem";

const Commuity = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if(loading){
        return(
            <Fragment>
                <Link to='/addpost'><button>AddPost</button></Link>
                <p>You don't have post</p>
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                <Link to='/addpost'><button>AddPost</button></Link>
                <Grid container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <PostItem key={post._id} post={post} />
                            <Link to={`/posts/${post._id}`} className='btn btn-primary'>
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
    }

};

const GetStateData = state => ({
    post: state.post
});

export default connect(
    GetStateData,
    {getPosts}
)(Commuity);