import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Body from './components/body/body';
import ArchivedTasks from './components/tasks/archived-tasks/archived-tasks';
import ClosedTasks from './components/tasks/closed-tasks/closed-tasks';
import CompletedTasks from './components/tasks/completed-tasks/completed-tasks';
import ActiveTasks from './components/tasks/active-tasks/active-tasks';

const App = () => {
  return (
    <Router>
        <div className = 'App'>

          <Route path =  '/'  exact strict component = { ActiveTasks } />

          <Route path =  '/archived'  exact strict component = { ArchivedTasks } />

          <Route path =  '/closed'  exact strict component = { ClosedTasks } />

          <Route path =  '/completed'  exact strict component = { CompletedTasks } />

        </div>
    </Router>
  );
}

export default App;
