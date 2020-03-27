import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTask } from '../actions/tasks/postActions/addTask';
import { Helmet } from 'react-helmet';

const AddMapPost = ({ auth: { isAuthenticated },addTask }) => {

    if(!isAuthenticated){
        alert("You are not logged in!");
        return <Redirect to="/login"/>
    }

    let [formData,setFormData] = useState({
        description: '',
        phone: '',
        address: '',
        country: '',
        city: ''
    });

    let { description,phone,address,country,city } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(description.indexOf(' ') <= 0)
            return alert("Inproper description");
        if(description === '' || phone === '' || country === '' || address === '' || city === '')
            return alert("Inproper values");
        if(description.length  <= 0 && description.length >= 250)
            return alert("Description is up to 250 characters");
        addTask(formData);
        alert("Congratulations! You have added task")
    }

    return (
        <div className="add-task-wrapper">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add task on map</title>
                    <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                    <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, add task to map"/>
                    <meta name="author" content="Patryk Romaniuk"/> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Helmet>

                <header>
                    <h1>Add task</h1>
                </header>

                <div className="inputs-wrapper">
                    <div className="input">
                        <h3>Description</h3>
                        <textarea name="description" value={ description } onChange={(e) => onChange(e)}  type="text"/>
                        <p>Number of characters: { description.length }, (max is 250)</p>
                    </div>
                    <div className="input">
                        <h3>Phone</h3>
                        <input name="phone" value={ phone } onChange={(e) => onChange(e)}  type="tel"/>
                    </div>
                    <div className="input">
                        <h3>Country</h3>
                        <input name="country" value={ country } onChange={(e) => onChange(e)}  type="country"/>
                    </div>
                    <div className="input">
                        <h3>City</h3>
                        <input name="city" value={ city } onChange={(e) => onChange(e)}  type="text"/>
                    </div>
                    <div className="input">
                        <h3>Address</h3>
                        <input name="address" value={ address } onChange={(e) => onChange(e)}  type="text"/>
                    </div>
                </div>

                <div className="add-map-post-btn" onClick={(e) => onSubmit(e)}>
                    Add task to map
                </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addTask })(AddMapPost);
