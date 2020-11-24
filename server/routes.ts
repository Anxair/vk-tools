import * as express from 'express';
import {getMusic} from './get-music';
import {getStatic} from './serve-static';


export const routes = express.Router();


//5920343


routes.get('/api/user/get-audio/:id', (req, res) => {
  let id = req.params.id;
  getMusic(id).then(value => {
    res.send(value);
  }).catch(err => {
    console.log('❌ ' + err.message);
    console.log(err);
    process.exitCode;
  });
});

routes.get('/*', (req, res) => getStatic(req, res));



