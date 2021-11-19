const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);


app.get("/api", (req,res)=>{
    res.json({"users":["userone","usertwo","usertree"]})
})

app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
})