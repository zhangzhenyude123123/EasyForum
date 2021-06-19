import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const ProfilePage = ({profile,user})=> {

    if(profile === null){
        return (
          <></>
        );
    }
    else {
        return (
            <Fragment>
                <h1 className='large text-primary'>Dashboard</h1>
                <p className='lead'>
                    <i className='fas fa-user'/> Welcome {user && user.name}
                </p>

                <p className='fas'>{profile.sex}</p>
                <p className='fas'>{profile.country}</p>
                <p className='fas'>{profile.location}</p>
                <div className='my-2'>
                    <Link to='/editprofile'>
                        <button className='btn btn-danger'>
                            <i className='fas fa-user-minus'/> Edit Account
                        </button>
                    </Link>
                </div>
            </Fragment>
        );
    }
};

ProfilePage.propTypes = {};

export default ProfilePage;