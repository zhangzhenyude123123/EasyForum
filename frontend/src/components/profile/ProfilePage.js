import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const ProfilePage = ({profile,user})=> {

    if(profile === null){
        return (
          <Fragment>
              <p>You don't have Profile, Please add yours</p>
              <div className='my-2'>
                  <Link to='/editprofile'>
                      <button className='btn btn-danger'>
                          <i className='fas fa-user-minus'/> Add
                      </button>
                  </Link>
              </div>
          </Fragment>
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
                <p className='fas'>{profile.education}</p>
                <p className='fas'>{profile.location}</p>
                <img src={profile.selectedFile} alt='' />

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
}

export default ProfilePage;