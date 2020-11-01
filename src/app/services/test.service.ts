import {Injectable} from '@angular/core';
import {ApiProviderService} from './api-provider.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from 'vkontakte-api';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import {Track} from '../dto/Track';


@Injectable({providedIn: 'root'})
export class TestService {

  private currentUserName: Subject<string> = new BehaviorSubject(this.cookieService.get('user_name'));
  private _userName: Observable<string> = this.currentUserName.asObservable();
  private currentUser: Subject<User> = new BehaviorSubject(null);
  private _user: Observable<User> = this.currentUser.asObservable();


  constructor(private apiProvider: ApiProviderService,
              private cookieService: CookieService,
              private _http: HttpClient) {

  }


  getUserMusic(id: string): Observable<Track[]> {
    return this._http.get<Track[]>('http://localhost:4201/user/get-audio/' + id);
  }

  setCurrentUser(userName: string) {
    this.cookieService.set('user_name', userName);
    this.currentUserName.next(userName);
  }

  get userName(): Observable<string> {
    return this._userName;
  }


  getUserInfo() {
    this.apiProvider.execute(api => api.users.get({userIds: ['id' + this.cookieService.get('user_id')], fields: ['city']}))
      .subscribe(value => {
        this.currentUser.next(value[0]);
        this.setCurrentUser(value[0].firstName);
      });
  }

  get user(): Observable<User> {
    return this._user;
  }
}

