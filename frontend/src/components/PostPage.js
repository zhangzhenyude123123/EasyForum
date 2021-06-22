import React, {Fragment, useEffect} from 'react';
import {getPost} from "../action/posts";
import {useDispatch,connect} from "react-redux";
import PostItem from "./Post/PostItem";
import CommentForm from "./comment/CommentForm";
import CommentItem from "./comment/CommentItem";

const PostPage = ({post: { post, loading }, match}) => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPost(match.params.id));
    }, [getPost]);

    if(loading || post === null){
        return(
            <Fragment>
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
                <div className='comments'>
                    {post.comments.map(comment => (
                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
                    ))}
                </div>
                <CommentForm postId={post._id} />
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