require('dotenv').config({ path: './src/config/config.env' });
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieSession = require('cookie-session');
const cors = require('cors');
const routes = require('./src/routes');
require('./src/database/mongo')();
require('./src/config/passport')(passport);

const app = express();
const { PORT, CLIENT_URL } = process.env;
const oneDayMilliseconds = 24 * 60 * 60 * 1000;
const cookieKey = process.env.COOKIE_KEY;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cookieSession({
  maxAge: oneDayMilliseconds,
  keys: [cookieKey],
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
}));

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', routes);

app.listen(PORT, () => { console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`); });
