const express = require('express');

const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors')

const server = express();

const usersRouter = require('../routes/users/users-routes.js');
const authRouter = require('../routes/auth/auth-router.js');


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger('dev'));

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send("Stop Trying to make Fetch Happen!")
})

module.exports = server;