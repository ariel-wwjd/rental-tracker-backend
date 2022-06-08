require('dotenv').config({ path: './src/config/config.env' });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes');
require('./src/database/mongo')();

const app = express();
const { PORT, CLIENT_URL } = process.env;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors({ origin: CLIENT_URL, credentials: true }));

app.use('/api', routes);

app.listen(PORT, () => { console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`); });
