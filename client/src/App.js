import React, { Fragment } from 'react';
import { Dashboard } from './layout/Dashboard';
import { Home } from './layout/Home';
import { Cuenta } from './layout/Count';
import { Register } from './layout/Register';
import { Report } from './layout/Report';
import { Task } from './layout/Task';
import { Createproject } from './layout/Createproject';
import { Notifications } from './layout/Notifications';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tareas from './layout/Tareas';
import GestionProyectos from './layout/GestionProyectos';
import LogSesion from './layout/LogSesion';
import Activities from './layout/Activities';
import DefaultC from './layout/DefaultC';



function App(){
  //PARA EL COMPONENTE DASHBOARD

  //Aquí envío información para el componente de DashboardSummCard

  const infoCard=[
    {id:1,icon:'weekend',title:'Proyectos actuales',value:530,var:'+15%',spamTime:' que la semana pasada'},
    {id:2,icon:'person',title:'Usuarios actuales',value:230,var:'+3%',spamTime:' que el mes pasado'},
    {id:3,icon:'person',title:'Nuevos clientes',value:'3,462',var:'-2%',spamTime:' que el mes pasado'},
    {id:4,icon:'weekend',title:'Clientes satisfechos',value:5000,var:'+50%',spamTime:' que la semana pasada'}
  ]

  // PARA EL COMPONENTE DEL PERFIL O CUENTA

  //Aquí envío datos  del usuario
  const dataUser = [
    {
      id: 1,
      nombre: "Lina Florez",
      rol: "Usuario Lider",
      textBiogra:
        "Hola, soy Lina Florez, Decisiones: si no puede decidir, la respuesta es no. Si dos caminos igualmente difíciles, elija el más doloroso en el corto término (evitar el dolor es crear una ilusión de igualdad)",
        phone:3713445,
        email: 'lflorez@uninorte.edu.co',
        city:'Medellín, COL',
        nameComplete:"Lina Andrea Florez Albanes"
    },
  ];
  //Aquí envio los datos de los proyectos en que participa el usuario
  const userProjects=[
    {id:1, imgUrl:'https://miro.medium.com/max/2000/1*ghfEivqtCdLAFXbgBDEoyw.png', projectName:'Proyecto #1', title:'Estático', description:'As Uber works through a huge amount of internal management turmoil.'},
    {id:2, imgUrl:'https://www.reactjsindia.com/blog/wp-content/uploads/2021/05/Everything-to-know-about-ReactJs-Web-App-Development.jpg', projectName:'Proyecto #2', title:'Dinámico', description:'Music is something that every person has his or her own specific opinion about.'},
    {id:3, imgUrl:'https://3.bp.blogspot.com/-co9IzI0I4mI/XGS3iyQi1sI/AAAAAAAAFo4/RhLWOcJeBvE3XzBIy8akSmTZ5TTGgRJEwCLcBGAs/s1600/maxresdefault.jpg', projectName:'Proyecto #3', title:'Dinámico', description:'Why would anyone pick blue over pink? Pink is obviously a better color.'}
  ]


  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard infoCard={infoCard} />} />
          <Route exact path="/count" element={<Cuenta dataUser={dataUser} userProjects={userProjects} />} />
          <Route exact path='/login' element={<DefaultC />} />
          {/* <Route exact path='/login' element={<LogSesion />} /> */}
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/projects' element={<GestionProyectos />} />
          <Route exact path='/projects/create/task' element={<Task />} />
          <Route exact path='/projects/create' element={<Createproject />} />
          <Route exact path='/report' element={<Report />} />
          <Route exact path='/notifications' element={<Notifications />} />
          <Route exact path='/task' element={<Tareas/>} />
          <Route exact path='/activities' element={<Activities/>} />
          
          
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
