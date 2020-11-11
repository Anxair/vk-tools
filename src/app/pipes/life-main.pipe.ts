import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';
import {LifeMainEnum} from 'vkontakte-api';

@Pipe({name: 'lifeMainPipe'})
export class LifeMainPipe extends AbstractEnumPipe<LifeMainEnum> {

  init() {
    this.map[LifeMainEnum.BeautyAndArt] = 'LIFE_MAIN.BEAUTY_AND_ART';
    this.map[LifeMainEnum.CareerAndMoney] = 'LIFE_MAIN.CAREER_AND_MONEY';
    this.map[LifeMainEnum.EntertainmentAndRecreation] = 'LIFE_MAIN.ENTERTAINMENT_AND_RECREATION';
    this.map[LifeMainEnum.FameAndInfluence] = 'LIFE_MAIN.FAME_AND_INFLUENCE';
    this.map[LifeMainEnum.FamilyAndChildren] = 'LIFE_MAIN.FAMILY_AND_CHILDREN';
    this.map[LifeMainEnum.ImprovingTheWorld] = 'LIFE_MAIN.IMPROVING_THE_WORLD';
    this.map[LifeMainEnum.ScienceAndResearch] = 'LIFE_MAIN.SCIENCE_AND_RESEARCH';
    this.map[LifeMainEnum.SelfDevelopment] = 'LIFE_MAIN.SELF_DEVELOPMENT';
  }

}
