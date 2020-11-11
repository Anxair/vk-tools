import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LanguagePipe} from '../../pipes/language-pipe';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  language: string = this.cookieService.get('lang') || 'en';
  selectedIndex: number = 0;
  @ViewChild('confirmCookie') public confirmCookie = MatDialog;
  selectUser: string;

  constructor(public _languagePipe: LanguagePipe,
              public translate: TranslateService,
              public cookieService: CookieService,
              public dialog: MatDialog,
              public testService: TestService,
              public router: Router) {
    translate.use(this.language);
  }

  ngOnInit(): void {
    this.testService.user.subscribe(value =>
      this.selectUser = value?.firstName);
  };

  openDialogConfirm(): void {
    if (this.cookieService.get('cookie_accept') == '') {
      this.dialog.open(this.confirmCookie).afterClosed().subscribe(value => {
        if (value) {
          this.cookieService.set('cookie_accept', 'true');
          this.login();
        }
      });
    } else {
      this.login();
    }
  }

  login(): void {
    window.location.href = 'https://oauth.vk.com/authorize?client_id=7633891&scope=friends,photos,wall,video,audio,groups,offline&redirect_uri=http://localhost:4200/auth&display=popup&response_type=token';
  }

  selectLanguage(lang: string, i: number): void {
    this.selectedIndex = i;
    this.language = lang.toLowerCase();
    this.cookieService.set('lang', lang.toLowerCase());
    this.translate.use(this.language);
  }

  logout(): void {
    this.testService.logout();
  }
}
