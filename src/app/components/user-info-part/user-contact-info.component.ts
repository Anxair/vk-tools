import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-contact-info',
  template: `
    <ng-container *ngIf="user">
      <div class="mat-h3" *ngIf="user.country">{{'USER_FIELD.COUNTRY'|translate}}: {{user.country.title}}</div>
      <div class="mat-h3" *ngIf="user.city">{{'USER_FIELD.CITY'|translate}}: {{user.city.title}}</div>
      <div class="mat-h3" *ngIf="checkDomainValidation(user.site)">{{'USER_FIELD.SITE'|translate}}: <a href="{{user.site}}"
                                                                                                       target="_blank"> {{user.site}}</a>
      </div>
      <div class="mat-h3" *ngIf="user.nickname || user.domain">
        {{'USER_FIELD.VK'|translate}}: {{user.nickname || user.domain}}</div>
      <div class="mat-h3" *ngIf="user.skype">{{'USER_FIELD.SKYPE'|translate}}: {{user.skype}}</div>
      <div class="mat-h3" *ngIf="user.instagram">{{'USER_FIELD.INSTAGRAM'|translate}}: {{user.instagram}}</div>
      <div class="mat-h3" *ngIf="user.twitter">{{'USER_FIELD.TWITTER'|translate}}: {{user.twitter}}</div>
      <div class="mat-h3" *ngIf="user.facebook">{{'USER_FIELD.FACEBOOK'|translate}}: {{user.facebook}}</div>
      <div class="mat-h3" *ngIf="user.livejournal">{{'USER_FIELD.LIVE_JOURNAL'|translate}}: {{user.livejournal}}</div>
    </ng-container>
  `
})

export class UserContactInfoComponent {

  @Input() user: User;

  checkDomainValidation(site: string): boolean {
    if (site) {
      let regex = '^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$';
      return (site.match(regex) != null);
    } else {
      return false;
    }
  }
}
