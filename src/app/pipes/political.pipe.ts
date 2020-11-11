import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';
import {PoliticalEnum} from 'vkontakte-api';

@Pipe({name: 'politicalPipe'})
export class PoliticalPipe extends AbstractEnumPipe<PoliticalEnum> {

  init() {
    this.map[PoliticalEnum.Communist] = 'POLITICAL.COMMUNIST';
    this.map[PoliticalEnum.Conservative] = 'POLITICAL.CONSERVATIVE';
    this.map[PoliticalEnum.Indifferent] = 'POLITICAL.INDIFFERENT';
    this.map[PoliticalEnum.Liberal] = 'POLITICAL.LIBERAL';
    this.map[PoliticalEnum.Libertarian] = 'POLITICAL.LIBERTARIAN';
    this.map[PoliticalEnum.Moderate] = 'POLITICAL.MODERATE';
    this.map[PoliticalEnum.Monarchical] = 'POLITICAL.MONARCHICAL';
    this.map[PoliticalEnum.Socialist] = 'POLITICAL.SOCIALIST';
    this.map[PoliticalEnum.Ultraconservative] = 'POLITICAL.ULTRACONSERVATIVE';
  }

}
