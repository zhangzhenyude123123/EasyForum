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
            <Link to={`/postboard/${user._id}`}>
                <button className="btn badge-dark">Return</button>
            </Link>
            <div className="Form-location">
                <div className="container">
                    <h1 className="large text-primary">Add New Post</h1>
                    <div className="col-lg-6">
                        <form  className="form" onSubmit={e => onSubmit(e)}>
                            {/*<div className="form-row">*/}
                            {/*    <div className="col form-group">*/}
                            {/*        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"*/}
                            {/*               data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>*/}
                            {/*        <div className="validate"></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="col form-group">*/}
                            {/*        <input type="email" className="form-control" name="email" id="email"*/}
                            {/*               placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>*/}
                            {/*        <div className="validate"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"*/}
                            {/*           data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>*/}
                            {/*    <div className="validate"></div>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <textarea
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
                    </div>
                </div>
            </div>
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