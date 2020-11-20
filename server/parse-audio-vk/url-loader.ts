import {AsyncSubject, forkJoin, from, Observable, of, timer} from 'rxjs';
import axios from 'axios';
import {map, mergeMap, tap} from 'rxjs/operators';

export class UrlLoader {

  createRequest(cookie: string, ids: string[]): Observable<AudioRecord[]> {
    if (ids.length > 10) {
      throw 'Request will rejected by VK';
    }
    return from(axios.post('https://vk.com/al_audio.php',
      `act=reload_audio&al=1&ids=${ids.join(',')}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Cookie: cookie,
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'
        }
      }
    ))
      .pipe(
        map(track => {
          try {
            const data = track.data.payload[1][0];
            if (Array.isArray(data)) {
              return data.map((item: any) => {
                if (!Array.isArray(item) && !item.length) {
                  return {};
                }
                return {id: item[1]+'_'+item[0],link: item[2]};
              });
            } else{
              console.warn('data not array', data);
            }
          } catch (err) {
            console.error(err);
          }
        })
      );
  }

  getEncodedUrls(cookie: string, ids: string[]): Observable<AudioRecord[]> {
    let subj: AsyncSubject<AudioRecord[]> = new AsyncSubject();
    let requests: string[][] = this.splitArray(ids, 10);
    let batches: string[][][] = this.splitArray(requests, 35).reverse();
    let records: AudioRecord[] = [];
    let unprocessedBatches = batches.length;
    let subscription = timer(0, 60000)
      .pipe(
        map(t => batches.pop()),
        mergeMap(batch => {
          if (batch == null) {
            return of([]);
          } else {
            return forkJoin(batch.map(request => this.createRequest(cookie, request)))
              .pipe(
                map(responses => {
                  console.log(new Date() + ' receive pack ' + responses.length);
                  return responses.reduce((storage, item) => {
                    storage.push(...item);
                    return storage;
                  }, []);
                })
              );
          }
        })
      )
      .subscribe(data => {
        console.log(new Date() + ' store records ' + data.length);
        records.push(...data);
        unprocessedBatches--;
        if (unprocessedBatches == 0) {
          subj.next(records);
          subj.complete();
          subscription.unsubscribe();
        }
      });
    return subj;
  }

  private splitArray<T>(arr: T[], chunkSize: number): T[][] {
    let i = 0;
    return arr.reduce((accum, item) => {
      let bucketN = Math.floor(i / chunkSize);
      let bucket = accum[bucketN] || [];
      bucket.push(item);
      accum[bucketN] = bucket;
      i++;
      return accum;
    }, []);
  }

}

export interface AudioRecord {
  id?: string;
  link?: string;
}
