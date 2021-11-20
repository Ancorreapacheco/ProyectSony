const Express = require('express');
const Path = require('path');
const Mongoose = require('mongoose');
const Passport = require('passport');
const Flash = require('connect-flash');
const Morgan = require('morgan');
const CookieParser = require('cookie-parser');
const BodyParser = require('body-parser');
const Session = require('express-session');

const { url } = require('./config/databse');
const { truncate } = require('fs');

Mongoose.connect(url, {
    useMongoClient: truncate
});
//Ccomentario
const app = Express();

app.set('port', process.env.PORT || 5000);


app.get("/api", (req,res)=>{
    res.json({"users":["userone","usertwo","usertree"]})
})

// Server listen port 

app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
})

