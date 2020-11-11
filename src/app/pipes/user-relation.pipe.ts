import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';
import {RelationsStatusEnum} from 'vkontakte-api';

@Pipe({name: 'userRelationPipe'})
export class UserRelationPipe extends AbstractEnumPipe<RelationsStatusEnum> {

  init() {
    this.map[RelationsStatusEnum.Unknown] = 'RELATION.UNKNOWN';
    this.map[RelationsStatusEnum.NotMarried] = 'RELATION.NOT_MARRIED';
    this.map[RelationsStatusEnum.HasFriend] = 'RELATION.HAS_FRIEND';
    this.map[RelationsStatusEnum.Betrothed] = 'RELATION.BETROTHED';
    this.map[RelationsStatusEnum.Married] = 'RELATION.MARRIED';
    this.map[RelationsStatusEnum.Complicated] = 'RELATION.COMPLICATED';
    this.map[RelationsStatusEnum.ActiveSearch] = 'RELATION.ACTIVE_SEARCH';
    this.map[RelationsStatusEnum.InLove] = 'RELATION.IN_LOVE';
    this.map[RelationsStatusEnum.CivilMarried] = 'RELATION.CIVIL_MARRIED';
  }

}
