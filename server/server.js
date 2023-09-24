
const express = require('express');
const morgan = require('morgan'); //paa ver las peticiones al servidor por consola
const path = require('path');
const { mongoose } = require ('./database/database')

//const cors = require('cors');
/* const corsOptions ={
    origin:'http://localhost:3000', 
    //origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
} */


const app = express();

//Settings 

app.set('port', process.env.PORT || 4000);  //Indicando que tome el puerto dado por el sistema o el 4000

//Middlewares (funciones que se ejcutan antes de llegar a las rutas)

app.use(morgan('dev'));
app.use(express.json()); //Permite verificar que lo que llega es formato Json
//Activar este bloque cuando es development y deshabilitar el bloque de abajo de CORS
//app.use(cors(corsOptions))


app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://sonyproyectofront.onrender.com/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});


//Routes

app.use(require('./Routes/TaskRoutes'));


//Static File





//Iniciar el servidor

app.listen(app.get('port'), () =>{
    console.log(`Server on por ${app.get('port')}`);
    
})