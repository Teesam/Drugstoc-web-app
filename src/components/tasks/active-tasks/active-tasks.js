import './active-tasks.css';
import Header from '../../header/header';
import Search from '../../search/search';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import Loading from '../../loading/loading';
import Task from '../task';
import Pagination from '../../pagination/pagination';

const ActiveTasks = () => {

    const [ tasks, setTasks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ tasksPerPage ] = useState(6);
    const [ filterText, setFilterText ] = useState('');
    
    const totalTasks = tasks.length;
    let max = totalTasks.length - currentPage;
    let min = totalTasks.length - currentPage;
    let totalPages = Math.ceil(tasks.length / tasksPerPage);


    useEffect( () => {

        db.collection('tasks')
        .get()
        .then( snapshot => {
          const tasks = [];
    
            snapshot.forEach( doc => {
            const data = ({ ...doc.data(), id: doc.id});
            tasks.push(data);
          });

        setTasks(tasks);
        setIsLoading(true);
     
        
        })

      }, [])


      const filterHandler = (e) => {
        setFilterText(e.target.value);
      }

      const indexOfLastPageTask = currentPage * tasksPerPage;
      const indexOfFirstPageTask = indexOfLastPageTask - tasksPerPage;
      
      //Filtering the tasks
      let filteredTasks = tasks.filter( val => {
        if(filterText === ''){
            return val;
        }else if( val.taskType.toLowerCase().includes(filterText.toLowerCase())){
            return val;
        }
        });

        // getting the tasks on the current page
      const currentTask = filteredTasks.slice(indexOfFirstPageTask, indexOfLastPageTask);
      
      


    return (
        <div className = 'Active-tasks'>
            <Header />
            <Search />

            <div id = 'body-holder'>
                {/* <Menu /> */}
                <div className = 'Menu'>
                    <div>
                        <h4>Tags</h4>
                        <div className = 'Box-holder'>
                            <input value = 'custom-task' type = 'checkbox' onChange = { filterHandler }/>
                            <label>Custom task</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input value = 'marketing & sales' type = 'checkbox' onChange = { filterHandler }/>
                            <label>Marketing and sales</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input value = 'integration' type = 'checkbox' onChange = { filterHandler }/>
                            <label>Integration</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input value = 'optimization' type = 'checkbox' onChange = { filterHandler }/>
                            <label>Optimization</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input value = 'deployment' type = 'checkbox' onChange = { filterHandler }/>
                            <label>Deployment</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input value = 'testing' type = 'checkbox'
                                onChange = { filterHandler }
                            />
                            <label>Testing</label>
                        </div>
                    </div>

                    <div>
                        <h4>Task price and range</h4>
                        <div className = 'Box-holder'>
                            <input type = 'checkbox' />
                            <label>Less than N100</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input type = 'checkbox' />
                            <label>N100 - N300</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input type = 'checkbox' />
                            <label>N301 - N900</label>
                        </div>
                        <div className = 'Box-holder'>
                            <input type = 'checkbox' />
                            <label>Above N900</label>
                        </div>
                    </div>
                </div>

                <div id = 'tasks-holder'>
                    <div id = 'tasks-holder-top'>
                        <ul>
                            <NavLink to = '/' className = 'Selector' exact activeClassName = 'Selector-active'>Active tasks({ ' ' + `${tasks.length}` + ' '})</NavLink>
                            <NavLink to = '/completed' className = 'Selector' exact activeClassName = 'Selector-active'>Completed</NavLink>
                            <NavLink to = '/archived' className = 'Selector' exact activeClassName = 'Selector-active'>Archived</NavLink>
                            <NavLink to = '/closed' className = 'Selector' exact activeClassName = 'Selector-active'>Closed</NavLink>
                        </ul>
                        <div id = 'paginate-holder'>
                            <button disabled = { ( totalPages - currentPage) === 0 } className = 'Paginate' 
                                onClick = { () => {
                                    let nextPage = currentPage + 1;
                                    setCurrentPage(nextPage);
                                }
                            }>Next</button>
                            <div id = 'demacator'></div>
                            <button disabled = { currentPage === 1 } className = 'Paginate'
                                onClick = { () => {
                                    let prevPage = currentPage - 1;
                                    setCurrentPage(prevPage);
                                }
                            }
                            >Prev</button>
                        </div>
                    </div>
                
                <Task filterText = { filterText }
                     id = 'task-import' 
                     tasks = { currentTask } 
                     loading = { isLoading } 
                     currentPage = { currentPage } 
                />

                <Pagination 
                    totalTasks = { totalTasks } 
                    tasksPerPage = { tasksPerPage }
                />

            
                </div>

                { 
                    !isLoading ?

                    <Loading />

                    : ''
                }

            </div>

            
        </div>
    )
}

export default ActiveTasks;
