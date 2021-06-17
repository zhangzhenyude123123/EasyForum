import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {Typography } from '@material-ui/core/';
import { connect } from 'react-redux';
import { addLike, removeLike,addUnLike} from '../action/posts';

const PostItem = ({
      post,
      showActions
}) => {
    // addLike,
    // removeLike,
    // addUnLike,
    // post: { _id, text, name, user, likes, unlikes,comments, date },
    return (
        <div>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="h6">{post.date}</Typography>
        <Typography variant="h6">{post.text}</Typography>
        </div>
        // <div className='post bg-white p-1 my-1'>
        //     <div>
        //         <Link to={`/profile/${user}`}>
        //             <h4>{name}</h4>
        //         </Link>
        //     </div>
        //     <div>
        //         <p className='my-1'>{text}</p>
        //         <p className='post-date'>
        //             Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        //         </p>
        //
        //         {showActions && (
        //             <Fragment>
        //                 <button
        //                     onClick={() => addLike(_id)}
        //                     type='button'
        //                     className='btn btn-light'>
        //                     <i className='fas fa-thumbs-up'/>{' '}
        //                     <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        //                 </button>
        //                 <button
        //                     onClick={() => removeLike(_id)}
        //                     type='button'
        //                     className='btn btn-light'>
        //                     <i className='fas fa-thumbs-down'/>
        //                 </button>
        //                 <button
        //                     onClick={() => addUnLike(_id)}
        //                     type='button'
        //                     className='btn btn-light'>
        //                     <i className='fas fa-thumbs-up'/>{' '}
        //                     <span>{unlikes.length > 0 && <span>{unlikes.length}</span>}</span>
        //                 </button>
        //                 <Link to={`/posts/${_id}`} className='btn btn-primary'>
        //                     {/*Discussion{' '}*/}
        //                     {/*{comments.length > 0 && (*/}
        //                     {/*    <span className='comment-count'>{comments.length}</span>*/}
        //                     {/*)}*/}
        //                     comment-count
        //                 </Link>
        //             </Fragment>
        //         )}
        //     </div>
        // </div>
    )
};

PostItem.defaultProps = {
    showActions: true
};

const GetStateData = state => ({
    auth: state.auth
});

// export default connect(
//     // GetStateData,
//     { addLike, removeLike,addUnLike}
// )(PostItem);
export default PostItem