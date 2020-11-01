import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestService} from '../../services/test.service';
import {ApiProviderService} from '../../services/api-provider.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: User;

  constructor(private route: ActivatedRoute,
              private testService: TestService,
              private apiProvider: ApiProviderService,
              private _http: HttpClient,
              private cookieService: CookieService) {

  }

  ngOnInit() {
    this.testService.user.subscribe(value => {
      console.log(value + ' ngOnInit');
      this.userInfo = value;
    });
    this.route.fragment.subscribe(value => {
      if (value != null) {
        let data = value.match('access_token=(.*)&expires_in.*user_id=(\\d*)');
        this.cookieService.set('user_id', data[2]);
        this.cookieService.set('access_token', data[1]);
        this.apiProvider.init();
        this.testService.getUserInfo();
      } else {
        return;
      }
    });
  }

  printTestInfo() {
    console.log(this.testService.user + ' is service user');
    console.log(this.userInfo + ' is component user');
  }
}

