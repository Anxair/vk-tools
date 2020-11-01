import {Pipe} from '@angular/core';
import {AbstractEnumPipe} from './abstract-enum.pipe';

@Pipe({name: 'languagePipe'})
export class LanguagePipe extends AbstractEnumPipe<LanguageEnum> {

  init() {
    this.map[LanguageEnum.EN] = 'English';
    this.map[LanguageEnum.RU] = 'Русский';
    this.map[LanguageEnum.BE] = 'Беларуская';
  }

  getAllLanguages() {
    return Object.keys(LanguageEnum);
  }

}

export enum LanguageEnum {
  EN = 'EN',
  RU = 'RU',
  BE = 'BE',
}
