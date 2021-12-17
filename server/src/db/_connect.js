const mongoose = require('mongoose');

function _connect() {

    const uri = "mongodb+srv://" + process.env.USERNAME + ":" + "Sonymanager" + "@cluster0.bhd6v.mongodb.net/" + process.env.DBNAME + "?retryWrites=true&w=majority";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(
            () => {
                console.log('Connected!');
            },
            (err) => {
                console.log('Error', err);
            }
        )
}

module.exports = _connect;