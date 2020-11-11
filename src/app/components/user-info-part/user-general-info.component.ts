import {Component, Input} from '@angular/core';
import {User, SexEnum} from 'vkontakte-api';

@Component({
  selector: 'app-user-general-info',
  template: `
    <ng-container *ngIf="user">
      <div class="mat-h3" *ngIf="user.lastName">{{'USER_FIELD.SURNAME'|translate}}: {{user.lastName}}</div>
      <div class="mat-h3" *ngIf="user.firstName">{{'USER_FIELD.NAME'|translate}}: {{user.firstName}}</div>
      <div class="mat-h3" *ngIf="user.sex == SexEnum.Female && user.maidenName">
        {{'USER_FIELD.MAIDEN_NAME'|translate}}: {{user.maidenName}}</div>
      <div class="mat-h3" *ngIf="user.nickname">{{'USER_FIELD.MIDDLE_NAME'|translate}}: {{user.nickname}}</div>
      <div class="mat-h3" *ngIf="user.bdate">{{'USER_FIELD.BIRTH_DATE'|translate}}: {{user.bdate}}</div>
      <div class="mat-h3" *ngIf="user.homeTown">{{'USER_FIELD.HOME_TOWN' | translate}}: {{user.homeTown}}</div>
      <div class="mat-h3" *ngIf="user.relation">{{'USER_FIELD.RELATION'|translate}}: {{user.relation | userRelationPipe | translate}}</div>
    </ng-container>
  `
})

export class UserGeneralInfoComponent {

  @Input() user: User;
  SexEnum = SexEnum;
}
