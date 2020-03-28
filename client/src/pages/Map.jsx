import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import TasksWrapper from '../components/Tasks/TasksWrapper';
import ReactMapGL, { Popup } from 'react-map-gl';
import { getTasks,getTaskByID,getUserLocationTasks } from '../actions/tasks/getActions/getActions';
import { changeIsSelected } from '../actions/tasks/changeIsSelected'
import { connect } from 'react-redux';
import LocationTasksWrapper from '../components/LocationTasks/LocationTasksWrapper';
import Loader from 'react-loader';
import { Helmet } from 'react-helmet';

const Map = ({ taskReducer: { tasks,locationTasks },auth,getTasks,getUserLocationTasks }) => {

    let [selectedTask, setSelectedTask] = useState(null);

    let [viewPort,setViewPort] = useState({
        longitude: auth.user !== null ? auth.user.locationCoordinates.coordinates[0] : 2,
        latitude: auth.user !== null ? auth.user.locationCoordinates.coordinates[1] : 2,
        zoom: auth.user !== null ? 12 : 1,
        width: '80vw',
        height: '70vh'
    });

    useEffect(() => {
        getTasks();
        if(localStorage.getItem('userLocation')) getUserLocationTasks(localStorage.getItem('userLocation').toString());
        const listenter = e => {
            if(e.key === 'Escape')
                setSelectedTask(null);
        }
        window.addEventListener('keydown',listenter);
        return () => {
            window.removeEventListener('keydown',listenter);
        }
    },[])

    return (
        <div className="map-page-wrapper" style={{ marginTop: (tasks === null || tasks === [] || tasks ===  {} || tasks === undefined) ? '0em' : '4.5em' }}>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Map - NeighborlyHelp</title>
                <meta name="description" content="Check the tasks in your area"/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly, neighborly map, neighborhood help map, neighborly helps"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>

            <header>
                <h1>Map</h1>
            </header>
            {
                tasks === null || tasks === [] || tasks ===  {} || tasks === undefined ?
                (<Loader />)
                :
                (
                    <div className="map-wrapper">
                        <ReactMapGL
                            {...viewPort}
                            mapboxApiAccessToken='pk.eyJ1IjoiY2hldHRvIiwiYSI6ImNrN3VoeGx3NDAzZnYzZ21vZjcxOWhrZ3oifQ.jUJdZx6vP_litA_3KD_HxQ'
                            mapStyle='mapbox://styles/mapbox/streets-v11'
                            onViewportChange={viewport => {
                                setViewPort(viewport)
                            }}>
                            <TasksWrapper setSelectedTask={setSelectedTask} tasks={tasks.data}/>
                                {
                                    selectedTask !== null ?
                                    (
                                        <Popup 
                                        longitude={selectedTask.location.coordinates[0]} 
                                        latitude={selectedTask.location.coordinates[1]}
                                        closeOnClick={false}
                                        closeButton={true}
                                        anchor="top"
                                        onClose={() => {
                                            setSelectedTask(null);
                                        }}>
                                            <div className="popup-description">
                                                <h3>Description</h3>
                                                {
                                                    selectedTask.description.length >= 50 ?
                                                    (
                                                        <div>
                                                            <p>{ selectedTask.description.slice(0,50) }</p> {' '}
                                                            <Link to={`/task/${selectedTask._id}`}>Read more...</Link>
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <p>{ selectedTask.description }</p>
                                                    )
                                                }
                                            </div>
                                            <div className="popup-phone">
                                                <h3>Phone:</h3>
                                                { auth.user !== null ? (<p>{ selectedTask.phone}</p>) : (<p>You have to be logged in</p>) }
                                            </div>
                                            <Link target="_blank" className="popup-btn" to={`/task/${selectedTask._id}`}>Check task</Link>
                                        </Popup>
                                    )
                                    :
                                    null
                                }
                        </ReactMapGL>
                    </div>
                )
            }

            <div className="location-info">
                <p>Longitude: { viewPort.longitude }, Latitude: { viewPort.latitude }</p>
            </div>

            <div className="location-tasks">
                {
                    auth.user !== null &&
                    (
                        <header>
                            <h1>Tasks in your location ({ localStorage.getItem('userLocation') }):</h1>
                        </header>
                    )
                }

                <div className="tasks-wrapper">
                   <LocationTasksWrapper tasks={locationTasks} auth={auth}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    taskReducer: state.taskReducer
});

export default connect(mapStateToProps, { getTaskByID,getTasks,changeIsSelected,getUserLocationTasks })(Map);
