import React, { Fragment } from 'react';
import { Dashboard } from './layout/Dashboard';
import { Home } from './layout/Home';
import { Cuenta } from './layout/Count';
import { Login } from './layout/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/count' element={< Cuenta />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;