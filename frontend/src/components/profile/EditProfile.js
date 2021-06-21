import React, {Fragment, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {createProfile} from "../../action/profile";

const EditProfile =() => {

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


    return (
        <Fragment>
            <h1 className='large text-primary'>Edit Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Add some changes to your profile
            </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input name='fileSelect' type="file"  multiple onChange={(e)=>handleImageChange(e)}/>
                </div>

                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='sex'
                        name='sex'
                        value={sex}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='country'
                        name='country'
                        value={country}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='education'
                        name='education'
                        value={education}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className='my-2'>
                    <input type="submit" className="btn btn-danger" value="Edit Account"/>
                </div>
            </form>
        </Fragment>
    );

};

const GetStateData = state => ({
    profile: state.profile
});

export default connect(
    // GetStateData
)(EditProfile)