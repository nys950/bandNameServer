const express = require('express');
const path = require('path');
require('dotenv').config();
//APP de express
const app = express();

//node Server
const http = require('http').createServer(app);
module.exports.io = require('socket.io')(http);
require('./sockets/socket')

//paht publico
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

http.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log('servidor corriendo en', process.env.PORT)
})

