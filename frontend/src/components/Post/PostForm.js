import React, {Fragment, useState} from "react";
import {addPost} from "../../action/posts";
import {connect, useDispatch} from 'react-redux';
import {Link, Redirect} from "react-router-dom";

const PostForm = ({checkR,user}) =>{
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const onSubmit = async e => {
        e.preventDefault();
        dispatch(addPost({text}));
    };

    if (checkR) {
        return <Redirect to={`/postboard/${user._id}`}/>;
    }

    return(
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Add New Post</h1>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            name='text'
                            cols='30'
                            rows='5'
                            placeholder='your idea'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Post"/>
                </form>
                <Link to={`/postboard/${user._id}`}><button>Return</button></Link>
            </section>
        </Fragment>
    );
}

const GetStateData = state => ({
    checkR:  state.post.checkR,
    user: state.auth.user
});

export default connect(
    GetStateData
)(PostForm)