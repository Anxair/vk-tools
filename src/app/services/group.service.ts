import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiProviderService} from './api-provider.service';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GroupService {

  private groupNameMap: Map<number, Observable<string>> = new Map<number, Observable<string>>();

  constructor(private apiProvider: ApiProviderService) {
  }

  getGroupName(id: number): Observable<string> {
    if (!this.groupNameMap.get(id)) {
      this.groupNameMap.set(id, this.apiProvider.execute(api => api.addRequestToQueue({
        method: 'groups.getById',
        params: {'group_id': id}
      })).pipe(map(value => value[0].name), shareReplay(1)));
    }
    return this.groupNameMap.get(id);
  }
}
