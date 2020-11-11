import {Component, Input} from '@angular/core';
import {User} from 'vkontakte-api';

@Component({
  selector: 'app-user-private-info',
  template: `
    <ng-container *ngIf="user" >
      <div class="mat-h3" *ngIf="user.activities">{{'USER_FIELD.ACTIVITIES'|translate}} {{user.activities}}</div>
      <div class="mat-h3" *ngIf="user.interests">{{'USER_FIELD.INTERESTS'|translate}} {{user.interests}}</div>
      <div class="mat-h3" *ngIf="user.music">{{'USER_FIELD.MUSIC'|translate}} {{user.music}}</div>
      <div class="mat-h3" *ngIf="user.movies">{{'USER_FIELD.MOVIES'|translate}} {{user.movies}}</div>
      <div class="mat-h3" *ngIf="user.books">{{'USER_FIELD.BOOKS'|translate}} {{user.books}}</div>
      <div class="mat-h3" *ngIf="user.games">{{'USER_FIELD.GAMES'|translate}} {{user.games}}</div>
      <div class="mat-h3" *ngIf="user.tv">{{'USER_FIELD.TV'|translate}} {{user.tv}}</div>
      <div class="mat-h3" *ngIf="user.quotes">{{'USER_FIELD.QUOTES'|translate}} {{user.quotes}}</div>
      <div class="mat-h3" *ngIf="user.about">{{'USER_FIELD.ABOUT'|translate}} {{user.about}}</div>
    </ng-container>
  `,
  styles: ['.mat-h3 {white-space: pre-wrap}'
  ]
})


export class UserPrivateInfoComponent {

  @Input() user: User;

  print() {
    if ('about' in this.user) {
      console.log(this.user.about);
    }
  }
}
