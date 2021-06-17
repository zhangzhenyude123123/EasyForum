import React,{Fragment,useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch} from "react-redux";

import './App.css';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import setAuthToken from "./tool/setAuthToken";
import Navbar from './components/layout/Navbar';

import {loadUser} from "./action/auth";
import PostBoard from "./components/PostBoard";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App =() => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // dispatch(loadUser());
        dispatch(loadUser());
    }, [currentId, dispatch]);

    return (
        <Router>
            <Fragment>
                <Navbar/>
                {/*<Route exact path="/" component={Landing}/>*/}
                <section className="container">
                    <Switch>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/postboard" component={PostBoard}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App

