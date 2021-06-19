import React, {Fragment, useEffect} from 'react';
import {getPost} from "../action/posts";
import {useDispatch,connect} from "react-redux";
import PostItem from "./Post/PostItem";

const PostPage = ({post: { post, loading }, match}) => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPost(match.params.id));
    }, [getPost]);

    if(loading || post === null){
        return(
            <Fragment>
                {/*<PostItem post={post} showActions={false} />*/}
                <p>Not Comment</p>if(
                <p>this is the Add Comment</p>
            </Fragment>
        )
    }
    else {
        return(
            <Fragment>
                <PostItem post={post} showActions={false} />
                <p>this is the Add Comment</p>
            </Fragment>
        )
    }
}
const GetStateData = state => ({
    post: state.post
});

export default connect(
    GetStateData
)(PostPage);