import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TrackInfo} from '../dto/TrackInfo';
import {HttpClient} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import {Track} from 'ngx-audio-player';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class MusicService {

  private mapTrackList: Map<string, Observable<TrackInfo[]>> = new Map<string, Observable<TrackInfo[]>>();
  private mapPlaylist: Map<string, Track[]> = new Map<string, Track[]>();

  constructor(private _http: HttpClient,
              private cookieService: CookieService) {
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

  getPlaylist() {
    if (!this.mapPlaylist.get(this.cookieService.get('user_id'))) {
      return [];
    }
    return this.mapPlaylist.get(this.cookieService.get('user_id'));
  }

  setPlaylist(playlist: Track[]) {
    this.mapPlaylist.set(this.cookieService.get('user_id'), playlist);
  }
}
