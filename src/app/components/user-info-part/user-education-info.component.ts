import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-education-info',
  template: `
    <ng-container *ngIf="user">
      <div class="mat-list-base" *ngIf="user.schools?.length>0">
        <div class="mat-h3">{{'USER_FIELD.SCHOOL' | translate}}:</div>
        <ul *ngFor="let school of user.schools | reverse, index as i">
          <li class="mat-list-item">{{i + 1}}. {{school?.country|countryName|async}}, {{school?.city|cityName|async}},
            {{school.name}} {{school|schoolExtendedInfo}}
          </li>
        </ul>
      </div>
      <div class="mat-list-base" *ngIf="user.universities?.length>0">
        <div class="mat-h3">{{'USER_FIELD.UNIVERSITY' | translate}}:</div>
        <ul *ngFor="let university of user.universities | reverse, index as i">
          <li class="mat-list-item">
            {{i + 1}}. {{university?.country|countryName|async}}
            , {{university.city|cityName|async}}, {{university.name}} {{university|universityExtendedInfo}}
          </li>
        </ul>
      </div>
      <div class="mat-h3" *ngIf="user.schools.length==0 && user.universities.length==0">{{'USER_FIELD.NO_INFORMATION'|translate}}</div>
    </ng-container>
  `
})

export class UserEducationInfoComponent {

  @Input() user: User;


}
