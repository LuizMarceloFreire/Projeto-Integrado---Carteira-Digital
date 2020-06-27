const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(routes);

app.listen('3333');