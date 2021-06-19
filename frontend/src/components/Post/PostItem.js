import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {Typography } from '@material-ui/core/';
import { addLike, removeLike,addUnLike} from '../../action/posts';
import { useDispatch } from 'react-redux';

const PostItem = ({post, showActions }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>
            <Typography variant="h6">{post.name}</Typography>
            <div>
                 <p className='my-1'>{post.text}</p>
                 <p className='post-date'>
                     Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>
                 </p>
            </div>
            {showActions && (
                 <Fragment>
                 <button
                      onClick={() => dispatch( addLike(post._id) )}
                      type='button'
                      className='btn btn-light'>
                      <i className='fas fa-thumbs-up'/>{' '}
                     <span>👍</span>
                     <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>
                 </button>
                 <button
                      onClick={() => dispatch( removeLike(post._id) )}
                      type='button'
                      className='btn btn-light'>
                      <i className='fas fa-thumbs-down'/>
                 </button>
                 <button
                      onClick={() => dispatch( addUnLike(post._id) )}
                      type='button'
                      className='btn btn-light'>
                      <i className='fas fa-thumbs-up'/>{' '}
                     <span>👎</span>
                      <span>{post.unlikes.length > 0 && <span>{post.unlikes.length}</span>}</span>
                 </button>
                 </Fragment>
             )}
            </div>
        </div>
    );
};

PostItem.defaultProps = {
    showActions: true
};

export default PostItem
