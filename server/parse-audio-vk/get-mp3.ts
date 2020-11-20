function getMp3(url: string) {
  let data: string[] = url.match(new RegExp('\\/\\w{11}\\/'));
  if (data) {
    url = url.replace(data[0], '/');
  }
  data = url.match(new RegExp('\\.m3u8\\?'));
  if (data) {
    url = url.replace(data[0], '.mp3?').replace('/index', '');
  }
  return url;
}

getMp3.default = getMp3;
export default getMp3;
