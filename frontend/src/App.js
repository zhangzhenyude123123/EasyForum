import React,{Fragment,useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch} from "react-redux";

import './App.css';
import setAuthToken from "./tool/setAuthToken";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from './components/layout/Navbar';
import {loadUser} from "./action/auth";
import PostBoard from "./components/Post/PostBoard";
import PostForm from "./components/Post/PostForm";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import PostPage from "./components/PostPage";
import Landing from "./components/Landing";
import Community from "./components/Commuity";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App =() => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadUser());
    }, [currentId, dispatch]);

    return (
        <Router>
            <Fragment>
                <Navbar/>
                <section className="container">
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/community" component={Community}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/editprofile" component={EditProfile}/>
                        <Route exact path="/posts/:id" component={PostPage}/>
                        <Route exact path="/postboard/:id" component={PostBoard}/>
                        <Route exact path="/addpost" component={PostForm}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App

