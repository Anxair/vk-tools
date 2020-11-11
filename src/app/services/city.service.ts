import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiProviderService} from './api-provider.service';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CityService {

  private cities: Map<number, Observable<string>> = new Map<number, Observable<string>>();

  constructor(private apiProvider: ApiProviderService) {
  }

  getCityName(id: number): Observable<string> {
    if (!this.cities.get(id)) {
      this.cities.set(id, this.apiProvider.execute(api => api.database.getCitiesById({cityIds: [id]}))
        .pipe(
          map(source => source[0].title),
          shareReplay(1)
        ));
    }
    return this.cities.get(id);
  }
}

