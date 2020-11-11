import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiProviderService} from './api-provider.service';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CountryService {

  private countries: Map<number, Observable<string>> = new Map<number, Observable<string>>();

  constructor(private apiProvider: ApiProviderService) {
  }

  getCountryName(id: number): Observable<string> {
    if (!this.countries.get(id)) {
      this.countries.set(id, this.apiProvider.execute(api => api.database.getCountriesById({countryIds: [id]}))
        .pipe(
          map(source => source[0].title),
          shareReplay(1)
        ));
    }
    return this.countries.get(id);
  }
}
