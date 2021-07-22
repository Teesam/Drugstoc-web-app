import './completed-tasks.css';
import Header from '../../header/header';
import Search from '../../search/search';
import Menu from '../../menu/menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const CompletedTasks = () => {

    const [ tasks, setTasks ] = useState([])

    return (
        <div className = 'Completed-tasks'>
            <Header />
            <Search />
            <div id = 'body-holder'>
                <Menu />

                <div id = 'tasks-holder'>
                    <div id = 'tasks-holder-top'>
                        <ul>
                            <NavLink to = '/' className = 'Selector' exact activeClassName = 'Selector-active'>Active tasks</NavLink>
                            <NavLink to = '/completed' className = 'Selector' exact activeClassName = 'Selector-active'>Completed</NavLink>
                            <NavLink to = '/archived' className = 'Selector' exact activeClassName = 'Selector-active'>Archived</NavLink>
                            <NavLink to = '/closed' className = 'Selector' exact activeClassName = 'Selector-active'>Closed</NavLink>
                        </ul>
                        <div id = 'paginate-holder'>
                            <p className = 'Paginate'>Next</p>
                            <div id = 'demacator'></div>
                            <p className = 'Paginate'>Prev</p>
                        </div>
                    </div>
                </div>

                {/* {
                tasks.length > 0 && tasks.map( ( task, index ) => {
                    return  <div className = 'Task-holder' key = { index }>
                                <i id = 'read-icon' className = "fas fa-folder"></i>
                                <div>
                                    <h4>{ task.title }</h4>
                                    <p>{ task.taskType }</p>
                                </div>
                                <div>
                                    <h5>{ task.price }</h5>
                                    <p>Task price</p>
                                    <p>{ delivery + ' ' + Within + ' ' + `${ task.deliveryDuration }` + ' '  +  days }</p>
                                </div>
                                <div>
                                    <img src =  { task.image }/>
                                    <div>
                                        <h5>{ task.name }</h5>
                                        <p>Assigned to</p>
                                    </div>
                                </div>
                            </div>
                }) 
            } */}
            </div>
        </div>
    )
}

export default CompletedTasks;
                                               