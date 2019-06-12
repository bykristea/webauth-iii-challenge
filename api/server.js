const express = require('express');

const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger('dev'));

server.get('/', (req, res) => {
    res.send("Stop Trying to make Fetch Happen!")
})

module.exports = server;