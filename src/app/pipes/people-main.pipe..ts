import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';
import {PeopleMainEnum} from 'vkontakte-api';

@Pipe({name: 'peopleNamePipe'})
export class PeopleMainPipe extends AbstractEnumPipe<PeopleMainEnum> {

  init() {
    this.map[PeopleMainEnum.BeautyAndHealth] = 'PEOPLE_MAIN.BEAUTY_AND_HEALTH';
    this.map[PeopleMainEnum.CourageAndPerseverance] = 'PEOPLE_MAIN.COURAGE_AND_PERSEVERANCE';
    this.map[PeopleMainEnum.HumorAndLoveForLife] = 'PEOPLE_MAIN.HUMOR_AND_LOVE_FOR_LIFE';
    this.map[PeopleMainEnum.KindnessAndHonesty] = 'PEOPLE_MAIN.KINDNESS_AND_HONESTY';
    this.map[PeopleMainEnum.PowerAndWealth] = 'PEOPLE_MAIN.POWER_AND_WEALTH';
    this.map[PeopleMainEnum.SmartAndCreative] = 'PEOPLE_MAIN.SMART_AND_CREATIVE';
  }

}
