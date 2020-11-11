import {Pipe, PipeTransform} from '@angular/core';
import {CityService} from '../services/city.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {Career} from 'vkontakte-api';
import {GroupService} from '../services/group.service';
import {TranslatePipe} from '@ngx-translate/core';
import {PoliticalPipe} from './political.pipe';
import {AttitudePipe} from './attitude.pipe';
import {LifeMainPipe} from './life-main.pipe';
import {PeopleMainPipe} from './people-main.pipe.';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    return value.slice().reverse();
  }
}


@Pipe({name: 'cityName'})
export class CityNamePipe implements PipeTransform {
  constructor(private cityService: CityService) {
  }

  transform(id: number): Observable<string> {
    return this.cityService.getCityName(id);
  }
}


@Pipe({name: 'countryName'})
export class CountryNamePipe implements PipeTransform {
  constructor(private countryService: CountryService) {
  }

  transform(id: number): Observable<string> {
    return this.countryService.getCountryName(id);
  }
}

@Pipe({name: 'groupName'})
export class GroupNamePipe implements PipeTransform {
  constructor(private groupService: GroupService) {
  }

  transform(id: number): Observable<string> {
    return this.groupService.getGroupName(id);
  }
}


@Pipe({name: 'schoolExtendedInfo'})
export class SchoolExtendedInfoPipe implements PipeTransform {
  transform(school: any): string {
    let infoSchool: string = '';
    if (school.yearGraduated) {
      infoSchool += '\'' + school.yearGraduated.toString().slice(2, 4);
    }
    if (school.yearTo || school.yearFrom) {
      infoSchool += ', ' + school.yearFrom + '-' + school.yearTo;
    }
    if (school.speciality) {
      infoSchool += ', ' + school.speciality;
    }
    return infoSchool;
  }
}

@Pipe({name: 'universityExtendedInfo'})
export class UniversityExtendedInfoPipe implements PipeTransform {
  transform(university: any): string {
    let infoUniversity: string = '';
    if (university.graduation) {
      infoUniversity += '\'' + university.graduation.toString().slice(2, 4);
    }
    if (university.facultyName) {
      infoUniversity += ', ' + university.facultyName;
    }
    if (university.chairName) {
      infoUniversity += ', ' + university.chairName;
    }
    if (university.educationForm) {
      infoUniversity += ', ' + university.educationForm;
    }
    if (university.educationStatus) {
      infoUniversity += ', ' + university.educationStatus;
    }
    return infoUniversity;
  }
}

@Pipe({name: 'jobInfo'})
export class JobInfoPipe implements PipeTransform {
  transform(work: Career): string {
    let infoJob: string = '';
    if (work.from) {
      infoJob += work.from + '-';
    }
    if (work.until) {
      infoJob += work.until;
    }
    if (work.position) {
      infoJob += ', ' + work.position;
    }
    return infoJob;
  }
}


@Pipe({name: 'i18n', pure: false})
export class GenerateFieldForTranslatePipe extends TranslatePipe {
  transform(field: string, prefix: string): string {
    let key = field;
    if (prefix) {
      key = prefix + '.' + field.trim().toUpperCase();
    }
    return super.transform(key);
  }
}

@Pipe({name: 'personalTransform'})
export class PersonalTransformPipe implements PipeTransform {
  constructor(private politicalPipe: PoliticalPipe,
              private attitudePipe: AttitudePipe,
              private lifeMainPipe: LifeMainPipe,
              private peopleMainPipe: PeopleMainPipe) {
  }

  transform(obj: any): string {
    if (obj.key == 'political') {
      return this.politicalPipe.transform(obj.value);
    }
    if (obj.key == 'alcohol' || obj.key == 'smoking') {
      return this.attitudePipe.transform(obj.value);
    }
    if (obj.key == 'lifeMain') {
      return this.lifeMainPipe.transform(obj.value);
    }
    if (obj.key == 'peopleMain') {
      return this.peopleMainPipe.transform(obj.value);
    }
    if (obj.key == 'langs') {
      return obj.value.join(', ');
    }
    return obj.value;
  }
}
