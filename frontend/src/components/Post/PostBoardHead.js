import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

const PostBoardHead =() => {
    return (
        <Fragment>
            <div className="container">
                <section id="hero">
                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Stimulate Your Creativity</h2>
                                <p>Find inspiration among developers all over the world</p>
                                <div>
                                    <Link to='/addpost'><button className="btn btn-primary">AddPost</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}


export default PostBoardHead;