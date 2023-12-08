const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');

const server = jsonServer.create();
const corsOptions = {
  origin: ['http://localhost:4200', 'https://borchardttt.github.io/gdo-utfpr'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};


server.use(cors(corsOptions));

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
