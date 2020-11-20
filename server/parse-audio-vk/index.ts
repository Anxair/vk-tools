import {Browser, Page} from 'puppeteer';
import getScrolledDownPage from './get-scrolled-down-page';
import puppeteer from 'puppeteer';
import decode from './decoder/decode';
import getMp3 from './get-mp3';
import {AudioRecord, UrlLoader} from './url-loader';



async function getCookie(page: Page) {
  await page.click('.audio_row');
  const cookie = (await page.cookies())
    .map((cookie) => {
      return `${cookie.name}=${cookie.value}`;
    })
    .join('; ');
  return cookie;
}

function takeId(data: string) {
  const splitted = data[13].split('/');
  const unique = `${splitted[2]}_${splitted[5]}`;
  return `${data[1]}_${data[0]}_${unique}`;
}

function takeTempId(data: string) {
  return `${data[1]}_${data[0]}`;
}

interface ParseConfig {
  user: UserAuth;
  headless?: boolean;
}

class ParseAudios {
  private browser!: Browser;

  constructor(private readonly config: ParseConfig) {
    if (!(config.user.login && config.user.password && config.user.id)) {
      throw new Error('Login, pass or yourId is undefined');
    }
  }

  async launch() {
    this.browser = await puppeteer.launch({args: ['--no-sandbox']});
    console.log('login...');
    const page = await this.browser.newPage();
    await page.goto('https://vk.com/feed');
    await page.waitFor('input[id=email]');
    await page.$eval(
      'input[id="email"]',
      (el, login) => ((el as HTMLInputElement).value = login),
      this.config.user.login
    );
    await page.$eval(
      'input[id="pass"]',
      (el, pass) => ((el as HTMLInputElement).value = pass),
      this.config.user.password
    );
    await page.click('#login_button');
    await page.waitFor('div.top_profile_name', {timeout: 10000}).catch(() => {
      throw new Error(
        'Timeout 10s \n Failed to auth, possible reasons: \n 1. Incorrect login or password \n 2. Showed captcha \n 3.' +
        ' Slowly internet \n' +
        '4. Slowly computer'
      );
    });
    await page.close();
    console.log(`✅ Auth`);
  }

  async exit() {
    await this.browser.close();
  }

  async run(id: number, max = 0) {
    const page = await this.browser.newPage();
    await page.goto(`https://vk.com/audios${id}`);
    await getScrolledDownPage(page);
    const cookie = await getCookie(page);
    const audiosDataset: string[] = await page.evaluate((max) => {
      const audios = Array.from(document.querySelectorAll('.audio_row'));
      const data = audios.map((item) =>
        JSON.parse((item as any).dataset.audio)
      );
      if (max) {
        return data.splice(0, max);
      }
      return data;
    }, max);
    let tracks = audiosDataset.map((track) => ({
      link: '',
      title: track[3],
      author: track[4],
      cover: track[14] && track[14].split(',')[1],
      tempId: takeTempId(track)
    }));
    await page.close();


    const ids = audiosDataset.map((dataset) => takeId(dataset));
    let loader = new UrlLoader();

    let record: AudioRecord[] = await loader.getEncodedUrls(cookie, ids).toPromise();

    tracks = tracks.map((item) => {
      let musicLink: string = '';
      record.forEach(value => {
        if (value.id == item.tempId) {
          musicLink = value.link;
        }
      });
      const encodedMp3 = decode(musicLink, this.config.user.id);
      const mp3 = getMp3(encodedMp3);
      if (mp3) {
        return {...item, link: mp3 ? mp3 : ''};
      }
    }).filter(value => value);

    console.log(
      `⚡ Finished ${tracks.length} / ${audiosDataset.length} tracks`
    );
    return tracks;
  }


}

export interface UserAuth {
  login: string;
  password: string;
  id: string;
}

export {ParseAudios};
