import * as express from 'express';
import {getMusic} from './server';

export const routes = express.Router();

//5920343
routes.get('/user/get-audio/:id', (req, res) => {
  let id = req.params.id;
  getMusic(id).then(value => {
    res.send(value);
  }).catch(err => {
    console.log('❌ ' + err.message);
    process.exitCode;
  });
});

