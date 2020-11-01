import {Injectable} from '@angular/core';
import {VKAPI} from 'vkontakte-api';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class ApiProviderService {

  constructor(private cookieService: CookieService) {
  }

  private _api: VKAPI = null;


  get api(): VKAPI {
    if (this._api == null) {
      this.init();
    }
    return this._api;
  }

  init() {
    //todo if cookie die
    this._api = new VKAPI({accessToken: this.cookieService.get('access_token'), isBrowser: true});
  }

  execute<T>(handler: (api: VKAPI) => Promise<T>): Observable<T> {
    return fromPromise(handler(this.api));
  }
}
