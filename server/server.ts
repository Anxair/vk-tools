import express from 'express';
import {routes} from './routes';
import getMp3New from './get-mp3-new';

const app = express();
const rewire = require("rewire");
let vkAudioPatch = rewire('./node_modules/get-audio-vk/dist/index.js');
vkAudioPatch.__set__("get_mp3_1", getMp3New);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
app.use(express.json());
app.use('/', routes);
app.listen(4201, '127.0.0.1', function() {
  console.log('Server now listening on 4201');
});

export async function getMusic(id: string) {
  const login: string = '+375336933211'; // phone or email
  const pass: string = 'freedom2020';
  const yourId: number = 620854736; // your VK ID
  const parse = new vkAudioPatch.ParseAudios({login, pass, yourId, headless: true}); // headless: false if u wanna watch process
  await parse.launch();
  const tracks: Track[] = await parse.run(id, 50); // 1. target-id, 2. max-tracks
  await parse.exit();
  console.log(tracks);
  return tracks;
}

export class Track {
  mp3: string;
  title: string;
  author: string;
  cover: string;
}
