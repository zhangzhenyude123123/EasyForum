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
                <div className="container container-change">
                <section className="profile s1">
                        <div className="background-white">
                            <h1 className='large text-primary profile-show'>Dashboard</h1>
                            <p className='lead'>
                                <i className='fas fa-user'/> Welcome {user && user.name}
                            </p>
                            <div className="d-lg-flex profile-location">
                                <div className="col-left">
                                    <img className="profile-img" src={profile.selectedFile} alt='' />
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                            <h4 className="">About Me</h4>
                                            <div className="card border-secondary mb-3">
                                                <div className="card-body">
                                                    <h3 className="card-title">Sex: </h3>
                                                    <p className="card-text">{profile.sex}</p>
                                                </div>
                                            </div>
                                            <div className="card border-secondary mb-3">
                                                <div className="card-body">
                                                    <h3 className="card-title">Country: </h3>
                                                    <p className="card-text">{profile.country}</p>
                                                </div>
                                            </div>
                                            <div className="card border-secondary mb-3">
                                                <div className="card-body">
                                                    <h3 className="card-title">Education: </h3>
                                                    <p className="card-text">{profile.education}</p>
                                                </div>
                                            </div>
                                            <div className="card border-secondary mb-3">
                                                <div className="card-body">
                                                    <h3 className="card-title">Location: </h3>
                                                    <p className="card-text">{profile.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <Link to='/editprofile'>
                                <button className='btn btn-danger'>
                                    <i className='fas fa-user-minus'/> Edit Account
                                </button>
                            </Link>
                        </div>
                </section>
                </div>


            </Fragment>
        );
    }
}

export default ProfilePage;