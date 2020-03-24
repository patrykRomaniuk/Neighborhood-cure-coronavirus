import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions/tasks';

const EditTask = ({ editTask,match }) => {

    let [newDescription,setNewDescription] = useState('');

    const onSubmit = () => {
        if(newDescription.indexOf(' ') <= 0)
            return alert("Inproper description");
        if(newDescription === '')
            return alert("Inproper values");
        if(newDescription.length  <= 0 && newDescription.length >= 250)
            return alert("Description is up to 250 characters");
        editTask(newDescription,match.params.task_id);
        alert("Congratulations! You have changed task")
    }

    useEffect(() => {
        const listenter = e => {
            if(e.key === 'Enter')
                onSubmit(e)
        }
        window.addEventListener('keydown',listenter);
    },[])

    const onChange = e => setNewDescription(e.target.value); 

    return (
        <div className="edit-task-description-wrapper">
            <header>
                <h1>Change task description</h1>
            </header>
            <textarea 
                value={ newDescription }
                onChange={e => onChange(e)}
            />
            <div className="edit-task-button" onClick={() => onSubmit()}>
                Change description
            </div>
        </div>
    )
}

export default connect(null, { editTask })(EditTask);