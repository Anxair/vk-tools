import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TrackInfo} from '../dto/TrackInfo';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MusicService {

  private mapTrackList: Map<string, Observable<TrackInfo[]>> = new Map<string, Observable<TrackInfo[]>>();

  constructor(private _http: HttpClient) {
  }


  getUserMusic(id: string): Observable<TrackInfo[]> {
    if (!this.mapTrackList.get(id)) {
      this.mapTrackList.set(id, this._http.get<TrackInfo[]>('http://localhost:4201/user/get-audio/' + id).pipe(shareReplay(1), tap(x => {
        x.forEach(value => {
          value.visible = true;
          value.addToPlayList = false;
        });
      })));
    }
    return this.mapTrackList.get(id);
  }

  reloadUserMusic(id: string): Observable<TrackInfo[]> {
    this.mapTrackList.set(id, this._http.get<TrackInfo[]>('http://localhost:4201/user/get-audio/' + id).pipe(shareReplay(1), tap(x => {
      x.forEach(value => {
        value.visible = true;
        value.addToPlayList = false;
      });
    })));
    return this.mapTrackList.get(id);
  }

}
