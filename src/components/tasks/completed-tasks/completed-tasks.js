import './completed-tasks.css';
import Header from '../../header/header';
import Search from '../../search/search';
import Menu from '../../menu/menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const CompletedTasks = () => {

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

                
            </div>
        </div>
    )
}

export default CompletedTasks;
                                               