const mongoose = require('mongoose');

function _connect() {

    const uri = "mongodb+srv://" + "Sonymanager" + ":" + "Sonymanager" + "@cluster0.bhd6v.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
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