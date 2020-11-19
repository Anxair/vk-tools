import {ParseAudios, UserAuth} from './parse-audio-vk';

const fs = require('fs');

export class Track {
  mp3: string;
  title: string;
  author: string;
  cover: string;
}

export async function getMusic(id: string) {
  let fileContent = fs.readFileSync('./authorization.json', 'utf8');
  let user: UserAuth = JSON.parse(fileContent);
  const parse = new ParseAudios({user, headless: true});



  await parse.launch();




  const tracks: Track[] = await parse.run(+id, 20); // 1. target-id, 2. max-tracks
  await parse.exit();
  return tracks;
}



