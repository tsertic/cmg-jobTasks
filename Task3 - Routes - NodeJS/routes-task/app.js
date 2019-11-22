const express = require('express');
const fs = require('file-system');
const app = express();
const http = require('http');
const rootRoutes = require('./routes/root-routes');
const aboutUsRoutes = require('./routes/aboutUs-routes');
const pageNotFoundRoutes = require('./routes/pageNotFound-routes');

app.use(express.json());

app.use((req, res, next) => {
  console.log('ip is', req.url);
  next();
});

app.use(rootRoutes);
app.use(aboutUsRoutes);
app.use(pageNotFoundRoutes);

app.listen(3000, (req, res) => {
  console.log('Server up and running');
});
