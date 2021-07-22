import { useReducer, createContext } from 'react';

export const Context = createContext();

const tasks = [
    {
        name: '',
        delivery: '',
        title: '',
        taskType: '',
        image: '',
        price: ''
    }
]


function reducer(state = tasks, action) {
    switch(action.type){
        case 'SWITCH':
            return{  checked: !state.checked }
            default: 
        return state
    }
}


const Store = (props) => {

    

    const [ state, dispatch ] = useReducer(reducer, { checked: true} )

    return(
        <Context.Provider value = {{ state, dispatch }}>
            { props.children }
        </Context.Provider>
    )
    
}

export default Store;