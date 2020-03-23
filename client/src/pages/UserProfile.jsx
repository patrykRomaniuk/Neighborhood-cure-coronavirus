import React,{ useState,useEffect } from 'react';
import Moment from 'react-moment';
import { addDescription,removeDescription } from '../actions/auth';
import { getUserTasks } from '../actions/tasks';
import { connect } from 'react-redux';
import UserProfileTasksWrapper from '../components/UserProfileTasks/UserProfileTasksWrapper';

const UserProfile = ({ auth, addDescription,removeDescription,getUserTasks,taskReducer }) => {

    useEffect(() => {
        getUserTasks();
    },[])

    let [formData,setFormData] = useState({
        description: '',
        isEditDescription: false
    });

    let { description,isEditDescription } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return auth.user !== null && auth.user !== {} && auth.user !== [] && auth.user !== undefined && (
        <div className="user-profile-page-wrapper">
            <div className="image-date-section">
                <img src={auth.user.avatar} alt=""/>
                <p>Joined at: <Moment format="DD.MM.YYYY">{ auth.user.date }</Moment></p>
            </div>
            <div className="basic-user-data">
                <h1>{ auth.user.name } { auth.user.lastName }</h1>
            </div>
            <div className="contact-user-data">
                <p>{ auth.user.age } years old</p>
                <p>Phone: { auth.user.phone }</p>
                <p>Location: { auth.user.location.country }, { auth.user.location.city }</p>
            </div>

            <div className="description-section">
                <header>
                    <h1>Description</h1>
                </header>
                    {
                        auth.user.description ?
                        (
                            <div className="user-has-description">
                                <p>{auth.user.description}</p>

                                <div className="remove-description-button" onClick={() => removeDescription()}>
                                    Remove Description
                                </div>

                                <div className="edit-description-button" onClick={() => setFormData({ isEditDescription: !isEditDescription })}>
                                    Edit description
                                </div>

                                <textarea
                                 value={ description }
                                onChange={e => onChange(e)} 
                                name="description"
                                style={{ display: isEditDescription ? "block" : "none" }}
                                className="add-description-area"
                                />
                            </div>
                        ) :
                        (
                            <div className="description-text">
                                
                                <textarea
                                value={ description }
                                onChange={e => onChange(e)}
                                name="description"
                                className="add-description-area"
                                />

                                <div 
                                className="description-btn" 
                                onClick={() => {
                                    if(description === '') return alert("You've forgotten to fullfil the description");
                                    addDescription(description);
                                    setFormData({ description: '' })
                                }}>
                                    Add description
                                </div>



                            </div>
                        )
                    }
            </div>

            <div className="user-tasks-wrapper">
                <header>
                    <h1>Your Tasks</h1>
                </header>
                <UserProfileTasksWrapper userTasks={ taskReducer.tasks.data }/>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    taskReducer: state.taskReducer
});

export default connect(mapStateToProps, { addDescription,removeDescription,getUserTasks })(UserProfile);