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
import Alert from "./components/layout/Alert";
import LimitedRouter from "./routers/LimitedRouter";

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
                    <Alert/>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/community" component={Community}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <LimitedRouter exact path="/profile" component={Profile}/>
                        <LimitedRouter exact path="/editprofile" component={EditProfile}/>
                        <Route exact path="/posts/:id" component={PostPage}/>
                        <LimitedRouter exact path="/postboard/:id" component={PostBoard}/>
                        <LimitedRouter exact path="/addpost" component={PostForm}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App

