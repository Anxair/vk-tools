import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../../services/main.service';
import {ApiProviderService} from '../../services/api-provider.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {User} from 'vkontakte-api';
import {UserInfoPartEnum, UserInfoPartPipe} from '../../pipes/user-info-part.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: User;
  fieldList: string[] = UserInfoPartPipe.getAllParts();
  selectRowNumber: number;
  UserInfoPartEnum = UserInfoPartEnum;

  constructor(private route: ActivatedRoute,
              private testService: MainService,
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
    console.log(this.userInfo);
  }

  showSelectInfo(field: string, i: number): void {
    this.selectRowNumber = i;
  }
}

