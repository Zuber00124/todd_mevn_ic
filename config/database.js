const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true})
    .then(() => console.log('Connected To DATABAase'))
    .catch(() => console.error('An ERROR has Occured', err));


module.exports = db;