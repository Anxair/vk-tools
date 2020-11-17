import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private testService: MainService) {
  }

  ngOnInit(): void {
    if (this.cookieService.get('user_id')) {
      this.testService.getUserInfo();
    }
  }
}
