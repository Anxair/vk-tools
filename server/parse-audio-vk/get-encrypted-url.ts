import axios from 'axios';

function rebuildIds(ids: string[], size: number) {
  let tmp: string[][] = [];
  ids.map(id => id.split(','))
    .reduce((allIds, part) => {
      allIds.push(...part);
      return allIds;
    }, [])
    .forEach((id, i) => {
      if (i < 400) {
        let bucketNo: number = Math.floor(i / size);
        let bucket = tmp[bucketNo] || [];
        bucket.push(id);
        tmp[bucketNo] = bucket;
      }
    });
  return tmp.map(bucket => bucket.join(','));
}

async function getEncryptedUrl(cookie: string, ids: string[]) {
  const result: any[] = [];
  const promises = rebuildIds(ids, 10).map(async id => {
    return await axios.post(
      "https://vk.com/al_audio.php",
      `act=reload_audio&al=1&ids=${id}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Cookie: cookie,
          "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    );
  });

  await Promise.all(promises).then(responses => {
    let i = 0;
    responses.forEach(track => {
      let data;

      try {
        data = track.data.payload[1][0];
        if (typeof data !== 'undefined') {
          data.forEach((item: any) => {
            if (!Array.isArray(item) && !item.length) {
              return;
            }
            result.push(item[2]);
            // console.log((i++) + '. ' + item[2]);
          });
        }
      } catch (err) {
        console.error(err);
        console.log(data);
         throw new Error("HTTP Request is failed, please restart");
      }
    });
  });

  return result;
}

getEncryptedUrl.default = getEncryptedUrl;
export default getEncryptedUrl;
