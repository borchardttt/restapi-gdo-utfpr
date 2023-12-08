const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');

const app = express();
const server = jsonServer.create();
const port = process.env.PORT || 8080;

// Configuração CORS
const allowedOrigins = ['http://localhost:4200', 'https://borchardttt.github.io/gdo-utfpr'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Aplicar middleware JSON Server
app.use(jsonServer.defaults());
app.use(jsonServer.router('db.json'));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
