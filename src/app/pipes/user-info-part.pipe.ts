import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';

@Pipe({name: 'userInfoPartPipe'})
export class UserInfoPartPipe extends AbstractEnumPipe<UserInfoPartEnum> {

  init() {
    UserInfoPartPipe.getAllParts().forEach(value => {
      this.map[value] = 'USER.' + value;
    });
  }

 static getAllParts(): string[] {
    return Object.keys(UserInfoPartEnum);
  }

}

export enum UserInfoPartEnum {
  GENERAL_INFO = 'GENERAL_INFO',
  CONTACT_INFO = 'CONTACT_INFO',
  EDUCATION = 'EDUCATION',
  CAREER = 'CAREER',
  LIFE_POSITION = 'LIFE_POSITION',
  PRIVATE_INFO = 'PRIVATE_INFO',
  STATISTIC = 'STATISTIC'
}
