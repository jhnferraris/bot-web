// @flow

import compression from 'compression';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import renderApp from './render-app';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

app.get('/api/questions', (req, res) => {
  axios.get('http://localhost:3000/questions').then((response) => {
    res.json(response.data);
  });
});


app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
});
