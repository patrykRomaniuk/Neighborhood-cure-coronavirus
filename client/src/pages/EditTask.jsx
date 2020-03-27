import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions/tasks/putActions/editTask';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Change Task</title>
                <meta name="description" content="Edit your task description"/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, edit task neighborly"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            <header>
                <h1>Change task description</h1>
            </header>
            <textarea 
                className="edit-task-input"
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