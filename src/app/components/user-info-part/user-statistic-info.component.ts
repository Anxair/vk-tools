import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-statistic-info',
  template: `
    <ng-container *ngIf="user">
      <div *ngFor="let stat of user.counters | keyvalue">
        <div class="mat-h3" *ngIf="isDisplayFields(stat)">{{stat.key|i18n:'STATISTIC'}} {{stat.value}}</div>
      </div>
    </ng-container>
  `
})


export class UserStatisticInfoComponent {

  isDisplayFields(stat: any): boolean {
    return !(stat.key == 'clipsFollowers' || stat.key == 'newPhotoTags' || stat.key == 'newRecognitionTags' || stat.key == 'subscriptions');
  }

  @Input() user: User;

}
