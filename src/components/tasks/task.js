import './task.css';
import { useState } from 'react';
import Modal from '../modal/modal';
import { db } from '../../firebase';

const Task = ({ tasks, loading, currentPage, id, filterText }) => {

    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ modalSwitch, setModalSwitch ] = useState(false);
    const [ deleteCheck, setDeleteCheck ] = useState(false);
    const [ taskData, setTaskData ] = useState({
        taskType: '',
        taskTitle: '',
        taskDuration: 0,
        name: '',
        image: '',
        taskStage: '',
        taskPrice: 0
    });
    const [ taskType ] = useState([
        { type: 'custom task'},
        { type: 'integration'},
        { type: 'deployment'},
        { type: 'marketing & sales'},
        { type: 'testing'},
        { type: 'optimization'}
    ]);
    const [ taskStage ] = useState([
        { stage: 'In review'},
        { stage: 'Verify'},
        { stage: 'In progress'},
        { stage: 'Waiting approval'}
    ]);


    if(loading){
    return (
    <div className = 'Tasks' id = { id }>
                <div className = 'Current-keeper'> Current <p id = 'current'>{currentPage}</p>  </div>
                {
                     tasks.map( task => {
                         const deleteTaskHandler = (task) => {
                             console.log('--->', task.id);
                            // db.collection().doc(id)
                        }
                        return  <div    
                                onMouseLeave = { () => {
                                    setDisplayOptions(false);
                                }}
                                className = 'Task-holder'
                                key = { task.id }
                                >
                                <i id = 'read-icon' className = "fas fa-list-alt"></i>
                                <div id = 'title-holder'>
                                    <h2 id = 'title'>{ task.taskTitle }</h2>
                                    {
                                        (task.taskType.toLowerCase()) === 'custom task' ?
                                        <p id = 'custom-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                    {
                                        (task.taskType.toLowerCase()) === 'deployment' ?
                                        <p id = 'deployment-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                    {
                                        (task.taskType.toLowerCase()) === 'integration' ?
                                        <p id = 'integration-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                    {
                                        (task.taskType.toLowerCase()) === 'testing' ?
                                        <p id = 'testing-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                    {
                                        (task.taskType.toLowerCase()) === 'optimization' ?
                                        <p id = 'optimization-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                    {
                                        (task.taskType.toLowerCase()) === 'marketing & sales' ?
                                        <p id = 'market-color'>{ task.taskType }</p>
                                        : ''
                                    }
                                </div>
                                <div className = 'Price-holder'>
                                    <h4 id = 'price'>{ 'N' + `${task.taskPrice}`+ '.00' }</h4>
                                    <p style = {{ marginTop: '.5rem', marginBottom: '.5rem' }}>Task price</p>
                                    <p>{ 'Delivery:' + ' ' + 'Within' + ' ' + `${ task.taskDuration }` + ' '  +  'days' }</p>
                                </div>
                                <div id = 'assigned-holder'>
                                    {/* <img src =  { task.image }/> */}
                                    <div>
                                        <h4 id = 'name'>{ task.name }</h4>
                                        <p>Assigned to</p>
                                    </div>
                                </div>

                                <div id = 'stage-holder'>
                                    {
                                        ( task.taskStage.toLowerCase() ) === 'verify' ?
                                        <p id = 'verify'>{ task.taskStage}</p>
                                        : ''
                                    }

                                    {
                                        ( task.taskStage.toLowerCase() ) === 'in review' ?
                                        <p id = 'in-review'>{ task.taskStage}</p>
                                        : ''
                                    }

                                    {   
                                        ( task.taskStage.toLowerCase() ) === 'in progress' ?
                                        <p id = 'in-progress'>{ task.taskStage}</p>
                                        : ''
                                    }

                                    {   
                                        ( task.taskStage.toLowerCase() ) === 'waiting approval' ?
                                        <p id = 'waiting-approval'>{ task.taskStage}</p>
                                        : ''
                                    }
                                </div>

                                <i id = 'read-icon' className = "fas fa-comment-alt"></i>

                                <div id = 'options'
                                    onMouseOver = { ( index ) => {
                                        setDisplayOptions(true);
                                    }

                                    }
                                >
                                    <div id = 'option-1'></div>
                                    <div id = 'option-2'></div>
                                    <div id = 'option-3'></div>
                                </div>

                                
                                <div id = 'edit-delete-holder'>
                                
                                    {
                                        displayOptions ?

                                        <div>
                                            <i onClick = { () => setModalSwitch(true)} id = 'edit-icon' className = 'fas fa-pen'></i>
                                            <i onClick = { () => setDeleteCheck(true)} id = 'delete-icon' className = 'fas fa-trash-alt'></i>
                                        </div>

                                        : ''
                                    }

                                </div>

                                

                            {
                                modalSwitch ?
                                <Modal onClick = { () => setModalSwitch(false) } >
                                    <form id = 'modal-form' 
                                        onSubmit = { (e) => {
                                            e.preventDefault();

                                        }}>
                                        <h1>Task</h1>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Title</label>
                                            <input
                                                onChange = { (e) => {
                                                    setTaskData({
                                                        ...taskData, taskTitle: e.target.value
                                                    })
                                                }}
                                            className = 'Modal-input' type = ' text' placeholder = 'Title here' />
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Assign to</label>
                                            <input
                                                onChange = { (e) => {
                                                    setTaskData({
                                                        ...taskData, name: e.target.value
                                                    })
                                                }}
                                            className = 'Modal-input' type = ' text' placeholder = 'Assign to' />
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Stage</label>
                                            <div id = 'select-holder'>
                                                <select className = 'Modal-select-input' name = 'task-type'
                                                onChange = { (e) => {
                                                    const selectedTaskStage = e.target.value;
                                                    setTaskData({
                                                        ...taskData, taskStage: selectedTaskStage
                                                    })
                                                }}>
                                                    <option className = 'Modal-option' value="">Select task type...</option>
                                                    { taskStage && taskStage.map( (stage, i) => (
                                                        <option
                                                            className = 'Modal-option'
                                                            key={ i }
                                                            value={ stage.stage }
                                                        >
                                                            { stage.stage }
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Type</label>
                                            <div id = 'select-holder'>
                                                <select className = 'Modal-select-input' name = 'task-type'
                                                onChange = { (e) => {
                                                    const selectedTaskType = e.target.value;
                                                    setTaskData({
                                                        ...taskData, taskType: selectedTaskType
                                                    })
                                                }}>
                                                    <option className = 'Modal-option' value="">Select task type...</option>
                                                    { taskType && taskType.map( (type, i) => (
                                                        <option
                                                            className = 'Modal-option'
                                                            key={ i }
                                                            value={ type.type }
                                                        >
                                                            { type.type }
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Duration</label>
                                            <input
                                                onChange = { (e) => {
                                                    setTaskData({
                                                        ...taskData, taskDuration: parseInt(e.target.value)
                                                    })
                                                }}
                                            className = 'Modal-input' type = ' text' placeholder = 'Duration here' />
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Price</label>
                                            <input
                                                onChange = { (e) => {
                                                    setTaskData({
                                                        ...taskData, taskPrice: parseInt(e.target.value)
                                                    })
                                                }}
                                            className = 'Modal-input' type = ' text' placeholder = 'Price here' />
                                        </div>
                                        <div className = 'Input-holder'>
                                            <label className = 'Modal-label'>Image</label>
                                            <input className = 'Modal-input' type = 'file' />
                                        </div>
                                        <button
                                            onClick = { () => {
                                                db.collection('tasks').doc(task.id).set({
                                                    ...task,
                                                    name: taskData.name,
                                                    taskType: taskData.taskType,
                                                    taskTitle: taskData.taskTitle,
                                                    taskStage: taskData.taskStage,
                                                    taskDuration: taskData.taskDuration,
                                                    taskPrice: taskData.taskPrice 
                                                });

                                                setModalSwitch(false);
                                            } }
                                        id = 'modal-submit'>Edit task</button>
                                    </form>
                                </Modal>
                                : ''
                            }

                            {
                                deleteCheck ? 
                                <Modal onClick = { () => setDeleteCheck(false) }>
                                    <div id = 'modal-holder'>
                                        <h1 id = 'delete-caution'>Are you sure you want to delete this task?</h1>

                                        <div id = 'checker-holder'>
                                            <button onClick = { () => {
                                                //  console.log(db.collection('tasks').doc(task.id));
                                                //  console.log(task);
                                                //  console.log('Worked');
                                                 deleteTaskHandler(task);
                                                 setDeleteCheck(false);
                                             } } id = 'proceed-button'>Proceed</button>
                                            <button onClick = { () => setDeleteCheck(false)} id = 'cancel-button'>Cancel</button>
                                        </div>
                                    </div>
                                </Modal>
                                : ''
                            }

                            </div>
                    })
                }
        </div> 
        )
    }

    return <p>Loading...</p>;
}


export default Task;