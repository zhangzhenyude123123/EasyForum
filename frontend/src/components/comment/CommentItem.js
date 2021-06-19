import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from "react-moment";

const CommentItem = ({
     comment
 }) => (
    <div className='post bg-white p-1 my-1'>
        <div>
            {/*<Link to={`/profile/${user}`}>*/}
            {/*    <img className='round-img' src={avatar} alt='' />*/}
                <h4>{comment.name}</h4>
            {/*</Link>*/}
        </div>
        <div>
            <p className='my-1'>{comment.text}</p>
            <p className='post-date'>
                Posted on <Moment format='YYYY/MM/DD'>{comment.date}</Moment>
            </p>
        </div>
    </div>
);

export default CommentItem

//
// const GetStateData = state => ({
//     auth: state.auth
// });
//
// export default connect(
//     GetStateData
// )(CommentItem);