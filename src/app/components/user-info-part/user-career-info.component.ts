import {Component, Input} from '@angular/core';
import {Career, User} from 'vkontakte-api';

@Component({
  selector: 'app-user-career-info',
  template: `
    <ng-container *ngIf="_user">
      <div class="mat-list-base" *ngIf="_career.length>0">
        <div class="mat-h3">{{'USER_FIELD.JOB' | translate}}:</div>
        <ul *ngFor="let work of _career; index as i">
          <li class="mat-list-item">
            {{i + 1}}. {{work.countryId|countryName|async}}, {{work.cityId|cityName|async}}, {{work.company}}
            <ng-container *ngIf="work.groupId">{{work.groupId|groupName|async}}</ng-container>
            {{work|jobInfo}}
          </li>
        </ul>
      </div>
      <div class="mat-h3" *ngIf="_career.length==0">{{'USER_FIELD.NO_INFORMATION'|translate}}</div>
    </ng-container>
  `
})

export class UserCareerInfoComponent {

  _user: User;
  _career: Career[] = [];

  @Input() set user(user: User) {
    this._user = user;
    if ('career' in user) {
      this._career = user.career as any ?? [];
    }
  };

}
