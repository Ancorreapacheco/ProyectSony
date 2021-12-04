import './App.css';
import { Home } from './layout/home';
import { Cuenta } from './layout/cuenta';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cuenta' element={< Cuenta />}/>
      </Routes>
    </Router>
  );
}

export default App;