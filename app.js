const express = require('express');
const http = require('http');
const path = require('path');
const db = require('./db/config');

const { routesInit } = require('./routes/routes_init');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

const server = http.createServer(app);
const port = 3001 || process.env.PORT;

routesInit(app)

server.listen(port,() => console.log('server is on => ',port))