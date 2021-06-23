import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {addLike, removeLike, addUnLike} from '../../action/posts';
import { useDispatch } from 'react-redux';

const PostItem = ({post, showActions }) => {

    const dispatch = useDispatch();


    return (
        <div className="position-center">
            <div className="posts-section">
                <div className="post-bar">
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <div className="usy-name">
                                <h3>{post.name}</h3>
                                <span><Moment format='YYYY/MM/DD'>{post.date}</Moment></span>
                            </div>
                        </div>
                    </div>
                    <div className="job_descp">
                        <h4>{post.text}</h4>
                        <ul className="job-dt">
                            <Link to={`/posts/${post._id}`} className=''>
                                <li><p>Comment</p></li>
                            </Link>
                            {post.comments.length > 0 && (
                                <li>Number: <span className='comment-count'>{post.comments.length}</span></li>
                            )}
                        </ul>
                    </div>
                    <div className="job-status-bar">
                        <ul className="like-com">
                        {showActions && (
                            <Fragment>
                                <li>
                                <button
                                    onClick={() => dispatch( addLike(post._id) )}
                                    type='button'
                                    className='btn'>
                                    <span>👍</span>
                                    <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>
                                </button>
                                </li>
                                <li>
                                <button
                                    onClick={() => dispatch( addUnLike(post._id) )}
                                    type='button'
                                    className='btn'>
                                    <span>👎</span>
                                    <span>{post.unlikes.length > 0 && <span>{post.unlikes.length}</span>}</span>
                                </button>
                                </li>
                            </Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

PostItem.defaultProps = {
    showActions: true
};

export default PostItem
