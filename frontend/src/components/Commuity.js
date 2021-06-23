import React, {Fragment, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import {connect} from "react-redux";
import {getPosts} from "../action/posts";
import PostItem from "./Post/PostItem";
import PostBoardHead from "./Post/PostBoardHead";

const Commuity = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if(loading){
        return(
            <Fragment>
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                <PostBoardHead/>
                <div className="container">
                    <div className="mainpage">
                        <Grid container alignItems="stretch" spacing={3}>
                            {posts.map((post) => (
                                <Grid key={post._id} item xs={12} sm={6} md={6}>
                                    <PostItem key={post._id} post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
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