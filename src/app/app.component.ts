import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {TestService} from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vk';

  constructor(private cookieService: CookieService,
              private testService: TestService) {
  }

  ngOnInit(): void {
    if (this.cookieService.get('user_id')) {
      this.testService.getUserInfo();
    }
  }
}
