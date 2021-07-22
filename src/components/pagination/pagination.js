import  './pagination.css';

const Pagination = ({ totalTasks, tasksPerPage }) => {

    const pageNumbers = [];

    for( let i = 0; i < Math.ceil(totalTasks / tasksPerPage); i++){
        pageNumbers.push(i);
        }



    return(
        <div className = 'Pagination'>
            <ul>
                { 
                    pageNumbers.map( ( number, i ) => {
                        return  <li key = { i }>
                                    <a href = '#' className = 'Pagination-link'>
                                        { number }
                                    </a>
                                </li>
                    })
                }
            </ul>
        </div>
    )

}

export default Pagination;