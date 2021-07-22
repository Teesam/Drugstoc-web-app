import './header.css';
import Modal from '../modal/modal';
import { useState } from 'react';
import { storage, db } from '../../firebase';

const Header = () => {

    const [ modalSwitch, setModalSwitch ] = useState(false);
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
    const [ taskData, setTaskData ] = useState({
        taskType: '',
        taskTitle: '',
        taskDuration: 0,
        name: '',
        image: '',
        taskStage: '',
        taskPrice: 0
    });

    const postImageToFirebaseHandler = async () => {
        
    }

    const createNewTaskHandler = async () => {
        const response = db.collection('tasks').add({
                name: taskData.name,
                taskTitle: taskData.taskTitle,
                taskPrice: taskData.taskPrice,
                taskDuration: taskData.taskDuration,
                taskStage: taskData.taskStage,
                taskType: taskData.taskType
            });

        setModalSwitch(false);
    }

    return (
        <div className = 'Header'>
            <div id = 'logo'>
                <p id = 'logo-drug'>Drug</p>
                <p id = 'logo-stoc'>Stoc</p>
            </div>
            <button id = 'add-button'
                onClick = { () => {
                    setModalSwitch(true);
                }

                }
            >
                Add a new task
                <i id = 'plus-icon' className="fas fa-plus"></i>
            </button>

            {
                modalSwitch ? 
                <Modal onClick = { () => setModalSwitch(false) }>
                    <form id = 'modal-form' 
                        onSubmit = { (e) => {
                            e.preventDefault();

                            e.target.value = '';
                        }}>
                        <h1 id = 'header'>Task</h1>
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
                            onClick = { (e) => {
                                e.preventDefault();
                                createNewTaskHandler();
                            }
                            }
                        id = 'modal-submit'>Add a new task</button>
                    </form>
                </Modal>
                : ''
            }
        </div>
    )
}

export default Header;
