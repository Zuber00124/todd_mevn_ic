const express = require('express');
const app = express();

const config = require('./config'); 
const db= require('./config/database');

const useRouter = require('./routes/user');

const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);

app.use('/user', useRouter);

app.listen(config.port, console.log('server has started on port http:localhost:%s', config.port));