import React, {useEffect} from 'react';

import {getCurrentProfile} from "../../action/profile";
import {connect, useDispatch} from "react-redux";
import ProfilePage from "./ProfilePage";

const Profile =({
    profile:{profile} ,
    auth:{user}
}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCurrentProfile())
    },[getCurrentProfile]);

    return(
        <ProfilePage profile={profile} user={user}/>
    );
};

const GetStateData = state => ({
    profile : state.profile,
    auth: state.auth,
});

export default connect(
    GetStateData,
)(Profile);