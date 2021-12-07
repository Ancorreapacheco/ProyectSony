import React, { Fragment } from 'react';
import { Dashboard } from './layout/Dashboard';
import { Home } from './layout/Home';
import { Cuenta } from './layout/Count';
import { Login } from './layout/Login';
import { Register } from './layout/Register';
import { Projects } from './layout/Projects';
import { Task } from './layout/Task';
import { Createproject } from './layout/Createproject';
import { Notifications } from './layout/Notifications';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Aside } from './layout/Aside';

function App(){
  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/count' element={< Cuenta />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/projects/create/task' element={<Task />} />
          <Route exact path='/projects/create' element={<Createproject />} />
          <Route exact path='/notifications' element={<Notifications />} />

          <Route exact path='/aside' element={<Aside />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;