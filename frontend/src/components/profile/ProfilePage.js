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
                <img className='profile-img' src={profile.selectedFile} alt='' />

                Sex: <p className='fas'>{profile.sex}</p>
                Country: <p className='fas'>{profile.country}</p>
                Education: <p className='fas'>{profile.education}</p>
                Location: <p className='fas'>{profile.location}</p>


                <div className='my-2'>
                    <Link to='/editprofile'>
                        <button className='btn btn-danger'>
                            <i className='fas fa-user-minus'/> Edit Account
                        </button>
                    </Link>
                </div>

                <div className='profile-top bg-primary'>

                    <h1 className='large'>{profile.name}</h1>
                </div>

                <section className="profile s1">
                    <div className="container" id="about">
                        <div className="background-white">
                            <div className="d-lg-flex">
                                <div className="col-left">
                                        <img className="profile-img" src={profile.selectedFile} alt='' />
                                </div>
                                <div className="col-right">
                                    <div className="flat-title t1">
                                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                            <h4 className="sub-title mg-b22">About Me</h4>
                                            <h2 className="title-section mg-b26 color-d12">Hi, I am here to <span
                                                className="color-d4">help you.</span></h2>
                                            <p>
                                                Hi, if you need PSD template, landing page or Website design within a
                                                day? then you can tell me, I'm here to help you. I can design any kind
                                                of PSD template. Check my portfolio.
                                            </p>
                                        </div>
                                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                            <div className="fl-btn btn-general">
                                                <a href="#" className="f-w500 color-1 lt-sp07">Hire Me</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Fragment>
        );
    }
}

export default ProfilePage;