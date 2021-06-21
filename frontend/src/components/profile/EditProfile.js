import React, {Fragment, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {createProfile} from "../../action/profile";
import {Link, Redirect} from "react-router-dom";

const EditProfile =({checkR}) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        sex: '',
        country: '',
        education: '',
        location: '',
        selectedFile: ''
    });

    const{sex,country,education,location} = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(createProfile(formData));
    };

    const handleImageChange = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log('filename',file);
            console.log('fileResult',reader.result);
            setFormData({
                ...formData,
                selectedFile: reader.result
            });

        }
    }
    if (checkR) {
        return <Redirect to='/profile' />;
    }

    return (
        <Fragment>
            <h1 className='large text-primary'>Edit Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Add some changes to your profile
            </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                Picture :
                <div className="form-group">
                    <input name='fileSelect' type="file"  multiple onChange={(e)=>handleImageChange(e)}/>
                </div>

                <div className='form-group'>
                    Sex :
                    <input
                        type='text'
                        placeholder='sex'
                        name='sex'
                        value={sex}
                        onChange={e => onChange(e)}/>
                </div>
                <div className='form-group'>
                    Country :
                    <input
                        type='text'
                        placeholder='country'
                        name='country'
                        value={country}
                        onChange={e => onChange(e)}/>
                </div>
                <div className='form-group'>
                    Education :
                    <input
                        type='text'
                        placeholder='education'
                        name='education'
                        value={education}
                        onChange={e => onChange(e)}/>
                </div>
                <div className='form-group'>
                    Location :
                    <input
                        type='text'
                        placeholder='location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}/>
                </div>
                <div className='my-2'>
                    <input type="submit" className="btn btn-danger" value="Edit"/>
                </div>
            </form>
            <Link to={'/profile'}><button>Return</button></Link>
        </Fragment>
    );

}

const GetStateData = state =>({
    checkR:  state.profile.checkR
});

export default connect(
    GetStateData
)(EditProfile)