const express = require('express');
const routes = require('./routes');
const path = require('path');

require('./database');

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen('3333');