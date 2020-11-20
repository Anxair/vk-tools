import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-private-info',
  template: `
    <ng-container *ngIf="_user">
      <div class="mat-h3" *ngIf="_user.activities">{{'USER_FIELD.ACTIVITIES'|translate}} {{_user.activities}}</div>
      <div class="mat-h3" *ngIf="_user.interests">{{'USER_FIELD.INTERESTS'|translate}} {{_user.interests}}</div>
      <div class="mat-h3" *ngIf="_user.music">{{'USER_FIELD.MUSIC'|translate}} {{_user.music}}</div>
      <div class="mat-h3" *ngIf="_user.movies">{{'USER_FIELD.MOVIES'|translate}} {{_user.movies}}</div>
      <div class="mat-h3" *ngIf="_user.books">{{'USER_FIELD.BOOKS'|translate}} {{_user.books}}</div>
      <div class="mat-h3" *ngIf="_user.games">{{'USER_FIELD.GAMES'|translate}} {{_user.games}}</div>
      <div class="mat-h3" *ngIf="_user.tv">{{'USER_FIELD.TV'|translate}} {{_user.tv}}</div>
      <div class="mat-h3" *ngIf="_user.quotes">{{'USER_FIELD.QUOTES'|translate}} {{_user.quotes}}</div>
      <div class="mat-h3" *ngIf="_user.about">{{'USER_FIELD.ABOUT'|translate}} {{_user.about}}</div>
      <div class="mat-h3" *ngIf="isShowField">{{'USER_FIELD.NO_INFORMATION'|translate}}</div>
    </ng-container>
  `,
  styles: ['.mat-h3 {white-space: pre-wrap}'
  ]
})

export class UserPrivateInfoComponent {

  isShowField: boolean = true;
  fields: string[] = ['activities', 'interests', 'music', 'movies', 'books', 'games', 'tv', 'quotes', 'about'];
  _user: User;
  @Input() set user(user: User) {
    this._user = user;
    this.fields.forEach(key => {
      if (user[key]) {
        this.isShowField = false;
        return;
      }
    });
  }
}
