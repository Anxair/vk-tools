import {Injectable} from '@angular/core';
import {ApiProviderService} from './api-provider.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from 'vkontakte-api';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import {Track} from '../dto/Track';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class TestService {

  private currentUser: Subject<User> = new BehaviorSubject(null);
  private _user: Observable<User> = this.currentUser.asObservable();


  constructor(private apiProvider: ApiProviderService,
              private cookieService: CookieService,
              private _http: HttpClient,
              private router: Router) {

  }

  getUserMusic(id: string): Observable<Track[]> {
    return this._http.get<Track[]>('http://localhost:4201/user/get-audio/' + id);
  }

  getUserInfo() {
    this.apiProvider.execute(api => api.users.get({
      userIds: ['id' + this.cookieService.get('user_id')],
      fields: ['about', 'activities', 'bdate', 'books', 'career', 'city', 'connections', 'contacts', 'counters', 'country', 'domain',
        'education', 'games', 'home_town', 'interests', 'lists', 'maiden_name', 'military', 'movies', 'music', 'nickname', 'occupation',
        'personal', 'photo_max', 'quotes', 'relatives', 'relation', 'schools', 'screen_name', 'sex', 'site', 'status', 'timezone', 'tv',
        'universities']
    }))
      .subscribe(value => {
        this.currentUser.next(value[0]);
      });
  }

  get user(): Observable<User> {
    return this._user;
  }

  logout() {
    this.cookieService.deleteAll();
    this.currentUser.next(null);
    this.router.navigateByUrl('');
  }
}

