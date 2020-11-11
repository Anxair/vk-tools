import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-life-position-info',
  template: `
    <ng-container *ngIf="user">
      <div *ngFor="let personal of user.personal | keyvalue">
        <div class="mat-h3">{{personal.key|i18n:'USER_FIELD'}}
          {{personal|personalTransform|i18n}}</div>
      </div>
    </ng-container>
  `
})

export class UserLifePositionInfoComponent {

  @Input() user: User;

}
