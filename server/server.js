const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();

let server = http.createServer(app); //crea un servidor

app.use(express.static(publicPath));

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

//IO = esta es la comuniacion del backend // inicializamos server
module.exports.io = socketIO(server);
require('./sockets/socket');