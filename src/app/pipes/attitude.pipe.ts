import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';
import {AlcoholEnum} from 'vkontakte-api';

@Pipe({name: 'attitudePipe'})
export class AttitudePipe extends AbstractEnumPipe<AlcoholEnum> {

  init() {
    this.map[AlcoholEnum.Compromise] = 'ATTITUDE.COMPROMISE';
    this.map[AlcoholEnum.Negative] = 'ATTITUDE.NEGATIVE';
    this.map[AlcoholEnum.Neutral] = 'ATTITUDE.NEUTRAL';
    this.map[AlcoholEnum.Positive] = 'ATTITUDE.POSITIVE';
    this.map[AlcoholEnum.SharplyNegative] = 'ATTITUDE.SHARPLY_NEGATIVE';

  }

}
